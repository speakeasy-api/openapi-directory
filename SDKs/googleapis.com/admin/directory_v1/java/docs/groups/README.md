# groups

### Available Operations

* [directoryGroupsAliasesDelete](#directorygroupsaliasesdelete) - Removes an alias.
* [directoryGroupsAliasesInsert](#directorygroupsaliasesinsert) - Adds an alias for the group.
* [directoryGroupsAliasesList](#directorygroupsaliaseslist) - Lists all aliases for a group.
* [directoryGroupsDelete](#directorygroupsdelete) - Deletes a group.
* [directoryGroupsGet](#directorygroupsget) - Retrieves a group's properties.
* [directoryGroupsInsert](#directorygroupsinsert) - Creates a group.
* [directoryGroupsList](#directorygroupslist) - Retrieves all groups of a domain or of a user given a userKey (paginated).
* [directoryGroupsPatch](#directorygroupspatch) - Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryGroupsUpdate](#directorygroupsupdate) - Updates a group's properties.

## directoryGroupsAliasesDelete

Removes an alias.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryGroupsAliasesDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryGroupsAliasesDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryGroupsAliasesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryGroupsAliasesDeleteRequest req = new DirectoryGroupsAliasesDeleteRequest("modi", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatem";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "alias";
                key = "quasi";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "enim";
                uploadProtocol = "sint";
            }};            

            DirectoryGroupsAliasesDeleteResponse res = sdk.groups.directoryGroupsAliasesDelete(req, new DirectoryGroupsAliasesDeleteSecurity("nulla", "deserunt") {{
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

## directoryGroupsAliasesInsert

Adds an alias for the group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryGroupsAliasesInsertRequest;
import org.openapis.openapi.models.operations.DirectoryGroupsAliasesInsertResponse;
import org.openapis.openapi.models.operations.DirectoryGroupsAliasesInsertSecurity;
import org.openapis.openapi.models.shared.Alias;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryGroupsAliasesInsertRequest req = new DirectoryGroupsAliasesInsertRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                alias = new Alias() {{
                    alias = "reprehenderit";
                    etag = "est";
                    id = "59ecfef6-6ef1-4caa-b383-c2beb477373c";
                    kind = "deleniti";
                    primaryEmail = "quibusdam";
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "vel";
                key = "magnam";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "facere";
                uploadProtocol = "libero";
            }};            

            DirectoryGroupsAliasesInsertResponse res = sdk.groups.directoryGroupsAliasesInsert(req, new DirectoryGroupsAliasesInsertSecurity("architecto", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## directoryGroupsAliasesList

Lists all aliases for a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryGroupsAliasesListRequest;
import org.openapis.openapi.models.operations.DirectoryGroupsAliasesListResponse;
import org.openapis.openapi.models.operations.DirectoryGroupsAliasesListSecurity;
import org.openapis.openapi.models.operations.DirectoryGroupsAliasesListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryGroupsAliasesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryGroupsAliasesListRequest req = new DirectoryGroupsAliasesListRequest("quia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "illo";
                fields = "accusantium";
                key = "vel";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "vero";
                uploadProtocol = "excepturi";
            }};            

            DirectoryGroupsAliasesListResponse res = sdk.groups.directoryGroupsAliasesList(req, new DirectoryGroupsAliasesListSecurity() {{
                option1 = new DirectoryGroupsAliasesListSecurityOption1("eum", "velit") {{
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

## directoryGroupsDelete

Deletes a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryGroupsDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryGroupsDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryGroupsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryGroupsDeleteRequest req = new DirectoryGroupsDeleteRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "voluptatibus";
                key = "iste";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "nisi";
                uploadProtocol = "itaque";
            }};            

            DirectoryGroupsDeleteResponse res = sdk.groups.directoryGroupsDelete(req, new DirectoryGroupsDeleteSecurity("velit", "laborum") {{
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

## directoryGroupsGet

Retrieves a group's properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryGroupsGetRequest;
import org.openapis.openapi.models.operations.DirectoryGroupsGetResponse;
import org.openapis.openapi.models.operations.DirectoryGroupsGetSecurity;
import org.openapis.openapi.models.operations.DirectoryGroupsGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryGroupsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryGroupsGetRequest req = new DirectoryGroupsGetRequest("non") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "consequatur";
                key = "officia";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "quidem";
                uploadProtocol = "voluptas";
            }};            

            DirectoryGroupsGetResponse res = sdk.groups.directoryGroupsGet(req, new DirectoryGroupsGetSecurity() {{
                option1 = new DirectoryGroupsGetSecurityOption1("facilis", "placeat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryGroupsInsert

Creates a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryGroupsInsertRequest;
import org.openapis.openapi.models.operations.DirectoryGroupsInsertResponse;
import org.openapis.openapi.models.operations.DirectoryGroupsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryGroupsInsertRequest req = new DirectoryGroupsInsertRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                group = new Group() {{
                    adminCreated = false;
                    aliases = new String[]{{
                        add("deleniti"),
                        add("a"),
                        add("voluptate"),
                    }};
                    description = "ullam";
                    directMembersCount = "unde";
                    email = "Madeline.Russel@hotmail.com";
                    etag = "est";
                    id = "9741d311-3529-465b-b8a7-202611435e13";
                    kind = "unde";
                    name = "Kelvin Schmitt";
                    nonEditableAliases = new String[]{{
                        add("omnis"),
                        add("libero"),
                    }};
                }};;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "fugiat";
                key = "officia";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "sit";
                uploadProtocol = "iusto";
            }};            

            DirectoryGroupsInsertResponse res = sdk.groups.directoryGroupsInsert(req, new DirectoryGroupsInsertSecurity("ipsa", "voluptates") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryGroupsList

Retrieves all groups of a domain or of a user given a userKey (paginated).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryGroupsListOrderByEnum;
import org.openapis.openapi.models.operations.DirectoryGroupsListRequest;
import org.openapis.openapi.models.operations.DirectoryGroupsListResponse;
import org.openapis.openapi.models.operations.DirectoryGroupsListSecurity;
import org.openapis.openapi.models.operations.DirectoryGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryGroupsListSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryGroupsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryGroupsListRequest req = new DirectoryGroupsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aperiam";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                customer = "eligendi";
                domain = "distinctio";
                fields = "voluptatem";
                key = "autem";
                maxResults = 456688L;
                oauthToken = "dolores";
                orderBy = DirectoryGroupsListOrderByEnum.EMAIL;
                pageToken = "assumenda";
                prettyPrint = false;
                query = "beatae";
                quotaUser = "est";
                sortOrder = DirectoryGroupsListSortOrderEnum.DESCENDING;
                uploadType = "corrupti";
                uploadProtocol = "molestiae";
                userKey = "provident";
            }};            

            DirectoryGroupsListResponse res = sdk.groups.directoryGroupsList(req, new DirectoryGroupsListSecurity() {{
                option1 = new DirectoryGroupsListSecurityOption1("accusamus", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.groups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryGroupsPatch

Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryGroupsPatchRequest;
import org.openapis.openapi.models.operations.DirectoryGroupsPatchResponse;
import org.openapis.openapi.models.operations.DirectoryGroupsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryGroupsPatchRequest req = new DirectoryGroupsPatchRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                group = new Group() {{
                    adminCreated = false;
                    aliases = new String[]{{
                        add("autem"),
                        add("ipsam"),
                    }};
                    description = "rerum";
                    directMembersCount = "laudantium";
                    email = "Sid_Wiza0@yahoo.com";
                    etag = "quia";
                    id = "bae0be2d-7822-459e-bea4-b5197f92443d";
                    kind = "officia";
                    name = "Kara Tromp";
                    nonEditableAliases = new String[]{{
                        add("voluptatum"),
                        add("cupiditate"),
                        add("minima"),
                    }};
                }};;
                accessToken = "placeat";
                alt = AltEnum.JSON;
                callback = "neque";
                fields = "in";
                key = "minus";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "corporis";
                uploadProtocol = "magnam";
            }};            

            DirectoryGroupsPatchResponse res = sdk.groups.directoryGroupsPatch(req, new DirectoryGroupsPatchSecurity("voluptates", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryGroupsUpdate

Updates a group's properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryGroupsUpdateRequest;
import org.openapis.openapi.models.operations.DirectoryGroupsUpdateResponse;
import org.openapis.openapi.models.operations.DirectoryGroupsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryGroupsUpdateRequest req = new DirectoryGroupsUpdateRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                group = new Group() {{
                    adminCreated = false;
                    aliases = new String[]{{
                        add("ratione"),
                        add("labore"),
                        add("totam"),
                    }};
                    description = "occaecati";
                    directMembersCount = "voluptas";
                    email = "Deangelo.Schinner66@hotmail.com";
                    etag = "impedit";
                    id = "fbe2fd57-0757-4792-9177-deac646ecb57";
                    kind = "dolorem";
                    name = "Melissa Mayer";
                    nonEditableAliases = new String[]{{
                        add("cum"),
                        add("dicta"),
                        add("earum"),
                        add("veniam"),
                    }};
                }};;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "dicta";
                key = "consequuntur";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "ipsa";
                uploadProtocol = "ducimus";
            }};            

            DirectoryGroupsUpdateResponse res = sdk.groups.directoryGroupsUpdate(req, new DirectoryGroupsUpdateSecurity("maiores", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
