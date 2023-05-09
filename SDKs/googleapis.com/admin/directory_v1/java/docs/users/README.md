# users

### Available Operations

* [directoryUsersAliasesDelete](#directoryusersaliasesdelete) - Removes an alias.
* [directoryUsersAliasesInsert](#directoryusersaliasesinsert) - Adds an alias.
* [directoryUsersAliasesList](#directoryusersaliaseslist) - Lists all aliases for a user.
* [directoryUsersAliasesWatch](#directoryusersaliaseswatch) - Watches for changes in users list.
* [directoryUsersDelete](#directoryusersdelete) - Deletes a user.
* [directoryUsersGet](#directoryusersget) - Retrieves a user.
* [directoryUsersInsert](#directoryusersinsert) - Creates a user.
* [directoryUsersList](#directoryuserslist) - Retrieves a paginated list of either deleted users or all users in a domain.
* [directoryUsersMakeAdmin](#directoryusersmakeadmin) - Makes a user a super administrator.
* [directoryUsersPatch](#directoryuserspatch) - Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
* [directoryUsersPhotosDelete](#directoryusersphotosdelete) - Removes the user's photo.
* [directoryUsersPhotosGet](#directoryusersphotosget) - Retrieves the user's photo.
* [directoryUsersPhotosPatch](#directoryusersphotospatch) - Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryUsersPhotosUpdate](#directoryusersphotosupdate) - Adds a photo for the user.
* [directoryUsersSignOut](#directoryuserssignout) - Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
* [directoryUsersUndelete](#directoryusersundelete) - Undeletes a deleted user.
* [directoryUsersUpdate](#directoryusersupdate) - Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.
* [directoryUsersWatch](#directoryuserswatch) - Watches for changes in users list.

## directoryUsersAliasesDelete

Removes an alias.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesDeleteSecurity;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersAliasesDeleteRequest req = new DirectoryUsersAliasesDeleteRequest("quidem", "illo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "possimus";
                key = "cum";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "earum";
                uploadProtocol = "quod";
            }};            

            DirectoryUsersAliasesDeleteResponse res = sdk.users.directoryUsersAliasesDelete(req, new DirectoryUsersAliasesDeleteSecurity() {{
                option1 = new DirectoryUsersAliasesDeleteSecurityOption1("nihil", "quaerat") {{
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

## directoryUsersAliasesInsert

Adds an alias.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesInsertRequest;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesInsertResponse;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesInsertSecurity;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesInsertSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesInsertSecurityOption2;
import org.openapis.openapi.models.shared.Alias;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersAliasesInsertRequest req = new DirectoryUsersAliasesInsertRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                alias = new Alias() {{
                    alias = "laudantium";
                    etag = "rerum";
                    id = "a2531774-7dc9-415a-92ca-f5dd6723dc0f";
                    kind = "exercitationem";
                    primaryEmail = "culpa";
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "neque";
                key = "officia";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "ducimus";
                uploadProtocol = "doloremque";
            }};            

            DirectoryUsersAliasesInsertResponse res = sdk.users.directoryUsersAliasesInsert(req, new DirectoryUsersAliasesInsertSecurity() {{
                option1 = new DirectoryUsersAliasesInsertSecurityOption1("perferendis", "laudantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.alias != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryUsersAliasesList

Lists all aliases for a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesListEventEnum;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesListRequest;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesListResponse;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesListSecurity;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesListSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesListSecurityOption3;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersAliasesListRequest req = new DirectoryUsersAliasesListRequest("iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.MEDIA;
                callback = "iure";
                event = DirectoryUsersAliasesListEventEnum.ADD;
                fields = "quaerat";
                key = "amet";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "est";
                uploadProtocol = "iure";
            }};            

            DirectoryUsersAliasesListResponse res = sdk.users.directoryUsersAliasesList(req, new DirectoryUsersAliasesListSecurity() {{
                option1 = new DirectoryUsersAliasesListSecurityOption1("quisquam", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.aliases != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryUsersAliasesWatch

Watches for changes in users list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesWatchEventEnum;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesWatchRequest;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesWatchResponse;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesWatchSecurity;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesWatchSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesWatchSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesWatchSecurityOption3;
import org.openapis.openapi.models.operations.DirectoryUsersAliasesWatchSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersAliasesWatchRequest req = new DirectoryUsersAliasesWatchRequest("laudantium") {{
                dollarXgafv = XgafvEnum.TWO;
                channel = new Channel() {{
                    address = "3332 Kasey Burgs";
                    expiration = "fugiat";
                    id = "40bcacc6-cbd6-4b5f-bec9-09304f926bad";
                    kind = "fugit";
                    params = new java.util.HashMap<String, String>() {{
                        put("nostrum", "sequi");
                        put("voluptatum", "quasi");
                    }};
                    payload = false;
                    resourceId = "error";
                    resourceUri = "nobis";
                    token = "tempora";
                    type = "voluptate";
                }};;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "aperiam";
                event = DirectoryUsersAliasesWatchEventEnum.DELETE;
                fields = "possimus";
                key = "fugit";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "corporis";
                uploadProtocol = "ea";
            }};            

            DirectoryUsersAliasesWatchResponse res = sdk.users.directoryUsersAliasesWatch(req, new DirectoryUsersAliasesWatchSecurity() {{
                option1 = new DirectoryUsersAliasesWatchSecurityOption1("eos", "aliquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryUsersDelete

Deletes a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryUsersDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryUsersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersDeleteRequest req = new DirectoryUsersDeleteRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "nesciunt";
                key = "cupiditate";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "beatae";
                uploadProtocol = "ipsa";
            }};            

            DirectoryUsersDeleteResponse res = sdk.users.directoryUsersDelete(req, new DirectoryUsersDeleteSecurity("mollitia", "nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## directoryUsersGet

Retrieves a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersGetProjectionEnum;
import org.openapis.openapi.models.operations.DirectoryUsersGetRequest;
import org.openapis.openapi.models.operations.DirectoryUsersGetResponse;
import org.openapis.openapi.models.operations.DirectoryUsersGetSecurity;
import org.openapis.openapi.models.operations.DirectoryUsersGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryUsersGetSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryUsersGetViewTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersGetRequest req = new DirectoryUsersGetRequest("assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.PROTO;
                callback = "commodi";
                customFieldMask = "fugit";
                fields = "suscipit";
                key = "voluptate";
                oauthToken = "nisi";
                prettyPrint = false;
                projection = DirectoryUsersGetProjectionEnum.CUSTOM;
                quotaUser = "provident";
                uploadType = "laboriosam";
                uploadProtocol = "accusamus";
                viewType = DirectoryUsersGetViewTypeEnum.ADMIN_VIEW;
            }};            

            DirectoryUsersGetResponse res = sdk.users.directoryUsersGet(req, new DirectoryUsersGetSecurity() {{
                option1 = new DirectoryUsersGetSecurityOption1("itaque", "quisquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryUsersInsert

Creates a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersInsertRequest;
import org.openapis.openapi.models.operations.DirectoryUsersInsertResponse;
import org.openapis.openapi.models.operations.DirectoryUsersInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserInput;
import org.openapis.openapi.models.shared.UserName;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersInsertRequest req = new DirectoryUsersInsertRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                userInput = new UserInput() {{
                    addresses = "alias";
                    archived = false;
                    changePasswordAtNextLogin = false;
                    customSchemas = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("consequuntur", new java.util.HashMap<String, Object>() {{
                            put("quidem", "sequi");
                        }});
                    }};
                    emails = "amet";
                    externalIds = "exercitationem";
                    gender = "illum";
                    hashFunction = "praesentium";
                    id = "9acb3ecf-da8d-40c5-89ef-03004978a61f";
                    ims = "laborum";
                    includeInGlobalAddressList = false;
                    ipWhitelisted = false;
                    keywords = "veritatis";
                    languages = "quod";
                    locations = "a";
                    name = new UserName() {{
                        displayName = "qui";
                        familyName = "accusantium";
                        fullName = "commodi";
                        givenName = "atque";
                    }};;
                    notes = "totam";
                    orgUnitPath = "tenetur";
                    organizations = "voluptate";
                    password = "quam";
                    phones = "quod";
                    posixAccounts = "vitae";
                    primaryEmail = "sapiente";
                    recoveryEmail = "reiciendis";
                    recoveryPhone = "quod";
                    relations = "voluptate";
                    sshPublicKeys = "inventore";
                    suspended = false;
                    websites = "facere";
                }};;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "ex";
                key = "consectetur";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "animi";
                uploadProtocol = "sequi";
            }};            

            DirectoryUsersInsertResponse res = sdk.users.directoryUsersInsert(req, new DirectoryUsersInsertSecurity("eligendi", "voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryUsersList

Retrieves a paginated list of either deleted users or all users in a domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersListEventEnum;
import org.openapis.openapi.models.operations.DirectoryUsersListOrderByEnum;
import org.openapis.openapi.models.operations.DirectoryUsersListProjectionEnum;
import org.openapis.openapi.models.operations.DirectoryUsersListRequest;
import org.openapis.openapi.models.operations.DirectoryUsersListResponse;
import org.openapis.openapi.models.operations.DirectoryUsersListSecurity;
import org.openapis.openapi.models.operations.DirectoryUsersListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryUsersListSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryUsersListSecurityOption3;
import org.openapis.openapi.models.operations.DirectoryUsersListSortOrderEnum;
import org.openapis.openapi.models.operations.DirectoryUsersListViewTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersListRequest req = new DirectoryUsersListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "nihil";
                customFieldMask = "tenetur";
                customer = "sapiente";
                domain = "velit";
                event = DirectoryUsersListEventEnum.DELETE;
                fields = "non";
                key = "optio";
                maxResults = 850196L;
                oauthToken = "at";
                orderBy = DirectoryUsersListOrderByEnum.GIVEN_NAME;
                pageToken = "molestias";
                prettyPrint = false;
                projection = DirectoryUsersListProjectionEnum.CUSTOM;
                query = "esse";
                quotaUser = "laborum";
                showDeleted = "perspiciatis";
                sortOrder = DirectoryUsersListSortOrderEnum.DESCENDING;
                uploadType = "eum";
                uploadProtocol = "quasi";
                viewType = DirectoryUsersListViewTypeEnum.DOMAIN_PUBLIC;
            }};            

            DirectoryUsersListResponse res = sdk.users.directoryUsersList(req, new DirectoryUsersListSecurity() {{
                option1 = new DirectoryUsersListSecurityOption1("odio", "commodi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryUsersMakeAdmin

Makes a user a super administrator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersMakeAdminRequest;
import org.openapis.openapi.models.operations.DirectoryUsersMakeAdminResponse;
import org.openapis.openapi.models.operations.DirectoryUsersMakeAdminSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserMakeAdmin;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersMakeAdminRequest req = new DirectoryUsersMakeAdminRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                userMakeAdmin = new UserMakeAdmin() {{
                    status = false;
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "et";
                key = "nulla";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "illum";
                uploadProtocol = "a";
            }};            

            DirectoryUsersMakeAdminResponse res = sdk.users.directoryUsersMakeAdmin(req, new DirectoryUsersMakeAdminSecurity("impedit", "unde") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## directoryUsersPatch

Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersPatchRequest;
import org.openapis.openapi.models.operations.DirectoryUsersPatchResponse;
import org.openapis.openapi.models.operations.DirectoryUsersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserInput;
import org.openapis.openapi.models.shared.UserName;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersPatchRequest req = new DirectoryUsersPatchRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                userInput = new UserInput() {{
                    addresses = "voluptas";
                    archived = false;
                    changePasswordAtNextLogin = false;
                    customSchemas = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("recusandae", new java.util.HashMap<String, Object>() {{
                            put("facere", "dignissimos");
                            put("iste", "provident");
                            put("dolor", "sint");
                            put("aperiam", "eaque");
                        }});
                        put("eum", new java.util.HashMap<String, Object>() {{
                            put("laborum", "autem");
                            put("assumenda", "explicabo");
                        }});
                        put("fugiat", new java.util.HashMap<String, Object>() {{
                            put("voluptatem", "alias");
                        }});
                        put("velit", new java.util.HashMap<String, Object>() {{
                            put("quis", "velit");
                            put("ratione", "quas");
                        }});
                    }};
                    emails = "maxime";
                    externalIds = "recusandae";
                    gender = "cumque";
                    hashFunction = "doloremque";
                    id = "86fa21e9-152c-4b31-9916-7b8e3c8db034";
                    ims = "consequatur";
                    includeInGlobalAddressList = false;
                    ipWhitelisted = false;
                    keywords = "laudantium";
                    languages = "repellendus";
                    locations = "commodi";
                    name = new UserName() {{
                        displayName = "quibusdam";
                        familyName = "consectetur";
                        fullName = "voluptas";
                        givenName = "quaerat";
                    }};;
                    notes = "earum";
                    orgUnitPath = "tenetur";
                    organizations = "assumenda";
                    password = "dolore";
                    phones = "enim";
                    posixAccounts = "ullam";
                    primaryEmail = "perspiciatis";
                    recoveryEmail = "alias";
                    recoveryPhone = "ex";
                    relations = "quibusdam";
                    sshPublicKeys = "dicta";
                    suspended = false;
                    websites = "quia";
                }};;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "quibusdam";
                fields = "numquam";
                key = "rem";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "neque";
                uploadProtocol = "corporis";
            }};            

            DirectoryUsersPatchResponse res = sdk.users.directoryUsersPatch(req, new DirectoryUsersPatchSecurity("quod", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryUsersPhotosDelete

Removes the user's photo.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersPhotosDeleteRequest req = new DirectoryUsersPhotosDeleteRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "sapiente";
                key = "ipsum";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "necessitatibus";
                uploadProtocol = "sequi";
            }};            

            DirectoryUsersPhotosDeleteResponse res = sdk.users.directoryUsersPhotosDelete(req, new DirectoryUsersPhotosDeleteSecurity("recusandae", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## directoryUsersPhotosGet

Retrieves the user's photo.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosGetRequest;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosGetResponse;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosGetSecurity;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersPhotosGetRequest req = new DirectoryUsersPhotosGetRequest("adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aperiam";
                alt = AltEnum.JSON;
                callback = "illum";
                fields = "iusto";
                key = "magni";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "ad";
                uploadProtocol = "voluptate";
            }};            

            DirectoryUsersPhotosGetResponse res = sdk.users.directoryUsersPhotosGet(req, new DirectoryUsersPhotosGetSecurity() {{
                option1 = new DirectoryUsersPhotosGetSecurityOption1("vel", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.userPhoto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryUsersPhotosPatch

Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosPatchRequest;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosPatchResponse;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserPhoto;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersPhotosPatchRequest req = new DirectoryUsersPhotosPatchRequest("sit") {{
                dollarXgafv = XgafvEnum.ONE;
                userPhoto = new UserPhoto() {{
                    etag = "laboriosam";
                    height = 311247;
                    id = "1870d9d2-1f9a-4d03-8c4e-cc11a0836429";
                    kind = "voluptatem";
                    mimeType = "suscipit";
                    photoData = "laudantium";
                    primaryEmail = "facilis";
                    width = 514609;
                }};;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "quia";
                fields = "officia";
                key = "quaerat";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "iusto";
                uploadProtocol = "sapiente";
            }};            

            DirectoryUsersPhotosPatchResponse res = sdk.users.directoryUsersPhotosPatch(req, new DirectoryUsersPhotosPatchSecurity("esse", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userPhoto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryUsersPhotosUpdate

Adds a photo for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosUpdateRequest;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosUpdateResponse;
import org.openapis.openapi.models.operations.DirectoryUsersPhotosUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserPhoto;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersPhotosUpdateRequest req = new DirectoryUsersPhotosUpdateRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                userPhoto = new UserPhoto() {{
                    etag = "praesentium";
                    height = 273349;
                    id = "5e320a31-9f4b-4adf-947c-9a867bc42426";
                    kind = "eum";
                    mimeType = "vel";
                    photoData = "ad";
                    primaryEmail = "quos";
                    width = 74124;
                }};;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "impedit";
                key = "culpa";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "maiores";
                uploadProtocol = "nemo";
            }};            

            DirectoryUsersPhotosUpdateResponse res = sdk.users.directoryUsersPhotosUpdate(req, new DirectoryUsersPhotosUpdateSecurity("illo", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userPhoto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryUsersSignOut

Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersSignOutRequest;
import org.openapis.openapi.models.operations.DirectoryUsersSignOutResponse;
import org.openapis.openapi.models.operations.DirectoryUsersSignOutSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersSignOutRequest req = new DirectoryUsersSignOutRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "occaecati";
                key = "ipsum";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "quasi";
                uploadProtocol = "fugit";
            }};            

            DirectoryUsersSignOutResponse res = sdk.users.directoryUsersSignOut(req, new DirectoryUsersSignOutSecurity("quo", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## directoryUsersUndelete

Undeletes a deleted user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersUndeleteRequest;
import org.openapis.openapi.models.operations.DirectoryUsersUndeleteResponse;
import org.openapis.openapi.models.operations.DirectoryUsersUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserUndelete;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersUndeleteRequest req = new DirectoryUsersUndeleteRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                userUndelete = new UserUndelete() {{
                    orgUnitPath = "quibusdam";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "quam";
                key = "similique";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "facere";
                uploadProtocol = "nobis";
            }};            

            DirectoryUsersUndeleteResponse res = sdk.users.directoryUsersUndelete(req, new DirectoryUsersUndeleteSecurity("at", "molestias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## directoryUsersUpdate

Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersUpdateRequest;
import org.openapis.openapi.models.operations.DirectoryUsersUpdateResponse;
import org.openapis.openapi.models.operations.DirectoryUsersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserInput;
import org.openapis.openapi.models.shared.UserName;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersUpdateRequest req = new DirectoryUsersUpdateRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                userInput = new UserInput() {{
                    addresses = "tenetur";
                    archived = false;
                    changePasswordAtNextLogin = false;
                    customSchemas = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("numquam", new java.util.HashMap<String, Object>() {{
                            put("similique", "dolore");
                            put("esse", "reiciendis");
                            put("iste", "amet");
                        }});
                        put("occaecati", new java.util.HashMap<String, Object>() {{
                            put("impedit", "minima");
                        }});
                    }};
                    emails = "quos";
                    externalIds = "blanditiis";
                    gender = "quas";
                    hashFunction = "voluptatem";
                    id = "983dabf9-ef3f-4fdd-9f7f-079af4d35724";
                    ims = "porro";
                    includeInGlobalAddressList = false;
                    ipWhitelisted = false;
                    keywords = "fugiat";
                    languages = "soluta";
                    locations = "ipsa";
                    name = new UserName() {{
                        displayName = "reiciendis";
                        familyName = "labore";
                        fullName = "vero";
                        givenName = "eos";
                    }};;
                    notes = "quas";
                    orgUnitPath = "quasi";
                    organizations = "architecto";
                    password = "praesentium";
                    phones = "iusto";
                    posixAccounts = "fugiat";
                    primaryEmail = "enim";
                    recoveryEmail = "iure";
                    recoveryPhone = "laudantium";
                    relations = "modi";
                    sshPublicKeys = "magnam";
                    suspended = false;
                    websites = "accusamus";
                }};;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "praesentium";
                key = "enim";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "quae";
                uploadProtocol = "eum";
            }};            

            DirectoryUsersUpdateResponse res = sdk.users.directoryUsersUpdate(req, new DirectoryUsersUpdateSecurity("nostrum", "eveniet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryUsersWatch

Watches for changes in users list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryUsersWatchEventEnum;
import org.openapis.openapi.models.operations.DirectoryUsersWatchOrderByEnum;
import org.openapis.openapi.models.operations.DirectoryUsersWatchProjectionEnum;
import org.openapis.openapi.models.operations.DirectoryUsersWatchRequest;
import org.openapis.openapi.models.operations.DirectoryUsersWatchResponse;
import org.openapis.openapi.models.operations.DirectoryUsersWatchSecurity;
import org.openapis.openapi.models.operations.DirectoryUsersWatchSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryUsersWatchSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryUsersWatchSecurityOption3;
import org.openapis.openapi.models.operations.DirectoryUsersWatchSortOrderEnum;
import org.openapis.openapi.models.operations.DirectoryUsersWatchViewTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryUsersWatchRequest req = new DirectoryUsersWatchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                channel = new Channel() {{
                    address = "56898 Adelia Estate";
                    expiration = "quia";
                    id = "b6c87992-3b7e-4135-84f7-ae12c6891f82";
                    kind = "eligendi";
                    params = new java.util.HashMap<String, String>() {{
                        put("dicta", "inventore");
                        put("ullam", "iusto");
                        put("inventore", "voluptate");
                        put("sed", "dolorem");
                    }};
                    payload = false;
                    resourceId = "eaque";
                    resourceUri = "exercitationem";
                    token = "amet";
                    type = "voluptate";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "minus";
                customFieldMask = "a";
                customer = "fuga";
                domain = "totam";
                event = DirectoryUsersWatchEventEnum.MAKE_ADMIN;
                fields = "at";
                key = "doloribus";
                maxResults = 608172L;
                oauthToken = "quam";
                orderBy = DirectoryUsersWatchOrderByEnum.FAMILY_NAME;
                pageToken = "voluptates";
                prettyPrint = false;
                projection = DirectoryUsersWatchProjectionEnum.BASIC;
                query = "quis";
                quotaUser = "commodi";
                showDeleted = "vel";
                sortOrder = DirectoryUsersWatchSortOrderEnum.DESCENDING;
                uploadType = "aliquid";
                uploadProtocol = "aperiam";
                viewType = DirectoryUsersWatchViewTypeEnum.DOMAIN_PUBLIC;
            }};            

            DirectoryUsersWatchResponse res = sdk.users.directoryUsersWatch(req, new DirectoryUsersWatchSecurity() {{
                option1 = new DirectoryUsersWatchSecurityOption1("fugit", "itaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
