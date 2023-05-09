# accounts

### Available Operations

* [getApiV1AccountsRelationships](#getapiv1accountsrelationships) - Sets a private note on a user.
* [getApiV1AccountsSearch](#getapiv1accountssearch) - Search for matching accounts by username or display name.
* [getApiV1AccountsVerifyCredentials](#getapiv1accountsverifycredentials) - Test to make sure that the user token works.
* [getApiV1AccountsId](#getapiv1accountsid)
* [getApiV1AccountsIdFeaturedTags](#getapiv1accountsidfeaturedtags) - Tags featured by this account.
* [getApiV1AccountsIdFollowers](#getapiv1accountsidfollowers) - Accounts which follow the given account, if network is not hidden by the account owner.
* [getApiV1AccountsIdFollowing](#getapiv1accountsidfollowing) - Accounts which the given account is following, if network is not hidden by the account owner.
* [getApiV1AccountsIdIdentityProofs](#getapiv1accountsididentityproofs) - Array of IdentityProof
* [getApiV1AccountsIdLists](#getapiv1accountsidlists) - User lists that you have added this account to.
* [getApiV1AccountsIdStatuses](#getapiv1accountsidstatuses) - Statuses posted to the given account.
* [patchApiV1AccountsUpdateCredentials](#patchapiv1accountsupdatecredentials) - Update the user's display and preferences.
* [postApiV1Accounts](#postapiv1accounts) - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.
* [postApiV1AccountsIdBlock](#postapiv1accountsidblock) - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* [postApiV1AccountsIdFollow](#postapiv1accountsidfollow) - Follow the given account. Can also be used to update whether to show reblogs or enable notifications.
* [postApiV1AccountsIdMute](#postapiv1accountsidmute) - Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).
* [postApiV1AccountsIdNote](#postapiv1accountsidnote) - Sets a private note on a user.
* [postApiV1AccountsIdPin](#postapiv1accountsidpin) - Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
* [postApiV1AccountsIdUnblock](#postapiv1accountsidunblock) - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* [postApiV1AccountsIdUnfollow](#postapiv1accountsidunfollow) - Unfollow the given account.
* [postApiV1AccountsIdUnmute](#postapiv1accountsidunmute) - Unmute the given account.
* [postApiV1AccountsIdUnpin](#postapiv1accountsidunpin) - Remove the given account from the user's featured profiles.

## getApiV1AccountsRelationships

Sets a private note on a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AccountsRelationshipsRequest;
import org.openapis.openapi.models.operations.GetApiV1AccountsRelationshipsResponse;
import org.openapis.openapi.models.operations.GetApiV1AccountsRelationshipsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AccountsRelationshipsRequest req = new GetApiV1AccountsRelationshipsRequest(                new String[]{{
                                add("excepturi"),
                                add("odit"),
                            }});            

            GetApiV1AccountsRelationshipsResponse res = sdk.accounts.getApiV1AccountsRelationships(req, new GetApiV1AccountsRelationshipsSecurity("ea") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AccountsSearch

Search for matching accounts by username or display name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AccountsSearchRequest;
import org.openapis.openapi.models.operations.GetApiV1AccountsSearchResponse;
import org.openapis.openapi.models.operations.GetApiV1AccountsSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AccountsSearchRequest req = new GetApiV1AccountsSearchRequest("accusantium") {{
                following = false;
                limit = 69167L;
                resolve = "maiores";
            }};            

            GetApiV1AccountsSearchResponse res = sdk.accounts.getApiV1AccountsSearch(req, new GetApiV1AccountsSearchSecurity("quidem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AccountsVerifyCredentials

Test to make sure that the user token works.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AccountsVerifyCredentialsResponse;
import org.openapis.openapi.models.operations.GetApiV1AccountsVerifyCredentialsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AccountsVerifyCredentialsResponse res = sdk.accounts.getApiV1AccountsVerifyCredentials(new GetApiV1AccountsVerifyCredentialsSecurity("ipsam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AccountsId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdRequest;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdResponse;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AccountsIdRequest req = new GetApiV1AccountsIdRequest("voluptate");            

            GetApiV1AccountsIdResponse res = sdk.accounts.getApiV1AccountsId(req, new GetApiV1AccountsIdSecurity("autem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AccountsIdFeaturedTags

Tags featured by this account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdFeaturedTagsRequest;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdFeaturedTagsResponse;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdFeaturedTagsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AccountsIdFeaturedTagsRequest req = new GetApiV1AccountsIdFeaturedTagsRequest("nam");            

            GetApiV1AccountsIdFeaturedTagsResponse res = sdk.accounts.getApiV1AccountsIdFeaturedTags(req, new GetApiV1AccountsIdFeaturedTagsSecurity("eaque") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.featuredTags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AccountsIdFollowers

Accounts which follow the given account, if network is not hidden by the account owner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdFollowersRequest;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdFollowersResponse;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdFollowersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AccountsIdFollowersRequest req = new GetApiV1AccountsIdFollowersRequest("pariatur") {{
                limit = 365496L;
                maxId = "voluptatibus";
                sinceId = "perferendis";
            }};            

            GetApiV1AccountsIdFollowersResponse res = sdk.accounts.getApiV1AccountsIdFollowers(req, new GetApiV1AccountsIdFollowersSecurity("fugiat") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AccountsIdFollowing

Accounts which the given account is following, if network is not hidden by the account owner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdFollowingRequest;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdFollowingResponse;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdFollowingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AccountsIdFollowingRequest req = new GetApiV1AccountsIdFollowingRequest("amet") {{
                limit = 11714L;
                maxId = "cumque";
                sinceId = "corporis";
            }};            

            GetApiV1AccountsIdFollowingResponse res = sdk.accounts.getApiV1AccountsIdFollowing(req, new GetApiV1AccountsIdFollowingSecurity("hic") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AccountsIdIdentityProofs

Array of IdentityProof

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdIdentityProofsRequest;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdIdentityProofsResponse;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdIdentityProofsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AccountsIdIdentityProofsRequest req = new GetApiV1AccountsIdIdentityProofsRequest("libero");            

            GetApiV1AccountsIdIdentityProofsResponse res = sdk.accounts.getApiV1AccountsIdIdentityProofs(req, new GetApiV1AccountsIdIdentityProofsSecurity("nobis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.identityProofs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AccountsIdLists

User lists that you have added this account to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdListsRequest;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdListsResponse;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdListsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AccountsIdListsRequest req = new GetApiV1AccountsIdListsRequest("dolores");            

            GetApiV1AccountsIdListsResponse res = sdk.accounts.getApiV1AccountsIdLists(req, new GetApiV1AccountsIdListsSecurity("quis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.lists != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AccountsIdStatuses

Statuses posted to the given account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdStatusesRequest;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdStatusesResponse;
import org.openapis.openapi.models.operations.GetApiV1AccountsIdStatusesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AccountsIdStatusesRequest req = new GetApiV1AccountsIdStatusesRequest("totam");            

            GetApiV1AccountsIdStatusesResponse res = sdk.accounts.getApiV1AccountsIdStatuses(req, new GetApiV1AccountsIdStatusesSecurity("dignissimos") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchApiV1AccountsUpdateCredentials

Update the user's display and preferences.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchApiV1AccountsUpdateCredentialsRequestBody;
import org.openapis.openapi.models.operations.PatchApiV1AccountsUpdateCredentialsRequestBodySource;
import org.openapis.openapi.models.operations.PatchApiV1AccountsUpdateCredentialsResponse;
import org.openapis.openapi.models.operations.PatchApiV1AccountsUpdateCredentialsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "eaque".getBytes()            

            PatchApiV1AccountsUpdateCredentialsResponse res = sdk.accounts.patchApiV1AccountsUpdateCredentials(req, new PatchApiV1AccountsUpdateCredentialsSecurity("quis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1Accounts

Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AccountsRequestBody;
import org.openapis.openapi.models.operations.PostApiV1AccountsResponse;
import org.openapis.openapi.models.operations.PostApiV1AccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "nesciunt".getBytes()            

            PostApiV1AccountsResponse res = sdk.accounts.postApiV1Accounts(req, new PostApiV1AccountsSecurity("eos") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AccountsIdBlock

Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdBlockRequest;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdBlockResponse;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdBlockSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AccountsIdBlockRequest req = new PostApiV1AccountsIdBlockRequest("perferendis");            

            PostApiV1AccountsIdBlockResponse res = sdk.accounts.postApiV1AccountsIdBlock(req, new PostApiV1AccountsIdBlockSecurity("dolores") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationship != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AccountsIdFollow

Follow the given account. Can also be used to update whether to show reblogs or enable notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdFollowRequest;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdFollowRequestBody;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdFollowResponse;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdFollowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AccountsIdFollowRequest req = new PostApiV1AccountsIdFollowRequest("minus") {{
                requestBody = "quam".getBytes();
            }};            

            PostApiV1AccountsIdFollowResponse res = sdk.accounts.postApiV1AccountsIdFollow(req, new PostApiV1AccountsIdFollowSecurity("dolor") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationship != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AccountsIdMute

Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdMuteRequest;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdMuteRequestBody;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdMuteResponse;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdMuteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AccountsIdMuteRequest req = new PostApiV1AccountsIdMuteRequest("vero") {{
                requestBody = "nostrum".getBytes();
            }};            

            PostApiV1AccountsIdMuteResponse res = sdk.accounts.postApiV1AccountsIdMute(req, new PostApiV1AccountsIdMuteSecurity("hic") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationship != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AccountsIdNote

Sets a private note on a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdNoteRequest;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdNoteRequestBody;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdNoteResponse;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdNoteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AccountsIdNoteRequest req = new PostApiV1AccountsIdNoteRequest("recusandae") {{
                requestBody = "omnis".getBytes();
            }};            

            PostApiV1AccountsIdNoteResponse res = sdk.accounts.postApiV1AccountsIdNote(req, new PostApiV1AccountsIdNoteSecurity("facilis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationship != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AccountsIdPin

Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdPinRequest;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdPinResponse;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdPinSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AccountsIdPinRequest req = new PostApiV1AccountsIdPinRequest("perspiciatis");            

            PostApiV1AccountsIdPinResponse res = sdk.accounts.postApiV1AccountsIdPin(req, new PostApiV1AccountsIdPinSecurity("voluptatem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationship != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AccountsIdUnblock

Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnblockRequest;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnblockResponse;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnblockSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AccountsIdUnblockRequest req = new PostApiV1AccountsIdUnblockRequest("porro");            

            PostApiV1AccountsIdUnblockResponse res = sdk.accounts.postApiV1AccountsIdUnblock(req, new PostApiV1AccountsIdUnblockSecurity("consequuntur") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationship != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AccountsIdUnfollow

Unfollow the given account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnfollowRequest;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnfollowResponse;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnfollowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AccountsIdUnfollowRequest req = new PostApiV1AccountsIdUnfollowRequest("blanditiis");            

            PostApiV1AccountsIdUnfollowResponse res = sdk.accounts.postApiV1AccountsIdUnfollow(req, new PostApiV1AccountsIdUnfollowSecurity("error") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationship != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AccountsIdUnmute

Unmute the given account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnmuteRequest;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnmuteResponse;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnmuteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AccountsIdUnmuteRequest req = new PostApiV1AccountsIdUnmuteRequest("eaque");            

            PostApiV1AccountsIdUnmuteResponse res = sdk.accounts.postApiV1AccountsIdUnmute(req, new PostApiV1AccountsIdUnmuteSecurity("occaecati") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationship != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AccountsIdUnpin

Remove the given account from the user's featured profiles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnpinRequest;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnpinResponse;
import org.openapis.openapi.models.operations.PostApiV1AccountsIdUnpinSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AccountsIdUnpinRequest req = new PostApiV1AccountsIdUnpinRequest("rerum");            

            PostApiV1AccountsIdUnpinResponse res = sdk.accounts.postApiV1AccountsIdUnpin(req, new PostApiV1AccountsIdUnpinSecurity("adipisci") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationship != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
