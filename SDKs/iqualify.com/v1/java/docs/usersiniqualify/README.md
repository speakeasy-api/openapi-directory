# usersInIQualify

### Available Operations

* [getUsersUserEmail](#getusersuseremail) - Find user by email
* [getUsersUserEmailOfferings](#getusersuseremailofferings) - Find user's offerings
* [patchUsersUserEmail](#patchusersuseremail) - Update user
* [postUsers](#postusers) - Add new user
* [postUsersUserEmailInviteEmail](#postusersuseremailinviteemail) - Resend invitation email
* [postUsersUserEmailOfferings](#postusersuseremailofferings) - Adds the user to the specified offerings as a learner
* [postUsersUserEmailPermissionsPermissionName](#postusersuseremailpermissionspermissionname) - Add permission to user
* [putUsersUserEmailSuspend](#putusersuseremailsuspend) - Suspend user

## getUsersUserEmail

Responds with a user matching the specified email.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserEmailRequest;
import org.openapis.openapi.models.operations.GetUsersUserEmailResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersUserEmailRequest req = new GetUsersUserEmailRequest("Moriah55@hotmail.com");            

            GetUsersUserEmailResponse res = sdk.usersInIQualify.getUsersUserEmail(req);

            if (res.userResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserEmailOfferings

Responds with all offerings that the user in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserEmailOfferingsRequest;
import org.openapis.openapi.models.operations.GetUsersUserEmailOfferingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersUserEmailOfferingsRequest req = new GetUsersUserEmailOfferingsRequest("Cornelius21@gmail.com");            

            GetUsersUserEmailOfferingsResponse res = sdk.usersInIQualify.getUsersUserEmailOfferings(req);

            if (res.offeringMetadataResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchUsersUserEmail

Updates the specified user by email.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchUsersUserEmailRequest;
import org.openapis.openapi.models.operations.PatchUsersUserEmailResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserMetadata;
import org.openapis.openapi.models.shared.UserProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PatchUsersUserEmailRequest req = new PatchUsersUserEmailRequest("Myrtle_Klein@yahoo.com") {{
                user = new User() {{
                    email = "Marina5@gmail.com";
                    firstName = "Anabelle";
                    lastName = "Kerluke";
                    metadata = new UserMetadata() {{
                        tags = new String[]{{
                            add("quaerat"),
                            add("accusamus"),
                        }};
                    }};;
                    personId = "quidem";
                    profile = new UserProfileRequest() {{
                        displayName = "voluptatibus";
                    }};;
                    sendInvite = false;
                }};;
            }};            

            PatchUsersUserEmailResponse res = sdk.usersInIQualify.patchUsersUserEmail(req);

            if (res.userResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsers

Creates a new user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserMetadata;
import org.openapis.openapi.models.shared.UserProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.User req = new User() {{
                email = "Chelsea85@yahoo.com";
                firstName = "Annamae";
                lastName = "Roberts";
                metadata = new UserMetadata() {{
                    tags = new String[]{{
                        add("iusto"),
                        add("voluptate"),
                        add("dolorum"),
                    }};
                }};;
                personId = "deleniti";
                profile = new UserProfileRequest() {{
                    displayName = "omnis";
                }};;
                sendInvite = false;
            }};            

            PostUsersResponse res = sdk.usersInIQualify.postUsers(req);

            if (res.userResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersUserEmailInviteEmail

Re-sends an invitation e-mail to the specified user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersUserEmailInviteEmailRequest;
import org.openapis.openapi.models.operations.PostUsersUserEmailInviteEmailResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostUsersUserEmailInviteEmailRequest req = new PostUsersUserEmailInviteEmailRequest("Yessenia45@hotmail.com");            

            PostUsersUserEmailInviteEmailResponse res = sdk.usersInIQualify.postUsersUserEmailInviteEmail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersUserEmailOfferings

Adds a user to an array of offerings by offeringId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersUserEmailOfferingsRequest;
import org.openapis.openapi.models.operations.PostUsersUserEmailOfferingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostUsersUserEmailOfferingsRequest req = new PostUsersUserEmailOfferingsRequest(                new String[]{{
                                add("eius"),
                                add("aspernatur"),
                                add("perferendis"),
                                add("amet"),
                            }}, "Shannon.Hammes64@hotmail.com");            

            PostUsersUserEmailOfferingsResponse res = sdk.usersInIQualify.postUsersUserEmailOfferings(req);

            if (res.offeringMetadataResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersUserEmailPermissionsPermissionName

Adds additional permissions to the specified user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersUserEmailPermissionsPermissionNameRequest;
import org.openapis.openapi.models.operations.PostUsersUserEmailPermissionsPermissionNameResponse;
import org.openapis.openapi.models.shared.PermissionNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostUsersUserEmailPermissionsPermissionNameRequest req = new PostUsersUserEmailPermissionsPermissionNameRequest(PermissionNameEnum.BUILDER, "Josianne87@hotmail.com");            

            PostUsersUserEmailPermissionsPermissionNameResponse res = sdk.usersInIQualify.postUsersUserEmailPermissionsPermissionName(req);

            if (res.userResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersUserEmailSuspend

Suspends the specified user's account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersUserEmailSuspendRequest;
import org.openapis.openapi.models.operations.PutUsersUserEmailSuspendResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuspendedRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutUsersUserEmailSuspendRequest req = new PutUsersUserEmailSuspendRequest(                new SuspendedRequest() {{
                                suspended = false;
                            }};, "Herminia.Schmeler67@gmail.com");            

            PutUsersUserEmailSuspendResponse res = sdk.usersInIQualify.putUsersUserEmailSuspend(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
