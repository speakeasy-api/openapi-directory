# members

### Available Operations

* [directoryMembersDelete](#directorymembersdelete) - Removes a member from a group.
* [directoryMembersGet](#directorymembersget) - Retrieves a group member's properties.
* [directoryMembersHasMember](#directorymembershasmember) - Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
* [directoryMembersInsert](#directorymembersinsert) - Adds a user to the specified group.
* [directoryMembersList](#directorymemberslist) - Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).
* [directoryMembersPatch](#directorymemberspatch) - Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryMembersUpdate](#directorymembersupdate) - Updates the membership of a user in the specified group.

## directoryMembersDelete

Removes a member from a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryMembersDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryMembersDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryMembersDeleteSecurity;
import org.openapis.openapi.models.operations.DirectoryMembersDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryMembersDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryMembersDeleteRequest req = new DirectoryMembersDeleteRequest("quasi", "laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "nemo";
                key = "aliquam";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }};            

            DirectoryMembersDeleteResponse res = sdk.members.directoryMembersDelete(req, new DirectoryMembersDeleteSecurity() {{
                option1 = new DirectoryMembersDeleteSecurityOption1("enim", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## directoryMembersGet

Retrieves a group member's properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryMembersGetRequest;
import org.openapis.openapi.models.operations.DirectoryMembersGetResponse;
import org.openapis.openapi.models.operations.DirectoryMembersGetSecurity;
import org.openapis.openapi.models.operations.DirectoryMembersGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryMembersGetSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryMembersGetSecurityOption3;
import org.openapis.openapi.models.operations.DirectoryMembersGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryMembersGetRequest req = new DirectoryMembersGetRequest("animi", "quas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "saepe";
                key = "architecto";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "assumenda";
                uploadProtocol = "tempore";
            }};            

            DirectoryMembersGetResponse res = sdk.members.directoryMembersGet(req, new DirectoryMembersGetSecurity() {{
                option1 = new DirectoryMembersGetSecurityOption1("libero", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.member != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryMembersHasMember

Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryMembersHasMemberRequest;
import org.openapis.openapi.models.operations.DirectoryMembersHasMemberResponse;
import org.openapis.openapi.models.operations.DirectoryMembersHasMemberSecurity;
import org.openapis.openapi.models.operations.DirectoryMembersHasMemberSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryMembersHasMemberSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryMembersHasMemberSecurityOption3;
import org.openapis.openapi.models.operations.DirectoryMembersHasMemberSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryMembersHasMemberRequest req = new DirectoryMembersHasMemberRequest("doloremque", "delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "saepe";
                key = "deserunt";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veniam";
                uploadProtocol = "libero";
            }};            

            DirectoryMembersHasMemberResponse res = sdk.members.directoryMembersHasMember(req, new DirectoryMembersHasMemberSecurity() {{
                option1 = new DirectoryMembersHasMemberSecurityOption1("architecto", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.membersHasMember != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryMembersInsert

Adds a user to the specified group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryMembersInsertRequest;
import org.openapis.openapi.models.operations.DirectoryMembersInsertResponse;
import org.openapis.openapi.models.operations.DirectoryMembersInsertSecurity;
import org.openapis.openapi.models.operations.DirectoryMembersInsertSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryMembersInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Member;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryMembersInsertRequest req = new DirectoryMembersInsertRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                member = new Member() {{
                    deliverySettings = "possimus";
                    email = "Eliane99@gmail.com";
                    etag = "veniam";
                    id = "2d82d351-3bb6-4f48-b656-bcdb35ff2e4b";
                    kind = "eos";
                    role = "reprehenderit";
                    status = "nostrum";
                    type = "neque";
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "eligendi";
                key = "fugiat";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "ducimus";
                uploadProtocol = "dolor";
            }};            

            DirectoryMembersInsertResponse res = sdk.members.directoryMembersInsert(req, new DirectoryMembersInsertSecurity() {{
                option1 = new DirectoryMembersInsertSecurityOption1("dicta", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.member != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryMembersList

Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryMembersListRequest;
import org.openapis.openapi.models.operations.DirectoryMembersListResponse;
import org.openapis.openapi.models.operations.DirectoryMembersListSecurity;
import org.openapis.openapi.models.operations.DirectoryMembersListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryMembersListSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryMembersListSecurityOption3;
import org.openapis.openapi.models.operations.DirectoryMembersListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryMembersListRequest req = new DirectoryMembersListRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "ad";
                includeDerivedMembership = false;
                key = "aspernatur";
                maxResults = 316501L;
                oauthToken = "delectus";
                pageToken = "iusto";
                prettyPrint = false;
                quotaUser = "dignissimos";
                roles = "libero";
                uploadType = "illo";
                uploadProtocol = "ab";
            }};            

            DirectoryMembersListResponse res = sdk.members.directoryMembersList(req, new DirectoryMembersListSecurity() {{
                option1 = new DirectoryMembersListSecurityOption1("incidunt", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.members != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryMembersPatch

Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryMembersPatchRequest;
import org.openapis.openapi.models.operations.DirectoryMembersPatchResponse;
import org.openapis.openapi.models.operations.DirectoryMembersPatchSecurity;
import org.openapis.openapi.models.operations.DirectoryMembersPatchSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryMembersPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Member;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryMembersPatchRequest req = new DirectoryMembersPatchRequest("saepe", "tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                member = new Member() {{
                    deliverySettings = "eos";
                    email = "Trey.Kilback@hotmail.com";
                    etag = "repellat";
                    id = "c37814d4-c98e-40c2-bb89-eb75dad636c6";
                    kind = "aut";
                    role = "voluptatem";
                    status = "ad";
                    type = "quae";
                }};;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "quidem";
                key = "cum";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "dicta";
                uploadProtocol = "laudantium";
            }};            

            DirectoryMembersPatchResponse res = sdk.members.directoryMembersPatch(req, new DirectoryMembersPatchSecurity() {{
                option1 = new DirectoryMembersPatchSecurityOption1("doloremque", "earum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.member != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryMembersUpdate

Updates the membership of a user in the specified group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryMembersUpdateRequest;
import org.openapis.openapi.models.operations.DirectoryMembersUpdateResponse;
import org.openapis.openapi.models.operations.DirectoryMembersUpdateSecurity;
import org.openapis.openapi.models.operations.DirectoryMembersUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryMembersUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Member;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryMembersUpdateRequest req = new DirectoryMembersUpdateRequest("iusto", "amet") {{
                dollarXgafv = XgafvEnum.TWO;
                member = new Member() {{
                    deliverySettings = "dolorum";
                    email = "Larue36@hotmail.com";
                    etag = "molestiae";
                    id = "eb809e28-1033-41f3-981d-4c700b607f3c";
                    kind = "provident";
                    role = "consectetur";
                    status = "eligendi";
                    type = "dignissimos";
                }};;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "natus";
                fields = "temporibus";
                key = "officia";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "aspernatur";
                uploadProtocol = "quo";
            }};            

            DirectoryMembersUpdateResponse res = sdk.members.directoryMembersUpdate(req, new DirectoryMembersUpdateSecurity() {{
                option1 = new DirectoryMembersUpdateSecurityOption1("itaque", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.member != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
