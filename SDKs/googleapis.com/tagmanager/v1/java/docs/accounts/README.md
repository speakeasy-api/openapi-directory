# accounts

### Available Operations

* [tagmanagerAccountsContainersCreate](#tagmanageraccountscontainerscreate) - Creates a Container.
* [tagmanagerAccountsContainersDelete](#tagmanageraccountscontainersdelete) - Deletes a Container.
* [tagmanagerAccountsContainersEnvironmentsCreate](#tagmanageraccountscontainersenvironmentscreate) - Creates a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsDelete](#tagmanageraccountscontainersenvironmentsdelete) - Deletes a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsGet](#tagmanageraccountscontainersenvironmentsget) - Gets a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsList](#tagmanageraccountscontainersenvironmentslist) - Lists all GTM Environments of a GTM Container.
* [tagmanagerAccountsContainersEnvironmentsUpdate](#tagmanageraccountscontainersenvironmentsupdate) - Updates a GTM Environment.
* [tagmanagerAccountsContainersFoldersCreate](#tagmanageraccountscontainersfolderscreate) - Creates a GTM Folder.
* [tagmanagerAccountsContainersFoldersDelete](#tagmanageraccountscontainersfoldersdelete) - Deletes a GTM Folder.
* [tagmanagerAccountsContainersFoldersEntitiesList](#tagmanageraccountscontainersfoldersentitieslist) - List all entities in a GTM Folder.
* [tagmanagerAccountsContainersFoldersGet](#tagmanageraccountscontainersfoldersget) - Gets a GTM Folder.
* [tagmanagerAccountsContainersFoldersList](#tagmanageraccountscontainersfolderslist) - Lists all GTM Folders of a Container.
* [tagmanagerAccountsContainersFoldersUpdate](#tagmanageraccountscontainersfoldersupdate) - Updates a GTM Folder.
* [tagmanagerAccountsContainersGet](#tagmanageraccountscontainersget) - Gets a Container.
* [tagmanagerAccountsContainersList](#tagmanageraccountscontainerslist) - Lists all Containers that belongs to a GTM Account.
* [tagmanagerAccountsContainersMoveFoldersUpdate](#tagmanageraccountscontainersmovefoldersupdate) - Moves entities to a GTM Folder.
* [tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate](#tagmanageraccountscontainersreauthorizeenvironmentsupdate) - Re-generates the authorization code for a GTM Environment.
* [tagmanagerAccountsContainersTagsCreate](#tagmanageraccountscontainerstagscreate) - Creates a GTM Tag.
* [tagmanagerAccountsContainersTagsDelete](#tagmanageraccountscontainerstagsdelete) - Deletes a GTM Tag.
* [tagmanagerAccountsContainersTagsGet](#tagmanageraccountscontainerstagsget) - Gets a GTM Tag.
* [tagmanagerAccountsContainersTagsList](#tagmanageraccountscontainerstagslist) - Lists all GTM Tags of a Container.
* [tagmanagerAccountsContainersTagsUpdate](#tagmanageraccountscontainerstagsupdate) - Updates a GTM Tag.
* [tagmanagerAccountsContainersTriggersCreate](#tagmanageraccountscontainerstriggerscreate) - Creates a GTM Trigger.
* [tagmanagerAccountsContainersTriggersDelete](#tagmanageraccountscontainerstriggersdelete) - Deletes a GTM Trigger.
* [tagmanagerAccountsContainersTriggersGet](#tagmanageraccountscontainerstriggersget) - Gets a GTM Trigger.
* [tagmanagerAccountsContainersTriggersList](#tagmanageraccountscontainerstriggerslist) - Lists all GTM Triggers of a Container.
* [tagmanagerAccountsContainersTriggersUpdate](#tagmanageraccountscontainerstriggersupdate) - Updates a GTM Trigger.
* [tagmanagerAccountsContainersUpdate](#tagmanageraccountscontainersupdate) - Updates a Container.
* [tagmanagerAccountsContainersVariablesCreate](#tagmanageraccountscontainersvariablescreate) - Creates a GTM Variable.
* [tagmanagerAccountsContainersVariablesDelete](#tagmanageraccountscontainersvariablesdelete) - Deletes a GTM Variable.
* [tagmanagerAccountsContainersVariablesGet](#tagmanageraccountscontainersvariablesget) - Gets a GTM Variable.
* [tagmanagerAccountsContainersVariablesList](#tagmanageraccountscontainersvariableslist) - Lists all GTM Variables of a Container.
* [tagmanagerAccountsContainersVariablesUpdate](#tagmanageraccountscontainersvariablesupdate) - Updates a GTM Variable.
* [tagmanagerAccountsContainersVersionsCreate](#tagmanageraccountscontainersversionscreate) - Creates a Container Version.
* [tagmanagerAccountsContainersVersionsDelete](#tagmanageraccountscontainersversionsdelete) - Deletes a Container Version.
* [tagmanagerAccountsContainersVersionsGet](#tagmanageraccountscontainersversionsget) - Gets a Container Version.
* [tagmanagerAccountsContainersVersionsList](#tagmanageraccountscontainersversionslist) - Lists all Container Versions of a GTM Container.
* [tagmanagerAccountsContainersVersionsPublish](#tagmanageraccountscontainersversionspublish) - Publishes a Container Version.
* [tagmanagerAccountsContainersVersionsRestore](#tagmanageraccountscontainersversionsrestore) - Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
* [tagmanagerAccountsContainersVersionsUndelete](#tagmanageraccountscontainersversionsundelete) - Undeletes a Container Version.
* [tagmanagerAccountsContainersVersionsUpdate](#tagmanageraccountscontainersversionsupdate) - Updates a Container Version.
* [tagmanagerAccountsGet](#tagmanageraccountsget) - Gets a GTM Account.
* [tagmanagerAccountsList](#tagmanageraccountslist) - Lists all GTM Accounts that a user has access to.
* [tagmanagerAccountsPermissionsCreate](#tagmanageraccountspermissionscreate) - Creates a user's Account & Container Permissions.
* [tagmanagerAccountsPermissionsDelete](#tagmanageraccountspermissionsdelete) - Removes a user from the account, revoking access to it and all of its containers.
* [tagmanagerAccountsPermissionsGet](#tagmanageraccountspermissionsget) - Gets a user's Account & Container Permissions.
* [tagmanagerAccountsPermissionsList](#tagmanageraccountspermissionslist) - List all users that have access to the account along with Account and Container Permissions granted to each of them.
* [tagmanagerAccountsPermissionsUpdate](#tagmanageraccountspermissionsupdate) - Updates a user's Account & Container Permissions.
* [tagmanagerAccountsUpdate](#tagmanageraccountsupdate) - Updates a GTM Account.

## tagmanagerAccountsContainersCreate

Creates a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum;
import org.openapis.openapi.models.shared.ContainerUsageContextEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersCreateRequest req = new TagmanagerAccountsContainersCreateRequest("odit") {{
                dollarXgafv = XgafvEnum.TWO;
                container = new Container() {{
                    accountId = "at";
                    containerId = "maiores";
                    domainName = new String[]{{
                        add("quod"),
                        add("quod"),
                    }};
                    enabledBuiltInVariable = new org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum[]{{
                        add(ContainerEnabledBuiltInVariableEnum.AMP_CLIENT_TIMESTAMP),
                        add(ContainerEnabledBuiltInVariableEnum.FIREBASE_EVENT_PARAMETER_NOTIFICATION_MESSAGE_NAME),
                    }};
                    fingerprint = "dolorum";
                    name = "Antoinette Nikolaus";
                    notes = "deleniti";
                    publicId = "hic";
                    timeZoneCountryId = "optio";
                    timeZoneId = "totam";
                    usageContext = new org.openapis.openapi.models.shared.ContainerUsageContextEnum[]{{
                        add(ContainerUsageContextEnum.IOS),
                    }};
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "impedit";
                key = "cum";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "excepturi";
                uploadProtocol = "aspernatur";
            }};            

            TagmanagerAccountsContainersCreateResponse res = sdk.accounts.tagmanagerAccountsContainersCreate(req, new TagmanagerAccountsContainersCreateSecurity("perferendis", "ad") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.container != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersDelete

Deletes a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersDeleteRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersDeleteResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersDeleteRequest req = new TagmanagerAccountsContainersDeleteRequest("natus", "sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                fields = "hic";
                key = "saepe";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "corporis";
                uploadProtocol = "iste";
            }};            

            TagmanagerAccountsContainersDeleteResponse res = sdk.accounts.tagmanagerAccountsContainersDelete(req, new TagmanagerAccountsContainersDeleteSecurity("iure", "saepe") {{
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

## tagmanagerAccountsContainersEnvironmentsCreate

Creates a GTM Environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Environment;
import org.openapis.openapi.models.shared.EnvironmentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersEnvironmentsCreateRequest req = new TagmanagerAccountsContainersEnvironmentsCreateRequest("quidem", "architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                environment = new Environment() {{
                    accountId = "reiciendis";
                    authorizationCode = "est";
                    authorizationTimestampMs = "mollitia";
                    containerId = "laborum";
                    containerVersionId = "dolores";
                    description = "dolorem";
                    enableDebug = false;
                    environmentId = "corporis";
                    fingerprint = "explicabo";
                    name = "Ronnie Mohr";
                    type = EnvironmentTypeEnum.LATEST;
                    url = "accusantium";
                }};;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "sapiente";
                key = "architecto";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "culpa";
                uploadProtocol = "consequuntur";
            }};            

            TagmanagerAccountsContainersEnvironmentsCreateResponse res = sdk.accounts.tagmanagerAccountsContainersEnvironmentsCreate(req, new TagmanagerAccountsContainersEnvironmentsCreateSecurity("repellat", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.environment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersEnvironmentsDelete

Deletes a GTM Environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsDeleteRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsDeleteResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersEnvironmentsDeleteRequest req = new TagmanagerAccountsContainersEnvironmentsDeleteRequest("occaecati", "numquam", "commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                key = "quis";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "animi";
                uploadProtocol = "enim";
            }};            

            TagmanagerAccountsContainersEnvironmentsDeleteResponse res = sdk.accounts.tagmanagerAccountsContainersEnvironmentsDelete(req, new TagmanagerAccountsContainersEnvironmentsDeleteSecurity("odit", "quo") {{
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

## tagmanagerAccountsContainersEnvironmentsGet

Gets a GTM Environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsGetRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsGetResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsGetSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsGetSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersEnvironmentsGetRequest req = new TagmanagerAccountsContainersEnvironmentsGetRequest("sequi", "tenetur", "ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "error";
                key = "temporibus";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "reiciendis";
                uploadProtocol = "voluptatibus";
            }};            

            TagmanagerAccountsContainersEnvironmentsGetResponse res = sdk.accounts.tagmanagerAccountsContainersEnvironmentsGet(req, new TagmanagerAccountsContainersEnvironmentsGetSecurity() {{
                option1 = new TagmanagerAccountsContainersEnvironmentsGetSecurityOption1("vero", "nihil") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.environment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersEnvironmentsList

Lists all GTM Environments of a GTM Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersEnvironmentsListRequest req = new TagmanagerAccountsContainersEnvironmentsListRequest("praesentium", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "perferendis";
                key = "doloremque";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "maiores";
                uploadProtocol = "dicta";
            }};            

            TagmanagerAccountsContainersEnvironmentsListResponse res = sdk.accounts.tagmanagerAccountsContainersEnvironmentsList(req, new TagmanagerAccountsContainersEnvironmentsListSecurity() {{
                option1 = new TagmanagerAccountsContainersEnvironmentsListSecurityOption1("corporis", "dolore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listEnvironmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersEnvironmentsUpdate

Updates a GTM Environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Environment;
import org.openapis.openapi.models.shared.EnvironmentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersEnvironmentsUpdateRequest req = new TagmanagerAccountsContainersEnvironmentsUpdateRequest("iusto", "dicta", "harum") {{
                dollarXgafv = XgafvEnum.ONE;
                environment = new Environment() {{
                    accountId = "accusamus";
                    authorizationCode = "commodi";
                    authorizationTimestampMs = "repudiandae";
                    containerId = "quae";
                    containerVersionId = "ipsum";
                    description = "quidem";
                    enableDebug = false;
                    environmentId = "molestias";
                    fingerprint = "excepturi";
                    name = "Joel Lang";
                    type = EnvironmentTypeEnum.USER;
                    url = "repudiandae";
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                fingerprint = "enim";
                key = "consequatur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "explicabo";
                uploadProtocol = "deserunt";
            }};            

            TagmanagerAccountsContainersEnvironmentsUpdateResponse res = sdk.accounts.tagmanagerAccountsContainersEnvironmentsUpdate(req, new TagmanagerAccountsContainersEnvironmentsUpdateSecurity("distinctio", "quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.environment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersFoldersCreate

Creates a GTM Folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Folder;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersFoldersCreateRequest req = new TagmanagerAccountsContainersFoldersCreateRequest("labore", "modi") {{
                dollarXgafv = XgafvEnum.ONE;
                folder = new Folder() {{
                    accountId = "aliquid";
                    containerId = "cupiditate";
                    fingerprint = "quos";
                    folderId = "perferendis";
                    name = "Mr. Nadine Hills";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "non";
                uploadProtocol = "eligendi";
            }};            

            TagmanagerAccountsContainersFoldersCreateResponse res = sdk.accounts.tagmanagerAccountsContainersFoldersCreate(req, new TagmanagerAccountsContainersFoldersCreateSecurity("sint", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersFoldersDelete

Deletes a GTM Folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersDeleteRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersDeleteResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersFoldersDeleteRequest req = new TagmanagerAccountsContainersFoldersDeleteRequest("provident", "necessitatibus", "sint") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "dolorum";
                key = "in";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "maiores";
                uploadProtocol = "rerum";
            }};            

            TagmanagerAccountsContainersFoldersDeleteResponse res = sdk.accounts.tagmanagerAccountsContainersFoldersDelete(req, new TagmanagerAccountsContainersFoldersDeleteSecurity("dicta", "magnam") {{
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

## tagmanagerAccountsContainersFoldersEntitiesList

List all entities in a GTM Folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersEntitiesListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersEntitiesListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersEntitiesListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersFoldersEntitiesListRequest req = new TagmanagerAccountsContainersFoldersEntitiesListRequest("cumque", "facere", "ea") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "occaecati";
                key = "enim";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "quidem";
                uploadProtocol = "provident";
            }};            

            TagmanagerAccountsContainersFoldersEntitiesListResponse res = sdk.accounts.tagmanagerAccountsContainersFoldersEntitiesList(req, new TagmanagerAccountsContainersFoldersEntitiesListSecurity() {{
                option1 = new TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1("nam", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.folderEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersFoldersGet

Gets a GTM Folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersGetRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersGetResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersGetSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersGetSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersFoldersGetRequest req = new TagmanagerAccountsContainersFoldersGetRequest("blanditiis", "deleniti", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                key = "omnis";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "nihil";
                uploadProtocol = "magnam";
            }};            

            TagmanagerAccountsContainersFoldersGetResponse res = sdk.accounts.tagmanagerAccountsContainersFoldersGet(req, new TagmanagerAccountsContainersFoldersGetSecurity() {{
                option1 = new TagmanagerAccountsContainersFoldersGetSecurityOption1("distinctio", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersFoldersList

Lists all GTM Folders of a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersFoldersListRequest req = new TagmanagerAccountsContainersFoldersListRequest("labore", "labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "vero";
                key = "aspernatur";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "et";
                uploadProtocol = "excepturi";
            }};            

            TagmanagerAccountsContainersFoldersListResponse res = sdk.accounts.tagmanagerAccountsContainersFoldersList(req, new TagmanagerAccountsContainersFoldersListSecurity() {{
                option1 = new TagmanagerAccountsContainersFoldersListSecurityOption1("ullam", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listFoldersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersFoldersUpdate

Updates a GTM Folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersFoldersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Folder;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersFoldersUpdateRequest req = new TagmanagerAccountsContainersFoldersUpdateRequest("quos", "sint", "accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                folder = new Folder() {{
                    accountId = "reiciendis";
                    containerId = "mollitia";
                    fingerprint = "ad";
                    folderId = "eum";
                    name = "Jana Connelly III";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                fingerprint = "deleniti";
                key = "facilis";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "architecto";
                uploadProtocol = "repudiandae";
            }};            

            TagmanagerAccountsContainersFoldersUpdateResponse res = sdk.accounts.tagmanagerAccountsContainersFoldersUpdate(req, new TagmanagerAccountsContainersFoldersUpdateSecurity("ullam", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersGet

Gets a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersGetRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersGetResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersGetSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersGetSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersGetRequest req = new TagmanagerAccountsContainersGetRequest("nihil", "repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "accusantium";
                key = "consequuntur";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "magni";
                uploadProtocol = "sunt";
            }};            

            TagmanagerAccountsContainersGetResponse res = sdk.accounts.tagmanagerAccountsContainersGet(req, new TagmanagerAccountsContainersGetSecurity() {{
                option1 = new TagmanagerAccountsContainersGetSecurityOption1("quo", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.container != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersList

Lists all Containers that belongs to a GTM Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersListRequest req = new TagmanagerAccountsContainersListRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "ea";
                key = "accusantium";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "quidem";
                uploadProtocol = "ipsam";
            }};            

            TagmanagerAccountsContainersListResponse res = sdk.accounts.tagmanagerAccountsContainersList(req, new TagmanagerAccountsContainersListSecurity() {{
                option1 = new TagmanagerAccountsContainersListSecurityOption1("voluptate", "autem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listContainersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersMoveFoldersUpdate

Moves entities to a GTM Folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersMoveFoldersUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersMoveFoldersUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersMoveFoldersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Folder;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersMoveFoldersUpdateRequest req = new TagmanagerAccountsContainersMoveFoldersUpdateRequest("nam", "eaque", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                folder = new Folder() {{
                    accountId = "voluptatibus";
                    containerId = "perferendis";
                    fingerprint = "fugiat";
                    folderId = "amet";
                    name = "Erma Hessel";
                }};;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "totam";
                key = "dignissimos";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "quis";
                tagId = new String[]{{
                    add("eos"),
                }};
                triggerId = new String[]{{
                    add("dolores"),
                }};
                uploadType = "minus";
                uploadProtocol = "quam";
                variableId = new String[]{{
                    add("vero"),
                }};
            }};            

            TagmanagerAccountsContainersMoveFoldersUpdateResponse res = sdk.accounts.tagmanagerAccountsContainersMoveFoldersUpdate(req, new TagmanagerAccountsContainersMoveFoldersUpdateSecurity("nostrum", "hic") {{
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

## tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate

Re-generates the authorization code for a GTM Environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Environment;
import org.openapis.openapi.models.shared.EnvironmentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest req = new TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest("recusandae", "omnis", "facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                environment = new Environment() {{
                    accountId = "voluptatem";
                    authorizationCode = "porro";
                    authorizationTimestampMs = "consequuntur";
                    containerId = "blanditiis";
                    containerVersionId = "error";
                    description = "eaque";
                    enableDebug = false;
                    environmentId = "occaecati";
                    fingerprint = "rerum";
                    name = "Ollie Watsica";
                    type = EnvironmentTypeEnum.LATEST;
                    url = "deleniti";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "libero";
                key = "delectus";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "aliquid";
                uploadProtocol = "dolorem";
            }};            

            TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse res = sdk.accounts.tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate(req, new TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity("dolorem", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.environment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersTagsCreate

Creates a GTM Tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.SetupTag;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagTagFiringOptionEnum;
import org.openapis.openapi.models.shared.TeardownTag;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersTagsCreateRequest req = new TagmanagerAccountsContainersTagsCreateRequest("qui", "ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                tag = new Tag() {{
                    accountId = "excepturi";
                    blockingRuleId = new String[]{{
                        add("voluptate"),
                        add("dignissimos"),
                        add("reiciendis"),
                    }};
                    blockingTriggerId = new String[]{{
                        add("dolorum"),
                    }};
                    containerId = "numquam";
                    fingerprint = "veritatis";
                    firingRuleId = new String[]{{
                        add("ipsa"),
                    }};
                    firingTriggerId = new String[]{{
                        add("odio"),
                        add("quaerat"),
                    }};
                    liveOnly = false;
                    name = "Rickey Wolf";
                    notes = "eos";
                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                        add(new Parameter() {{
                            key = "sit";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                            value = "dolorum";
                        }}),
                        add(new Parameter() {{
                            key = "iusto";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.LIST;
                            value = "omnis";
                        }}),
                        add(new Parameter() {{
                            key = "necessitatibus";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.LIST;
                            value = "ipsum";
                        }}),
                    }};
                    parentFolderId = "voluptate";
                    paused = false;
                    priority = new Parameter() {{
                        key = "id";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TEMPLATE;
                        value = "perferendis";
                    }};;
                    scheduleEndMs = "amet";
                    scheduleStartMs = "optio";
                    setupTag = new org.openapis.openapi.models.shared.SetupTag[]{{
                        add(new SetupTag() {{
                            stopOnSetupFailure = false;
                            tagName = "ad";
                        }}),
                        add(new SetupTag() {{
                            stopOnSetupFailure = false;
                            tagName = "saepe";
                        }}),
                        add(new SetupTag() {{
                            stopOnSetupFailure = false;
                            tagName = "suscipit";
                        }}),
                        add(new SetupTag() {{
                            stopOnSetupFailure = false;
                            tagName = "deserunt";
                        }}),
                    }};
                    tagFiringOption = TagTagFiringOptionEnum.ONCE_PER_EVENT;
                    tagId = "minima";
                    teardownTag = new org.openapis.openapi.models.shared.TeardownTag[]{{
                        add(new TeardownTag() {{
                            stopTeardownOnFailure = false;
                            tagName = "totam";
                        }}),
                        add(new TeardownTag() {{
                            stopTeardownOnFailure = false;
                            tagName = "similique";
                        }}),
                        add(new TeardownTag() {{
                            stopTeardownOnFailure = false;
                            tagName = "alias";
                        }}),
                        add(new TeardownTag() {{
                            stopTeardownOnFailure = false;
                            tagName = "at";
                        }}),
                    }};
                    type = "quaerat";
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "officiis";
                key = "qui";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "esse";
                uploadProtocol = "harum";
            }};            

            TagmanagerAccountsContainersTagsCreateResponse res = sdk.accounts.tagmanagerAccountsContainersTagsCreate(req, new TagmanagerAccountsContainersTagsCreateSecurity("iusto", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersTagsDelete

Deletes a GTM Tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsDeleteRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsDeleteResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersTagsDeleteRequest req = new TagmanagerAccountsContainersTagsDeleteRequest("quisquam", "tenetur", "amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "dolorem";
                key = "sapiente";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "sit";
                uploadProtocol = "expedita";
            }};            

            TagmanagerAccountsContainersTagsDeleteResponse res = sdk.accounts.tagmanagerAccountsContainersTagsDelete(req, new TagmanagerAccountsContainersTagsDeleteSecurity("neque", "sed") {{
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

## tagmanagerAccountsContainersTagsGet

Gets a GTM Tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsGetRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsGetResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsGetSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsGetSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersTagsGetRequest req = new TagmanagerAccountsContainersTagsGetRequest("vel", "libero", "voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "qui";
                key = "cupiditate";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "soluta";
                uploadProtocol = "dicta";
            }};            

            TagmanagerAccountsContainersTagsGetResponse res = sdk.accounts.tagmanagerAccountsContainersTagsGet(req, new TagmanagerAccountsContainersTagsGetSecurity() {{
                option1 = new TagmanagerAccountsContainersTagsGetSecurityOption1("laborum", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersTagsList

Lists all GTM Tags of a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersTagsListRequest req = new TagmanagerAccountsContainersTagsListRequest("incidunt", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "quam";
                key = "molestias";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "neque";
                uploadProtocol = "fugit";
            }};            

            TagmanagerAccountsContainersTagsListResponse res = sdk.accounts.tagmanagerAccountsContainersTagsList(req, new TagmanagerAccountsContainersTagsListSecurity() {{
                option1 = new TagmanagerAccountsContainersTagsListSecurityOption1("magni", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersTagsUpdate

Updates a GTM Tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTagsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.SetupTag;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagTagFiringOptionEnum;
import org.openapis.openapi.models.shared.TeardownTag;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersTagsUpdateRequest req = new TagmanagerAccountsContainersTagsUpdateRequest("sunt", "ullam", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                tag = new Tag() {{
                    accountId = "voluptatem";
                    blockingRuleId = new String[]{{
                        add("soluta"),
                        add("nobis"),
                        add("et"),
                        add("saepe"),
                    }};
                    blockingTriggerId = new String[]{{
                        add("veritatis"),
                    }};
                    containerId = "nobis";
                    fingerprint = "quos";
                    firingRuleId = new String[]{{
                        add("cupiditate"),
                        add("aperiam"),
                        add("delectus"),
                    }};
                    firingTriggerId = new String[]{{
                        add("dolore"),
                    }};
                    liveOnly = false;
                    name = "Mr. Josephine Pagac V";
                    notes = "itaque";
                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                        add(new Parameter() {{
                            key = "est";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TAG_REFERENCE;
                            value = "ut";
                        }}),
                    }};
                    parentFolderId = "facilis";
                    paused = false;
                    priority = new Parameter() {{
                        key = "cupiditate";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.LIST;
                        value = "odio";
                    }};;
                    scheduleEndMs = "occaecati";
                    scheduleStartMs = "voluptatibus";
                    setupTag = new org.openapis.openapi.models.shared.SetupTag[]{{
                        add(new SetupTag() {{
                            stopOnSetupFailure = false;
                            tagName = "vero";
                        }}),
                        add(new SetupTag() {{
                            stopOnSetupFailure = false;
                            tagName = "omnis";
                        }}),
                        add(new SetupTag() {{
                            stopOnSetupFailure = false;
                            tagName = "quis";
                        }}),
                        add(new SetupTag() {{
                            stopOnSetupFailure = false;
                            tagName = "ipsum";
                        }}),
                    }};
                    tagFiringOption = TagTagFiringOptionEnum.ONCE_PER_LOAD;
                    tagId = "voluptate";
                    teardownTag = new org.openapis.openapi.models.shared.TeardownTag[]{{
                        add(new TeardownTag() {{
                            stopTeardownOnFailure = false;
                            tagName = "vero";
                        }}),
                    }};
                    type = "tenetur";
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "quod";
                fingerprint = "odio";
                key = "similique";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "ducimus";
                uploadProtocol = "dolore";
            }};            

            TagmanagerAccountsContainersTagsUpdateResponse res = sdk.accounts.tagmanagerAccountsContainersTagsUpdate(req, new TagmanagerAccountsContainersTagsUpdateSecurity("quibusdam", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersTriggersCreate

Creates a GTM Trigger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionTypeEnum;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.Trigger;
import org.openapis.openapi.models.shared.TriggerTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersTriggersCreateRequest req = new TagmanagerAccountsContainersTriggersCreateRequest("sequi", "natus") {{
                dollarXgafv = XgafvEnum.TWO;
                trigger = new Trigger() {{
                    accountId = "aut";
                    autoEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "nulla";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "doloribus";
                                }}),
                                add(new Parameter() {{
                                    key = "iusto";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "officia";
                                }}),
                            }};
                            type = ConditionTypeEnum.STARTS_WITH;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "ea";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                    value = "magnam";
                                }}),
                                add(new Parameter() {{
                                    key = "ratione";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "dolor";
                                }}),
                            }};
                            type = ConditionTypeEnum.URL_MATCHES;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "ex";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "nostrum";
                                }}),
                            }};
                            type = ConditionTypeEnum.URL_MATCHES;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "saepe";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "veniam";
                                }}),
                                add(new Parameter() {{
                                    key = "aliquid";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "quo";
                                }}),
                                add(new Parameter() {{
                                    key = "consectetur";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "eaque";
                                }}),
                                add(new Parameter() {{
                                    key = "a";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "deleniti";
                                }}),
                            }};
                            type = ConditionTypeEnum.LESS_OR_EQUALS;
                        }}),
                    }};
                    checkValidation = new Parameter() {{
                        key = "aliquam";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TEMPLATE;
                        value = "non";
                    }};;
                    containerId = "et";
                    continuousTimeMinMilliseconds = new Parameter() {{
                        key = "dolorum";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.INTEGER;
                        value = "eum";
                    }};;
                    customEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "quas";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "libero";
                                }}),
                                add(new Parameter() {{
                                    key = "quasi";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "provident";
                                }}),
                                add(new Parameter() {{
                                    key = "ipsa";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.LIST;
                                    value = "eius";
                                }}),
                                add(new Parameter() {{
                                    key = "esse";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.MAP;
                                    value = "reprehenderit";
                                }}),
                            }};
                            type = ConditionTypeEnum.LESS;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "ut";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                    value = "eos";
                                }}),
                                add(new Parameter() {{
                                    key = "praesentium";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "id";
                                }}),
                                add(new Parameter() {{
                                    key = "quidem";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                    value = "quo";
                                }}),
                                add(new Parameter() {{
                                    key = "fuga";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "ab";
                                }}),
                            }};
                            type = ConditionTypeEnum.GREATER_OR_EQUALS;
                        }}),
                    }};
                    eventName = new Parameter() {{
                        key = "consequatur";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.BOOLEAN_;
                        value = "aspernatur";
                    }};;
                    filter = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "esse";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                    value = "quod";
                                }}),
                                add(new Parameter() {{
                                    key = "dignissimos";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.LIST;
                                    value = "accusamus";
                                }}),
                                add(new Parameter() {{
                                    key = "aliquam";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "sapiente";
                                }}),
                                add(new Parameter() {{
                                    key = "dolores";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "porro";
                                }}),
                            }};
                            type = ConditionTypeEnum.MATCH_REGEX;
                        }}),
                    }};
                    fingerprint = "quas";
                    horizontalScrollPercentageList = new Parameter() {{
                        key = "praesentium";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.INTEGER;
                        value = "fuga";
                    }};;
                    interval = new Parameter() {{
                        key = "mollitia";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TEMPLATE;
                        value = "minima";
                    }};;
                    intervalSeconds = new Parameter() {{
                        key = "nisi";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.INTEGER;
                        value = "ratione";
                    }};;
                    limit = new Parameter() {{
                        key = "explicabo";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.LIST;
                        value = "et";
                    }};;
                    maxTimerLengthSeconds = new Parameter() {{
                        key = "esse";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TEMPLATE;
                        value = "esse";
                    }};;
                    name = "Marco Terry PhD";
                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                        add(new Parameter() {{
                            key = "harum";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.MAP;
                            value = "minima";
                        }}),
                        add(new Parameter() {{
                            key = "distinctio";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.MAP;
                            value = "tempore";
                        }}),
                    }};
                    parentFolderId = "adipisci";
                    selector = new Parameter() {{
                        key = "cumque";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TRIGGER_REFERENCE;
                        value = "quaerat";
                    }};;
                    totalTimeMinMilliseconds = new Parameter() {{
                        key = "sapiente";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.LIST;
                        value = "provident";
                    }};;
                    triggerId = "a";
                    type = TriggerTypeEnum.YOU_TUBE_VIDEO;
                    uniqueTriggerId = new Parameter() {{
                        key = "quas";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TAG_REFERENCE;
                        value = "error";
                    }};;
                    verticalScrollPercentageList = new Parameter() {{
                        key = "sint";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.INTEGER;
                        value = "eveniet";
                    }};;
                    visibilitySelector = new Parameter() {{
                        key = "asperiores";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.INTEGER;
                        value = "quasi";
                    }};;
                    visiblePercentageMax = new Parameter() {{
                        key = "similique";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TAG_REFERENCE;
                        value = "quae";
                    }};;
                    visiblePercentageMin = new Parameter() {{
                        key = "earum";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.INTEGER;
                        value = "libero";
                    }};;
                    waitForTags = new Parameter() {{
                        key = "illum";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.BOOLEAN_;
                        value = "sapiente";
                    }};;
                    waitForTagsTimeout = new Parameter() {{
                        key = "dicta";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.BOOLEAN_;
                        value = "nisi";
                    }};;
                }};;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "qui";
                fields = "quibusdam";
                key = "ex";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "dolorum";
                uploadProtocol = "architecto";
            }};            

            TagmanagerAccountsContainersTriggersCreateResponse res = sdk.accounts.tagmanagerAccountsContainersTriggersCreate(req, new TagmanagerAccountsContainersTriggersCreateSecurity("omnis", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.trigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersTriggersDelete

Deletes a GTM Trigger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersDeleteRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersDeleteResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersTriggersDeleteRequest req = new TagmanagerAccountsContainersTriggersDeleteRequest("quasi", "at", "et") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "veritatis";
                fields = "consectetur";
                key = "adipisci";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "accusantium";
                uploadProtocol = "rem";
            }};            

            TagmanagerAccountsContainersTriggersDeleteResponse res = sdk.accounts.tagmanagerAccountsContainersTriggersDelete(req, new TagmanagerAccountsContainersTriggersDeleteSecurity("aut", "laudantium") {{
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

## tagmanagerAccountsContainersTriggersGet

Gets a GTM Trigger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersGetRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersGetResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersGetSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersGetSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersTriggersGetRequest req = new TagmanagerAccountsContainersTriggersGetRequest("eum", "mollitia", "ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "occaecati";
                key = "numquam";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "voluptas";
                uploadProtocol = "aut";
            }};            

            TagmanagerAccountsContainersTriggersGetResponse res = sdk.accounts.tagmanagerAccountsContainersTriggersGet(req, new TagmanagerAccountsContainersTriggersGetSecurity() {{
                option1 = new TagmanagerAccountsContainersTriggersGetSecurityOption1("dignissimos", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.trigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersTriggersList

Lists all GTM Triggers of a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersTriggersListRequest req = new TagmanagerAccountsContainersTriggersListRequest("maiores", "natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "aperiam";
                key = "ea";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellendus";
                uploadProtocol = "officia";
            }};            

            TagmanagerAccountsContainersTriggersListResponse res = sdk.accounts.tagmanagerAccountsContainersTriggersList(req, new TagmanagerAccountsContainersTriggersListSecurity() {{
                option1 = new TagmanagerAccountsContainersTriggersListSecurityOption1("maxime", "dignissimos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTriggersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersTriggersUpdate

Updates a GTM Trigger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersTriggersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionTypeEnum;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.Trigger;
import org.openapis.openapi.models.shared.TriggerTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersTriggersUpdateRequest req = new TagmanagerAccountsContainersTriggersUpdateRequest("officia", "asperiores", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                trigger = new Trigger() {{
                    accountId = "quaerat";
                    autoEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "labore";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.MAP;
                                    value = "id";
                                }}),
                                add(new Parameter() {{
                                    key = "suscipit";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.MAP;
                                    value = "recusandae";
                                }}),
                                add(new Parameter() {{
                                    key = "totam";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.LIST;
                                    value = "quos";
                                }}),
                                add(new Parameter() {{
                                    key = "vel";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.MAP;
                                    value = "cum";
                                }}),
                            }};
                            type = ConditionTypeEnum.MATCH_REGEX;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "corporis";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "recusandae";
                                }}),
                                add(new Parameter() {{
                                    key = "aliquid";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "in";
                                }}),
                            }};
                            type = ConditionTypeEnum.ENDS_WITH;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "facere";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "reiciendis";
                                }}),
                                add(new Parameter() {{
                                    key = "quidem";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "sunt";
                                }}),
                                add(new Parameter() {{
                                    key = "asperiores";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "beatae";
                                }}),
                                add(new Parameter() {{
                                    key = "dignissimos";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "corporis";
                                }}),
                            }};
                            type = ConditionTypeEnum.LESS;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "ipsa";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "accusamus";
                                }}),
                                add(new Parameter() {{
                                    key = "similique";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "voluptas";
                                }}),
                            }};
                            type = ConditionTypeEnum.MATCH_REGEX;
                        }}),
                    }};
                    checkValidation = new Parameter() {{
                        key = "minima";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.INTEGER;
                        value = "minus";
                    }};;
                    containerId = "dolores";
                    continuousTimeMinMilliseconds = new Parameter() {{
                        key = "blanditiis";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.BOOLEAN_;
                        value = "officiis";
                    }};;
                    customEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "adipisci";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.LIST;
                                    value = "hic";
                                }}),
                                add(new Parameter() {{
                                    key = "nesciunt";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "totam";
                                }}),
                            }};
                            type = ConditionTypeEnum.URL_MATCHES;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "nobis";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "reiciendis";
                                }}),
                                add(new Parameter() {{
                                    key = "explicabo";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.LIST;
                                    value = "expedita";
                                }}),
                            }};
                            type = ConditionTypeEnum.EQUALS;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "dolore";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.LIST;
                                    value = "commodi";
                                }}),
                                add(new Parameter() {{
                                    key = "quidem";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.MAP;
                                    value = "architecto";
                                }}),
                                add(new Parameter() {{
                                    key = "suscipit";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "reiciendis";
                                }}),
                            }};
                            type = ConditionTypeEnum.EQUALS;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "maiores";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.MAP;
                                    value = "eius";
                                }}),
                                add(new Parameter() {{
                                    key = "necessitatibus";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.MAP;
                                    value = "quos";
                                }}),
                                add(new Parameter() {{
                                    key = "voluptatibus";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.LIST;
                                    value = "reiciendis";
                                }}),
                            }};
                            type = ConditionTypeEnum.MATCH_REGEX;
                        }}),
                    }};
                    eventName = new Parameter() {{
                        key = "sit";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.LIST;
                        value = "facilis";
                    }};;
                    filter = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "ipsam";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "nobis";
                                }}),
                                add(new Parameter() {{
                                    key = "error";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "reiciendis";
                                }}),
                            }};
                            type = ConditionTypeEnum.CSS_SELECTOR;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "aperiam";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "in";
                                }}),
                            }};
                            type = ConditionTypeEnum.CSS_SELECTOR;
                        }}),
                    }};
                    fingerprint = "beatae";
                    horizontalScrollPercentageList = new Parameter() {{
                        key = "laudantium";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TRIGGER_REFERENCE;
                        value = "laboriosam";
                    }};;
                    interval = new Parameter() {{
                        key = "dolorum";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TAG_REFERENCE;
                        value = "expedita";
                    }};;
                    intervalSeconds = new Parameter() {{
                        key = "debitis";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.BOOLEAN_;
                        value = "officia";
                    }};;
                    limit = new Parameter() {{
                        key = "dolorum";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.INTEGER;
                        value = "atque";
                    }};;
                    maxTimerLengthSeconds = new Parameter() {{
                        key = "fugit";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TEMPLATE;
                        value = "culpa";
                    }};;
                    name = "Miguel Adams";
                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                        add(new Parameter() {{
                            key = "voluptatum";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.BOOLEAN_;
                            value = "et";
                        }}),
                    }};
                    parentFolderId = "blanditiis";
                    selector = new Parameter() {{
                        key = "ex";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.BOOLEAN_;
                        value = "nostrum";
                    }};;
                    totalTimeMinMilliseconds = new Parameter() {{
                        key = "saepe";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.INTEGER;
                        value = "reiciendis";
                    }};;
                    triggerId = "dolorem";
                    type = TriggerTypeEnum.AMP_TIMER;
                    uniqueTriggerId = new Parameter() {{
                        key = "dicta";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.BOOLEAN_;
                        value = "quidem";
                    }};;
                    verticalScrollPercentageList = new Parameter() {{
                        key = "atque";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TAG_REFERENCE;
                        value = "laboriosam";
                    }};;
                    visibilitySelector = new Parameter() {{
                        key = "alias";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.LIST;
                        value = "unde";
                    }};;
                    visiblePercentageMax = new Parameter() {{
                        key = "reiciendis";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TAG_REFERENCE;
                        value = "voluptates";
                    }};;
                    visiblePercentageMin = new Parameter() {{
                        key = "perferendis";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.LIST;
                        value = "facere";
                    }};;
                    waitForTags = new Parameter() {{
                        key = "fuga";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.BOOLEAN_;
                        value = "voluptatem";
                    }};;
                    waitForTagsTimeout = new Parameter() {{
                        key = "quisquam";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.LIST;
                        value = "reprehenderit";
                    }};;
                }};;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "quidem";
                fingerprint = "maxime";
                key = "et";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "assumenda";
                uploadProtocol = "ea";
            }};            

            TagmanagerAccountsContainersTriggersUpdateResponse res = sdk.accounts.tagmanagerAccountsContainersTriggersUpdate(req, new TagmanagerAccountsContainersTriggersUpdateSecurity("atque", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.trigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersUpdate

Updates a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum;
import org.openapis.openapi.models.shared.ContainerUsageContextEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersUpdateRequest req = new TagmanagerAccountsContainersUpdateRequest("officiis", "officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                container = new Container() {{
                    accountId = "natus";
                    containerId = "minima";
                    domainName = new String[]{{
                        add("ex"),
                    }};
                    enabledBuiltInVariable = new org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum[]{{
                        add(ContainerEnabledBuiltInVariableEnum.AMP_CLIENT_SCROLL_X),
                        add(ContainerEnabledBuiltInVariableEnum.VIDEO_URL),
                        add(ContainerEnabledBuiltInVariableEnum.AMP_GTM_EVENT),
                        add(ContainerEnabledBuiltInVariableEnum.AMP_CLIENT_ID),
                    }};
                    fingerprint = "suscipit";
                    name = "Dr. Ivan Littel";
                    notes = "repellendus";
                    publicId = "labore";
                    timeZoneCountryId = "reiciendis";
                    timeZoneId = "doloremque";
                    usageContext = new org.openapis.openapi.models.shared.ContainerUsageContextEnum[]{{
                        add(ContainerUsageContextEnum.WEB),
                        add(ContainerUsageContextEnum.WEB),
                        add(ContainerUsageContextEnum.WEB),
                        add(ContainerUsageContextEnum.ANDROID),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "a";
                fingerprint = "molestias";
                key = "magnam";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "occaecati";
                uploadProtocol = "officiis";
            }};            

            TagmanagerAccountsContainersUpdateResponse res = sdk.accounts.tagmanagerAccountsContainersUpdate(req, new TagmanagerAccountsContainersUpdateSecurity("perspiciatis", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.container != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVariablesCreate

Creates a GTM Variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.Variable;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVariablesCreateRequest req = new TagmanagerAccountsContainersVariablesCreateRequest("adipisci", "eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                variable = new Variable() {{
                    accountId = "consequuntur";
                    containerId = "fugit";
                    disablingTriggerId = new String[]{{
                        add("quis"),
                        add("reprehenderit"),
                        add("error"),
                    }};
                    enablingTriggerId = new String[]{{
                        add("corporis"),
                    }};
                    fingerprint = "quidem";
                    name = "Ms. Melvin Thiel IV";
                    notes = "quae";
                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                        add(new Parameter() {{
                            key = "eveniet";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.LIST;
                            value = "necessitatibus";
                        }}),
                        add(new Parameter() {{
                            key = "ratione";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.LIST;
                            value = "rem";
                        }}),
                    }};
                    parentFolderId = "aliquam";
                    scheduleEndMs = "ad";
                    scheduleStartMs = "repellat";
                    type = "alias";
                    variableId = "corporis";
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "mollitia";
                fields = "voluptas";
                key = "alias";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "dolores";
                uploadProtocol = "id";
            }};            

            TagmanagerAccountsContainersVariablesCreateResponse res = sdk.accounts.tagmanagerAccountsContainersVariablesCreate(req, new TagmanagerAccountsContainersVariablesCreateSecurity("minima", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.variable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVariablesDelete

Deletes a GTM Variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesDeleteRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesDeleteResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVariablesDeleteRequest req = new TagmanagerAccountsContainersVariablesDeleteRequest("dolorum", "nesciunt", "quae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "molestiae";
                fields = "ex";
                key = "ut";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "debitis";
                uploadProtocol = "laudantium";
            }};            

            TagmanagerAccountsContainersVariablesDeleteResponse res = sdk.accounts.tagmanagerAccountsContainersVariablesDelete(req, new TagmanagerAccountsContainersVariablesDeleteSecurity("eum", "nemo") {{
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

## tagmanagerAccountsContainersVariablesGet

Gets a GTM Variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesGetRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesGetResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesGetSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesGetSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVariablesGetRequest req = new TagmanagerAccountsContainersVariablesGetRequest("recusandae", "esse", "provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "aspernatur";
                key = "ullam";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "nostrum";
                uploadProtocol = "mollitia";
            }};            

            TagmanagerAccountsContainersVariablesGetResponse res = sdk.accounts.tagmanagerAccountsContainersVariablesGet(req, new TagmanagerAccountsContainersVariablesGetSecurity() {{
                option1 = new TagmanagerAccountsContainersVariablesGetSecurityOption1("provident", "possimus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.variable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVariablesList

Lists all GTM Variables of a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVariablesListRequest req = new TagmanagerAccountsContainersVariablesListRequest("animi", "ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "ullam";
                key = "in";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "officia";
                uploadProtocol = "laborum";
            }};            

            TagmanagerAccountsContainersVariablesListResponse res = sdk.accounts.tagmanagerAccountsContainersVariablesList(req, new TagmanagerAccountsContainersVariablesListSecurity() {{
                option1 = new TagmanagerAccountsContainersVariablesListSecurityOption1("placeat", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listVariablesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVariablesUpdate

Updates a GTM Variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVariablesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.Variable;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVariablesUpdateRequest req = new TagmanagerAccountsContainersVariablesUpdateRequest("voluptatibus", "molestias", "officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                variable = new Variable() {{
                    accountId = "cumque";
                    containerId = "vitae";
                    disablingTriggerId = new String[]{{
                        add("tempora"),
                        add("quis"),
                        add("inventore"),
                    }};
                    enablingTriggerId = new String[]{{
                        add("cumque"),
                    }};
                    fingerprint = "quae";
                    name = "Josephine Collins";
                    notes = "rem";
                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                        add(new Parameter() {{
                            key = "impedit";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.LIST;
                            value = "dicta";
                        }}),
                        add(new Parameter() {{
                            key = "minima";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.MAP;
                            value = "earum";
                        }}),
                        add(new Parameter() {{
                            key = "soluta";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TEMPLATE;
                            value = "earum";
                        }}),
                        add(new Parameter() {{
                            key = "perspiciatis";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.BOOLEAN_;
                            value = "porro";
                        }}),
                    }};
                    parentFolderId = "suscipit";
                    scheduleEndMs = "dolorem";
                    scheduleStartMs = "fugit";
                    type = "cumque";
                    variableId = "fuga";
                }};;
                accessToken = "ratione";
                alt = AltEnum.MEDIA;
                callback = "necessitatibus";
                fields = "nulla";
                fingerprint = "consequatur";
                key = "quasi";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "natus";
                uploadProtocol = "occaecati";
            }};            

            TagmanagerAccountsContainersVariablesUpdateResponse res = sdk.accounts.tagmanagerAccountsContainersVariablesUpdate(req, new TagmanagerAccountsContainersVariablesUpdateSecurity("suscipit", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.variable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVersionsCreate

Creates a Container Version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateContainerVersionRequestVersionOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionsCreateRequest req = new TagmanagerAccountsContainersVersionsCreateRequest("quasi", "magni") {{
                dollarXgafv = XgafvEnum.TWO;
                createContainerVersionRequestVersionOptions = new CreateContainerVersionRequestVersionOptions() {{
                    name = "Terence Beer";
                    notes = "molestiae";
                    quickPreview = false;
                }};;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "praesentium";
                key = "maiores";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "architecto";
                uploadProtocol = "fugiat";
            }};            

            TagmanagerAccountsContainersVersionsCreateResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsCreate(req, new TagmanagerAccountsContainersVersionsCreateSecurity("doloremque", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createContainerVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVersionsDelete

Deletes a Container Version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsDeleteRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsDeleteResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionsDeleteRequest req = new TagmanagerAccountsContainersVersionsDeleteRequest("odio", "tempora", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "laborum";
                key = "sunt";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "expedita";
                uploadProtocol = "aliquid";
            }};            

            TagmanagerAccountsContainersVersionsDeleteResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsDelete(req, new TagmanagerAccountsContainersVersionsDeleteSecurity("officia", "suscipit") {{
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

## tagmanagerAccountsContainersVersionsGet

Gets a Container Version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsGetRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsGetResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsGetSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsGetSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsGetSecurityOption2;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionsGetRequest req = new TagmanagerAccountsContainersVersionsGetRequest("aliquid", "perferendis", "eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "error";
                key = "possimus";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "laborum";
                uploadProtocol = "libero";
            }};            

            TagmanagerAccountsContainersVersionsGetResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsGet(req, new TagmanagerAccountsContainersVersionsGetSecurity() {{
                option1 = new TagmanagerAccountsContainersVersionsGetSecurityOption1("ad", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.containerVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVersionsList

Lists all Container Versions of a GTM Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsListSecurityOption2;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionsListRequest req = new TagmanagerAccountsContainersVersionsListRequest("enim", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "ut";
                headers = false;
                includeDeleted = false;
                key = "ad";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "molestias";
                uploadProtocol = "cum";
            }};            

            TagmanagerAccountsContainersVersionsListResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsList(req, new TagmanagerAccountsContainersVersionsListSecurity() {{
                option1 = new TagmanagerAccountsContainersVersionsListSecurityOption1("aliquid", "beatae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listContainerVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVersionsPublish

Publishes a Container Version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsPublishRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsPublishResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsPublishSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionsPublishRequest req = new TagmanagerAccountsContainersVersionsPublishRequest("voluptatum", "omnis", "veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "sapiente";
                fingerprint = "officiis";
                key = "architecto";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "debitis";
                uploadProtocol = "voluptatem";
            }};            

            TagmanagerAccountsContainersVersionsPublishResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsPublish(req, new TagmanagerAccountsContainersVersionsPublishSecurity("alias", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.publishContainerVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVersionsRestore

Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsRestoreRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsRestoreResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsRestoreSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionsRestoreRequest req = new TagmanagerAccountsContainersVersionsRestoreRequest("earum", "ex", "sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "ratione";
                key = "ullam";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "totam";
                uploadProtocol = "impedit";
            }};            

            TagmanagerAccountsContainersVersionsRestoreResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsRestore(req, new TagmanagerAccountsContainersVersionsRestoreSecurity("quibusdam", "nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.containerVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVersionsUndelete

Undeletes a Container Version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsUndeleteRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsUndeleteResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionsUndeleteRequest req = new TagmanagerAccountsContainersVersionsUndeleteRequest("ipsam", "culpa", "dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "inventore";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "tempora";
                key = "dolor";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "sit";
                uploadProtocol = "modi";
            }};            

            TagmanagerAccountsContainersVersionsUndeleteResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsUndelete(req, new TagmanagerAccountsContainersVersionsUndeleteSecurity("fugit", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.containerVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVersionsUpdate

Updates a Container Version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionTypeEnum;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum;
import org.openapis.openapi.models.shared.ContainerUsageContextEnum;
import org.openapis.openapi.models.shared.ContainerVersion;
import org.openapis.openapi.models.shared.Folder;
import org.openapis.openapi.models.shared.Macro;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.SetupTag;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagTagFiringOptionEnum;
import org.openapis.openapi.models.shared.TeardownTag;
import org.openapis.openapi.models.shared.Trigger;
import org.openapis.openapi.models.shared.TriggerTypeEnum;
import org.openapis.openapi.models.shared.Variable;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionsUpdateRequest req = new TagmanagerAccountsContainersVersionsUpdateRequest("laudantium", "quae", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                containerVersion = new ContainerVersion() {{
                    accountId = "ipsam";
                    container = new Container() {{
                        accountId = "consequuntur";
                        containerId = "ipsa";
                        domainName = new String[]{{
                            add("eveniet"),
                            add("impedit"),
                            add("officiis"),
                        }};
                        enabledBuiltInVariable = new org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum[]{{
                            add(ContainerEnabledBuiltInVariableEnum.VIDEO_PERCENT),
                            add(ContainerEnabledBuiltInVariableEnum.FORM_URL),
                        }};
                        fingerprint = "veniam";
                        name = "Lula Kemmer";
                        notes = "magnam";
                        publicId = "exercitationem";
                        timeZoneCountryId = "ab";
                        timeZoneId = "porro";
                        usageContext = new org.openapis.openapi.models.shared.ContainerUsageContextEnum[]{{
                            add(ContainerUsageContextEnum.IOS_SDK5),
                            add(ContainerUsageContextEnum.IOS),
                        }};
                    }};;
                    containerId = "recusandae";
                    containerVersionId = "consequuntur";
                    deleted = false;
                    fingerprint = "voluptatem";
                    folder = new org.openapis.openapi.models.shared.Folder[]{{
                        add(new Folder() {{
                            accountId = "necessitatibus";
                            containerId = "quasi";
                            fingerprint = "nisi";
                            folderId = "at";
                            name = "Carlton Pollich";
                        }}),
                        add(new Folder() {{
                            accountId = "repudiandae";
                            containerId = "optio";
                            fingerprint = "occaecati";
                            folderId = "nemo";
                            name = "Vickie Nitzsche";
                        }}),
                    }};
                    macro = new org.openapis.openapi.models.shared.Macro[]{{
                        add(new Macro() {{
                            accountId = "quos";
                            containerId = "eius";
                            disablingRuleId = new String[]{{
                                add("ducimus"),
                            }};
                            enablingRuleId = new String[]{{
                                add("fuga"),
                            }};
                            fingerprint = "laudantium";
                            macroId = "incidunt";
                            name = "Mrs. Hilda Stark";
                            notes = "consectetur";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "cupiditate";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "omnis";
                                }}),
                            }};
                            parentFolderId = "eos";
                            scheduleEndMs = "occaecati";
                            scheduleStartMs = "iste";
                            type = "magni";
                        }}),
                        add(new Macro() {{
                            accountId = "inventore";
                            containerId = "fuga";
                            disablingRuleId = new String[]{{
                                add("voluptatibus"),
                                add("distinctio"),
                                add("omnis"),
                                add("delectus"),
                            }};
                            enablingRuleId = new String[]{{
                                add("praesentium"),
                                add("maxime"),
                            }};
                            fingerprint = "magnam";
                            macroId = "temporibus";
                            name = "Leslie Waters";
                            notes = "earum";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "nam";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "vel";
                                }}),
                                add(new Parameter() {{
                                    key = "alias";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "enim";
                                }}),
                            }};
                            parentFolderId = "sint";
                            scheduleEndMs = "nulla";
                            scheduleStartMs = "deserunt";
                            type = "esse";
                        }}),
                    }};
                    name = "Melinda Orn";
                    notes = "accusamus";
                    rule = new org.openapis.openapi.models.shared.Rule[]{{
                        add(new Rule() {{
                            accountId = "hic";
                            condition = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "ex";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "quae";
                                        }}),
                                        add(new Parameter() {{
                                            key = "minus";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "velit";
                                        }}),
                                        add(new Parameter() {{
                                            key = "atque";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "soluta";
                                        }}),
                                        add(new Parameter() {{
                                            key = "repudiandae";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "voluptate";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.STARTS_WITH;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "neque";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "iure";
                                        }}),
                                        add(new Parameter() {{
                                            key = "odit";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.BOOLEAN_;
                                            value = "quibusdam";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "libero";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "porro";
                                        }}),
                                        add(new Parameter() {{
                                            key = "aliquam";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "vel";
                                        }}),
                                        add(new Parameter() {{
                                            key = "ea";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "eum";
                                        }}),
                                        add(new Parameter() {{
                                            key = "velit";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "dicta";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.LESS_OR_EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "iste";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.BOOLEAN_;
                                            value = "itaque";
                                        }}),
                                        add(new Parameter() {{
                                            key = "velit";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "iusto";
                                        }}),
                                        add(new Parameter() {{
                                            key = "sit";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "recusandae";
                                        }}),
                                        add(new Parameter() {{
                                            key = "ea";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "placeat";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.GREATER_OR_EQUALS;
                                }}),
                            }};
                            containerId = "expedita";
                            fingerprint = "deleniti";
                            name = "Karl Herman";
                            notes = "animi";
                            ruleId = "impedit";
                        }}),
                        add(new Rule() {{
                            accountId = "ipsam";
                            condition = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "error";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "vero";
                                        }}),
                                        add(new Parameter() {{
                                            key = "consectetur";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "ad";
                                        }}),
                                        add(new Parameter() {{
                                            key = "qui";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.BOOLEAN_;
                                            value = "soluta";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.LESS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "dolorum";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "magni";
                                        }}),
                                        add(new Parameter() {{
                                            key = "vel";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "neque";
                                        }}),
                                        add(new Parameter() {{
                                            key = "exercitationem";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "unde";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.CSS_SELECTOR;
                                }}),
                            }};
                            containerId = "distinctio";
                            fingerprint = "maxime";
                            name = "Marilyn Heaney";
                            notes = "dicta";
                            ruleId = "id";
                        }}),
                        add(new Rule() {{
                            accountId = "libero";
                            condition = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "quos";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "ipsa";
                                        }}),
                                        add(new Parameter() {{
                                            key = "voluptates";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "dolore";
                                        }}),
                                        add(new Parameter() {{
                                            key = "eligendi";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.BOOLEAN_;
                                            value = "esse";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.CONTAINS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "beatae";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "molestiae";
                                        }}),
                                        add(new Parameter() {{
                                            key = "provident";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "sint";
                                        }}),
                                        add(new Parameter() {{
                                            key = "ea";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "laudantium";
                                        }}),
                                        add(new Parameter() {{
                                            key = "corporis";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "at";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "quidem";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "expedita";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.CSS_SELECTOR;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "quibusdam";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "explicabo";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.ENDS_WITH;
                                }}),
                            }};
                            containerId = "error";
                            fingerprint = "earum";
                            name = "Delia Murray";
                            notes = "quis";
                            ruleId = "beatae";
                        }}),
                        add(new Rule() {{
                            accountId = "unde";
                            condition = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "cupiditate";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "nesciunt";
                                        }}),
                                        add(new Parameter() {{
                                            key = "at";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "necessitatibus";
                                        }}),
                                        add(new Parameter() {{
                                            key = "corporis";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "cupiditate";
                                        }}),
                                        add(new Parameter() {{
                                            key = "minima";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "in";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.LESS_OR_EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "modi";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "maiores";
                                        }}),
                                        add(new Parameter() {{
                                            key = "tempore";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "labore";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.GREATER;
                                }}),
                            }};
                            containerId = "occaecati";
                            fingerprint = "voluptas";
                            name = "Jacob Schinner";
                            notes = "est";
                            ruleId = "impedit";
                        }}),
                    }};
                    tag = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            accountId = "tempore";
                            blockingRuleId = new String[]{{
                                add("odit"),
                                add("repellat"),
                                add("pariatur"),
                                add("nemo"),
                            }};
                            blockingTriggerId = new String[]{{
                                add("aperiam"),
                                add("odio"),
                            }};
                            containerId = "minima";
                            fingerprint = "in";
                            firingRuleId = new String[]{{
                                add("excepturi"),
                                add("dolores"),
                            }};
                            firingTriggerId = new String[]{{
                                add("veritatis"),
                                add("ducimus"),
                                add("voluptate"),
                            }};
                            liveOnly = false;
                            name = "Bradford Murazik";
                            notes = "quaerat";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "officiis";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "quam";
                                }}),
                                add(new Parameter() {{
                                    key = "dolorem";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.MAP;
                                    value = "vero";
                                }}),
                            }};
                            parentFolderId = "sequi";
                            paused = false;
                            priority = new Parameter() {{
                                key = "repudiandae";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TAG_REFERENCE;
                                value = "veniam";
                            }};
                            scheduleEndMs = "animi";
                            scheduleStartMs = "dolores";
                            setupTag = new org.openapis.openapi.models.shared.SetupTag[]{{
                                add(new SetupTag() {{
                                    stopOnSetupFailure = false;
                                    tagName = "dicta";
                                }}),
                                add(new SetupTag() {{
                                    stopOnSetupFailure = false;
                                    tagName = "consequuntur";
                                }}),
                                add(new SetupTag() {{
                                    stopOnSetupFailure = false;
                                    tagName = "necessitatibus";
                                }}),
                            }};
                            tagFiringOption = TagTagFiringOptionEnum.ONCE_PER_LOAD;
                            tagId = "ipsa";
                            teardownTag = new org.openapis.openapi.models.shared.TeardownTag[]{{
                                add(new TeardownTag() {{
                                    stopTeardownOnFailure = false;
                                    tagName = "maiores";
                                }}),
                                add(new TeardownTag() {{
                                    stopTeardownOnFailure = false;
                                    tagName = "veritatis";
                                }}),
                            }};
                            type = "quasi";
                        }}),
                        add(new Tag() {{
                            accountId = "laboriosam";
                            blockingRuleId = new String[]{{
                                add("libero"),
                                add("excepturi"),
                                add("occaecati"),
                                add("nemo"),
                            }};
                            blockingTriggerId = new String[]{{
                                add("nostrum"),
                                add("doloribus"),
                            }};
                            containerId = "eligendi";
                            fingerprint = "sint";
                            firingRuleId = new String[]{{
                                add("hic"),
                                add("animi"),
                            }};
                            firingTriggerId = new String[]{{
                                add("totam"),
                                add("molestias"),
                                add("odio"),
                            }};
                            liveOnly = false;
                            name = "Gwen Braun";
                            notes = "assumenda";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "libero";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "impedit";
                                }}),
                                add(new Parameter() {{
                                    key = "cum";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "deserunt";
                                }}),
                                add(new Parameter() {{
                                    key = "doloremque";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                    value = "architecto";
                                }}),
                            }};
                            parentFolderId = "cupiditate";
                            paused = false;
                            priority = new Parameter() {{
                                key = "molestiae";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.INTEGER;
                                value = "magnam";
                            }};
                            scheduleEndMs = "itaque";
                            scheduleStartMs = "sed";
                            setupTag = new org.openapis.openapi.models.shared.SetupTag[]{{
                                add(new SetupTag() {{
                                    stopOnSetupFailure = false;
                                    tagName = "veniam";
                                }}),
                                add(new SetupTag() {{
                                    stopOnSetupFailure = false;
                                    tagName = "consequuntur";
                                }}),
                                add(new SetupTag() {{
                                    stopOnSetupFailure = false;
                                    tagName = "facere";
                                }}),
                                add(new SetupTag() {{
                                    stopOnSetupFailure = false;
                                    tagName = "laudantium";
                                }}),
                            }};
                            tagFiringOption = TagTagFiringOptionEnum.UNLIMITED;
                            tagId = "pariatur";
                            teardownTag = new org.openapis.openapi.models.shared.TeardownTag[]{{
                                add(new TeardownTag() {{
                                    stopTeardownOnFailure = false;
                                    tagName = "exercitationem";
                                }}),
                            }};
                            type = "ab";
                        }}),
                        add(new Tag() {{
                            accountId = "velit";
                            blockingRuleId = new String[]{{
                                add("tempore"),
                                add("nisi"),
                                add("voluptatibus"),
                            }};
                            blockingTriggerId = new String[]{{
                                add("blanditiis"),
                                add("distinctio"),
                            }};
                            containerId = "nisi";
                            fingerprint = "quis";
                            firingRuleId = new String[]{{
                                add("libero"),
                                add("minus"),
                            }};
                            firingTriggerId = new String[]{{
                                add("facilis"),
                                add("ipsum"),
                                add("ad"),
                                add("voluptatibus"),
                            }};
                            liveOnly = false;
                            name = "Russell Toy";
                            notes = "eos";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "nostrum";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.MAP;
                                    value = "rem";
                                }}),
                                add(new Parameter() {{
                                    key = "eligendi";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "ducimus";
                                }}),
                            }};
                            parentFolderId = "dolor";
                            paused = false;
                            priority = new Parameter() {{
                                key = "dicta";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "dignissimos";
                            }};
                            scheduleEndMs = "esse";
                            scheduleStartMs = "fugiat";
                            setupTag = new org.openapis.openapi.models.shared.SetupTag[]{{
                                add(new SetupTag() {{
                                    stopOnSetupFailure = false;
                                    tagName = "aspernatur";
                                }}),
                                add(new SetupTag() {{
                                    stopOnSetupFailure = false;
                                    tagName = "enim";
                                }}),
                            }};
                            tagFiringOption = TagTagFiringOptionEnum.ONCE_PER_LOAD;
                            tagId = "iusto";
                            teardownTag = new org.openapis.openapi.models.shared.TeardownTag[]{{
                                add(new TeardownTag() {{
                                    stopTeardownOnFailure = false;
                                    tagName = "libero";
                                }}),
                                add(new TeardownTag() {{
                                    stopTeardownOnFailure = false;
                                    tagName = "illo";
                                }}),
                            }};
                            type = "ab";
                        }}),
                        add(new Tag() {{
                            accountId = "incidunt";
                            blockingRuleId = new String[]{{
                                add("saepe"),
                                add("tempore"),
                                add("veniam"),
                                add("eos"),
                            }};
                            blockingTriggerId = new String[]{{
                                add("earum"),
                                add("reprehenderit"),
                                add("praesentium"),
                                add("nemo"),
                            }};
                            containerId = "repellat";
                            fingerprint = "quisquam";
                            firingRuleId = new String[]{{
                                add("nihil"),
                            }};
                            firingTriggerId = new String[]{{
                                add("illo"),
                                add("labore"),
                                add("assumenda"),
                            }};
                            liveOnly = false;
                            name = "Alexandra McLaughlin";
                            notes = "consequatur";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "aspernatur";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.LIST;
                                    value = "provident";
                                }}),
                                add(new Parameter() {{
                                    key = "repudiandae";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "vero";
                                }}),
                                add(new Parameter() {{
                                    key = "similique";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "commodi";
                                }}),
                                add(new Parameter() {{
                                    key = "impedit";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "ad";
                                }}),
                            }};
                            parentFolderId = "quae";
                            paused = false;
                            priority = new Parameter() {{
                                key = "amet";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.MAP;
                                value = "cum";
                            }};
                            scheduleEndMs = "amet";
                            scheduleStartMs = "quasi";
                            setupTag = new org.openapis.openapi.models.shared.SetupTag[]{{
                                add(new SetupTag() {{
                                    stopOnSetupFailure = false;
                                    tagName = "laudantium";
                                }}),
                            }};
                            tagFiringOption = TagTagFiringOptionEnum.UNLIMITED;
                            tagId = "earum";
                            teardownTag = new org.openapis.openapi.models.shared.TeardownTag[]{{
                                add(new TeardownTag() {{
                                    stopTeardownOnFailure = false;
                                    tagName = "amet";
                                }}),
                                add(new TeardownTag() {{
                                    stopTeardownOnFailure = false;
                                    tagName = "provident";
                                }}),
                            }};
                            type = "dolorum";
                        }}),
                    }};
                    trigger = new org.openapis.openapi.models.shared.Trigger[]{{
                        add(new Trigger() {{
                            accountId = "provident";
                            autoEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "nemo";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "corrupti";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "accusamus";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "voluptatem";
                                        }}),
                                        add(new Parameter() {{
                                            key = "velit";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "dolor";
                                        }}),
                                        add(new Parameter() {{
                                            key = "occaecati";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "labore";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.LESS_OR_EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "voluptatem";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.BOOLEAN_;
                                            value = "aperiam";
                                        }}),
                                        add(new Parameter() {{
                                            key = "dignissimos";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "provident";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.STARTS_WITH;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "dignissimos";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "temporibus";
                                        }}),
                                        add(new Parameter() {{
                                            key = "officia";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "quo";
                                        }}),
                                        add(new Parameter() {{
                                            key = "itaque";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "vero";
                                        }}),
                                        add(new Parameter() {{
                                            key = "qui";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "explicabo";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.ENDS_WITH;
                                }}),
                            }};
                            checkValidation = new Parameter() {{
                                key = "nihil";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "hic";
                            }};
                            containerId = "deserunt";
                            continuousTimeMinMilliseconds = new Parameter() {{
                                key = "delectus";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.LIST;
                                value = "exercitationem";
                            }};
                            customEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "repudiandae";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "accusamus";
                                        }}),
                                        add(new Parameter() {{
                                            key = "rem";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "enim";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.MATCH_REGEX;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "minima";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "modi";
                                        }}),
                                        add(new Parameter() {{
                                            key = "eum";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "fugiat";
                                        }}),
                                        add(new Parameter() {{
                                            key = "nostrum";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "ab";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.STARTS_WITH;
                                }}),
                            }};
                            eventName = new Parameter() {{
                                key = "aut";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.LIST;
                                value = "commodi";
                            }};
                            filter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "possimus";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "quaerat";
                                        }}),
                                        add(new Parameter() {{
                                            key = "itaque";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "iusto";
                                        }}),
                                        add(new Parameter() {{
                                            key = "quas";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "autem";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.LESS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "rem";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "repellendus";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.EQUALS;
                                }}),
                            }};
                            fingerprint = "quae";
                            horizontalScrollPercentageList = new Parameter() {{
                                key = "eaque";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.MAP;
                                value = "nulla";
                            }};
                            interval = new Parameter() {{
                                key = "officia";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "eveniet";
                            }};
                            intervalSeconds = new Parameter() {{
                                key = "hic";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.INTEGER;
                                value = "qui";
                            }};
                            limit = new Parameter() {{
                                key = "necessitatibus";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "aliquid";
                            }};
                            maxTimerLengthSeconds = new Parameter() {{
                                key = "modi";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.LIST;
                                value = "officia";
                            }};
                            name = "Everett Dickinson";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "ducimus";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "repellat";
                                }}),
                                add(new Parameter() {{
                                    key = "nulla";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "doloremque";
                                }}),
                                add(new Parameter() {{
                                    key = "nisi";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "non";
                                }}),
                                add(new Parameter() {{
                                    key = "rem";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                    value = "dicta";
                                }}),
                            }};
                            parentFolderId = "voluptatibus";
                            selector = new Parameter() {{
                                key = "eligendi";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "architecto";
                            }};
                            totalTimeMinMilliseconds = new Parameter() {{
                                key = "enim";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "facilis";
                            }};
                            triggerId = "reiciendis";
                            type = TriggerTypeEnum.ELEMENT_VISIBILITY;
                            uniqueTriggerId = new Parameter() {{
                                key = "iste";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "dolore";
                            }};
                            verticalScrollPercentageList = new Parameter() {{
                                key = "modi";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.INTEGER;
                                value = "consequuntur";
                            }};
                            visibilitySelector = new Parameter() {{
                                key = "assumenda";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                value = "porro";
                            }};
                            visiblePercentageMax = new Parameter() {{
                                key = "accusamus";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "sint";
                            }};
                            visiblePercentageMin = new Parameter() {{
                                key = "nihil";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.LIST;
                                value = "nesciunt";
                            }};
                            waitForTags = new Parameter() {{
                                key = "debitis";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "voluptas";
                            }};
                            waitForTagsTimeout = new Parameter() {{
                                key = "consequuntur";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                value = "eius";
                            }};
                        }}),
                        add(new Trigger() {{
                            accountId = "ipsa";
                            autoEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "accusantium";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "facere";
                                        }}),
                                        add(new Parameter() {{
                                            key = "aliquam";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "est";
                                        }}),
                                        add(new Parameter() {{
                                            key = "delectus";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "similique";
                                        }}),
                                        add(new Parameter() {{
                                            key = "illo";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "possimus";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.GREATER_OR_EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "explicabo";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "alias";
                                        }}),
                                        add(new Parameter() {{
                                            key = "quidem";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "consequuntur";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.ENDS_WITH;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "officia";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "tenetur";
                                        }}),
                                        add(new Parameter() {{
                                            key = "adipisci";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.BOOLEAN_;
                                            value = "ex";
                                        }}),
                                        add(new Parameter() {{
                                            key = "minus";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "nisi";
                                        }}),
                                        add(new Parameter() {{
                                            key = "quisquam";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "minima";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.CONTAINS;
                                }}),
                            }};
                            checkValidation = new Parameter() {{
                                key = "qui";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.INTEGER;
                                value = "adipisci";
                            }};
                            containerId = "praesentium";
                            continuousTimeMinMilliseconds = new Parameter() {{
                                key = "dolor";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.MAP;
                                value = "impedit";
                            }};
                            customEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "culpa";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "modi";
                                        }}),
                                        add(new Parameter() {{
                                            key = "veniam";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "quisquam";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.ENDS_WITH;
                                }}),
                            }};
                            eventName = new Parameter() {{
                                key = "doloribus";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "alias";
                            }};
                            filter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "nobis";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "vel";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.GREATER_OR_EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "ullam";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "veritatis";
                                        }}),
                                        add(new Parameter() {{
                                            key = "provident";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "quod";
                                        }}),
                                        add(new Parameter() {{
                                            key = "nemo";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.BOOLEAN_;
                                            value = "dignissimos";
                                        }}),
                                        add(new Parameter() {{
                                            key = "laboriosam";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "provident";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.LESS_OR_EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "facilis";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.BOOLEAN_;
                                            value = "unde";
                                        }}),
                                        add(new Parameter() {{
                                            key = "modi";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "aspernatur";
                                        }}),
                                        add(new Parameter() {{
                                            key = "libero";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "quod";
                                        }}),
                                        add(new Parameter() {{
                                            key = "id";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "nesciunt";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.CSS_SELECTOR;
                                }}),
                            }};
                            fingerprint = "nemo";
                            horizontalScrollPercentageList = new Parameter() {{
                                key = "illum";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.MAP;
                                value = "assumenda";
                            }};
                            interval = new Parameter() {{
                                key = "recusandae";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "facere";
                            }};
                            intervalSeconds = new Parameter() {{
                                key = "laborum";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.INTEGER;
                                value = "maxime";
                            }};
                            limit = new Parameter() {{
                                key = "ipsam";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.MAP;
                                value = "molestias";
                            }};
                            maxTimerLengthSeconds = new Parameter() {{
                                key = "laborum";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "quo";
                            }};
                            name = "Theresa Jacobi";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "hic";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.MAP;
                                    value = "nulla";
                                }}),
                                add(new Parameter() {{
                                    key = "error";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "esse";
                                }}),
                                add(new Parameter() {{
                                    key = "corrupti";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                    value = "quasi";
                                }}),
                                add(new Parameter() {{
                                    key = "deserunt";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "voluptatem";
                                }}),
                            }};
                            parentFolderId = "facere";
                            selector = new Parameter() {{
                                key = "necessitatibus";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "architecto";
                            }};
                            totalTimeMinMilliseconds = new Parameter() {{
                                key = "similique";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "magni";
                            }};
                            triggerId = "officiis";
                            type = TriggerTypeEnum.WINDOW_LOADED;
                            uniqueTriggerId = new Parameter() {{
                                key = "necessitatibus";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.LIST;
                                value = "a";
                            }};
                            verticalScrollPercentageList = new Parameter() {{
                                key = "maiores";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "asperiores";
                            }};
                            visibilitySelector = new Parameter() {{
                                key = "rem";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TAG_REFERENCE;
                                value = "doloribus";
                            }};
                            visiblePercentageMax = new Parameter() {{
                                key = "velit";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.LIST;
                                value = "eligendi";
                            }};
                            visiblePercentageMin = new Parameter() {{
                                key = "quasi";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.LIST;
                                value = "accusantium";
                            }};
                            waitForTags = new Parameter() {{
                                key = "qui";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.INTEGER;
                                value = "dicta";
                            }};
                            waitForTagsTimeout = new Parameter() {{
                                key = "odit";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "error";
                            }};
                        }}),
                        add(new Trigger() {{
                            accountId = "vel";
                            autoEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "laboriosam";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "ullam";
                                        }}),
                                        add(new Parameter() {{
                                            key = "quae";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "magni";
                                        }}),
                                        add(new Parameter() {{
                                            key = "deserunt";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "nesciunt";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.LESS_OR_EQUALS;
                                }}),
                            }};
                            checkValidation = new Parameter() {{
                                key = "quis";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.LIST;
                                value = "maiores";
                            }};
                            containerId = "laudantium";
                            continuousTimeMinMilliseconds = new Parameter() {{
                                key = "velit";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "ipsa";
                            }};
                            customEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "quas";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "a";
                                        }}),
                                        add(new Parameter() {{
                                            key = "nobis";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "minus";
                                        }}),
                                        add(new Parameter() {{
                                            key = "commodi";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "quidem";
                                        }}),
                                        add(new Parameter() {{
                                            key = "modi";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "sequi";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.LESS_OR_EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "esse";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "a";
                                        }}),
                                        add(new Parameter() {{
                                            key = "animi";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "deserunt";
                                        }}),
                                        add(new Parameter() {{
                                            key = "corporis";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.BOOLEAN_;
                                            value = "officia";
                                        }}),
                                        add(new Parameter() {{
                                            key = "saepe";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "officia";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.LESS_OR_EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "blanditiis";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "nobis";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.GREATER_OR_EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "quia";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "quos";
                                        }}),
                                        add(new Parameter() {{
                                            key = "corrupti";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "laborum";
                                        }}),
                                        add(new Parameter() {{
                                            key = "modi";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "molestias";
                                        }}),
                                        add(new Parameter() {{
                                            key = "dolore";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "odit";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.URL_MATCHES;
                                }}),
                            }};
                            eventName = new Parameter() {{
                                key = "veniam";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "veniam";
                            }};
                            filter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "nisi";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "nemo";
                                        }}),
                                        add(new Parameter() {{
                                            key = "suscipit";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "repellendus";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "sapiente";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "repudiandae";
                                        }}),
                                        add(new Parameter() {{
                                            key = "architecto";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "dolore";
                                        }}),
                                        add(new Parameter() {{
                                            key = "voluptatibus";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "soluta";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.LESS;
                                }}),
                            }};
                            fingerprint = "velit";
                            horizontalScrollPercentageList = new Parameter() {{
                                key = "earum";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.INTEGER;
                                value = "quasi";
                            }};
                            interval = new Parameter() {{
                                key = "mollitia";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                value = "doloremque";
                            }};
                            intervalSeconds = new Parameter() {{
                                key = "expedita";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.MAP;
                                value = "aliquid";
                            }};
                            limit = new Parameter() {{
                                key = "excepturi";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                value = "dolor";
                            }};
                            maxTimerLengthSeconds = new Parameter() {{
                                key = "rerum";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                value = "delectus";
                            }};
                            name = "Garrett Lubowitz";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "corporis";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "doloribus";
                                }}),
                                add(new Parameter() {{
                                    key = "nostrum";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "pariatur";
                                }}),
                                add(new Parameter() {{
                                    key = "vel";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TEMPLATE;
                                    value = "quos";
                                }}),
                            }};
                            parentFolderId = "aperiam";
                            selector = new Parameter() {{
                                key = "non";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "quisquam";
                            }};
                            totalTimeMinMilliseconds = new Parameter() {{
                                key = "quas";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "aliquid";
                            }};
                            triggerId = "laudantium";
                            type = TriggerTypeEnum.AMP_CLICK;
                            uniqueTriggerId = new Parameter() {{
                                key = "dolor";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                value = "rem";
                            }};
                            verticalScrollPercentageList = new Parameter() {{
                                key = "voluptatum";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TAG_REFERENCE;
                                value = "tempora";
                            }};
                            visibilitySelector = new Parameter() {{
                                key = "blanditiis";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.LIST;
                                value = "sit";
                            }};
                            visiblePercentageMax = new Parameter() {{
                                key = "rerum";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "quidem";
                            }};
                            visiblePercentageMin = new Parameter() {{
                                key = "totam";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.INTEGER;
                                value = "nihil";
                            }};
                            waitForTags = new Parameter() {{
                                key = "voluptas";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "fuga";
                            }};
                            waitForTagsTimeout = new Parameter() {{
                                key = "aut";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "iste";
                            }};
                        }}),
                        add(new Trigger() {{
                            accountId = "ullam";
                            autoEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "voluptas";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "nihil";
                                        }}),
                                        add(new Parameter() {{
                                            key = "inventore";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "cumque";
                                        }}),
                                        add(new Parameter() {{
                                            key = "dicta";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "beatae";
                                        }}),
                                        add(new Parameter() {{
                                            key = "cumque";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "corrupti";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.GREATER;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "officiis";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "quo";
                                        }}),
                                        add(new Parameter() {{
                                            key = "incidunt";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "id";
                                        }}),
                                        add(new Parameter() {{
                                            key = "excepturi";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                            value = "esse";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.URL_MATCHES;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "accusantium";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "eligendi";
                                        }}),
                                        add(new Parameter() {{
                                            key = "recusandae";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.LIST;
                                            value = "iusto";
                                        }}),
                                        add(new Parameter() {{
                                            key = "dolor";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "rerum";
                                        }}),
                                        add(new Parameter() {{
                                            key = "doloremque";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "eum";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.MATCH_REGEX;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "blanditiis";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "deserunt";
                                        }}),
                                        add(new Parameter() {{
                                            key = "atque";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "est";
                                        }}),
                                        add(new Parameter() {{
                                            key = "enim";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "quas";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.LESS_OR_EQUALS;
                                }}),
                            }};
                            checkValidation = new Parameter() {{
                                key = "enim";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TAG_REFERENCE;
                                value = "delectus";
                            }};
                            containerId = "officia";
                            continuousTimeMinMilliseconds = new Parameter() {{
                                key = "natus";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "doloribus";
                            }};
                            customEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "mollitia";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.BOOLEAN_;
                                            value = "eum";
                                        }}),
                                        add(new Parameter() {{
                                            key = "nemo";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TEMPLATE;
                                            value = "odio";
                                        }}),
                                        add(new Parameter() {{
                                            key = "minus";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "praesentium";
                                        }}),
                                        add(new Parameter() {{
                                            key = "dicta";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.BOOLEAN_;
                                            value = "necessitatibus";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.CONTAINS;
                                }}),
                            }};
                            eventName = new Parameter() {{
                                key = "deleniti";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TAG_REFERENCE;
                                value = "laborum";
                            }};
                            filter = new org.openapis.openapi.models.shared.Condition[]{{
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "modi";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.INTEGER;
                                            value = "voluptatum";
                                        }}),
                                        add(new Parameter() {{
                                            key = "ipsa";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "aspernatur";
                                        }}),
                                        add(new Parameter() {{
                                            key = "inventore";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.MAP;
                                            value = "hic";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.EQUALS;
                                }}),
                                add(new Condition() {{
                                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{
                                            key = "architecto";
                                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                                add(new Parameter() {{}}),
                                            }};
                                            type = ParameterTypeEnum.TAG_REFERENCE;
                                            value = "enim";
                                        }}),
                                    }};
                                    type = ConditionTypeEnum.EQUALS;
                                }}),
                            }};
                            fingerprint = "magnam";
                            horizontalScrollPercentageList = new Parameter() {{
                                key = "delectus";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                value = "ex";
                            }};
                            interval = new Parameter() {{
                                key = "repellat";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.MAP;
                                value = "hic";
                            }};
                            intervalSeconds = new Parameter() {{
                                key = "excepturi";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "similique";
                            }};
                            limit = new Parameter() {{
                                key = "ea";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TAG_REFERENCE;
                                value = "dignissimos";
                            }};
                            maxTimerLengthSeconds = new Parameter() {{
                                key = "esse";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.LIST;
                                value = "eveniet";
                            }};
                            name = "Melvin Torp";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "dignissimos";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                    value = "aliquid";
                                }}),
                                add(new Parameter() {{
                                    key = "quis";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "quaerat";
                                }}),
                                add(new Parameter() {{
                                    key = "architecto";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "expedita";
                                }}),
                                add(new Parameter() {{
                                    key = "libero";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                    value = "quos";
                                }}),
                            }};
                            parentFolderId = "temporibus";
                            selector = new Parameter() {{
                                key = "sint";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TAG_REFERENCE;
                                value = "aperiam";
                            }};
                            totalTimeMinMilliseconds = new Parameter() {{
                                key = "voluptates";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "omnis";
                            }};
                            triggerId = "illum";
                            type = TriggerTypeEnum.HISTORY_CHANGE;
                            uniqueTriggerId = new Parameter() {{
                                key = "tenetur";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TAG_REFERENCE;
                                value = "architecto";
                            }};
                            verticalScrollPercentageList = new Parameter() {{
                                key = "aliquam";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.INTEGER;
                                value = "saepe";
                            }};
                            visibilitySelector = new Parameter() {{
                                key = "consequatur";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                value = "quisquam";
                            }};
                            visiblePercentageMax = new Parameter() {{
                                key = "cumque";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.MAP;
                                value = "ad";
                            }};
                            visiblePercentageMin = new Parameter() {{
                                key = "reiciendis";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.MAP;
                                value = "nobis";
                            }};
                            waitForTags = new Parameter() {{
                                key = "quibusdam";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "officia";
                            }};
                            waitForTagsTimeout = new Parameter() {{
                                key = "cupiditate";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TAG_REFERENCE;
                                value = "accusantium";
                            }};
                        }}),
                    }};
                    variable = new org.openapis.openapi.models.shared.Variable[]{{
                        add(new Variable() {{
                            accountId = "nisi";
                            containerId = "molestiae";
                            disablingTriggerId = new String[]{{
                                add("laudantium"),
                            }};
                            enablingTriggerId = new String[]{{
                                add("odit"),
                            }};
                            fingerprint = "iusto";
                            name = "Jesse Simonis V";
                            notes = "dolore";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "accusantium";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.LIST;
                                    value = "est";
                                }}),
                                add(new Parameter() {{
                                    key = "aliquam";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.LIST;
                                    value = "iusto";
                                }}),
                            }};
                            parentFolderId = "quod";
                            scheduleEndMs = "voluptatibus";
                            scheduleStartMs = "voluptas";
                            type = "non";
                            variableId = "ullam";
                        }}),
                        add(new Variable() {{
                            accountId = "laborum";
                            containerId = "voluptas";
                            disablingTriggerId = new String[]{{
                                add("animi"),
                                add("recusandae"),
                                add("corporis"),
                                add("non"),
                            }};
                            enablingTriggerId = new String[]{{
                                add("distinctio"),
                                add("maiores"),
                                add("laboriosam"),
                                add("voluptatem"),
                            }};
                            fingerprint = "optio";
                            name = "Ashley Bruen Sr.";
                            notes = "amet";
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "in";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "dolor";
                                }}),
                                add(new Parameter() {{
                                    key = "nisi";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TAG_REFERENCE;
                                    value = "vitae";
                                }}),
                                add(new Parameter() {{
                                    key = "est";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                    value = "quos";
                                }}),
                            }};
                            parentFolderId = "possimus";
                            scheduleEndMs = "maiores";
                            scheduleStartMs = "odio";
                            type = "provident";
                            variableId = "sapiente";
                        }}),
                    }};
                }};;
                accessToken = "aperiam";
                alt = AltEnum.MEDIA;
                callback = "nesciunt";
                fields = "provident";
                fingerprint = "ex";
                key = "repellendus";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "impedit";
                uploadProtocol = "sequi";
            }};            

            TagmanagerAccountsContainersVersionsUpdateResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsUpdate(req, new TagmanagerAccountsContainersVersionsUpdateSecurity("commodi", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.containerVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsGet

Gets a GTM Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsGetRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsGetResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsGetSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsGetSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsGetSecurityOption2;
import org.openapis.openapi.models.operations.TagmanagerAccountsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsGetRequest req = new TagmanagerAccountsGetRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "nulla";
                key = "maiores";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "impedit";
                uploadProtocol = "accusamus";
            }};            

            TagmanagerAccountsGetResponse res = sdk.accounts.tagmanagerAccountsGet(req, new TagmanagerAccountsGetSecurity() {{
                option1 = new TagmanagerAccountsGetSecurityOption1("et", "quas") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## tagmanagerAccountsList

Lists all GTM Accounts that a user has access to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsListSecurityOption2;
import org.openapis.openapi.models.operations.TagmanagerAccountsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsListRequest req = new TagmanagerAccountsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "tempora";
                key = "eveniet";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "impedit";
                uploadProtocol = "quas";
            }};            

            TagmanagerAccountsListResponse res = sdk.accounts.tagmanagerAccountsList(req, new TagmanagerAccountsListSecurity() {{
                option1 = new TagmanagerAccountsListSecurityOption1("impedit", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsPermissionsCreate

Creates a user's Account & Container Permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsCreateSecurity;
import org.openapis.openapi.models.shared.AccountAccess;
import org.openapis.openapi.models.shared.AccountAccessPermissionEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContainerAccess;
import org.openapis.openapi.models.shared.ContainerAccessPermissionEnum;
import org.openapis.openapi.models.shared.UserAccess;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsPermissionsCreateRequest req = new TagmanagerAccountsPermissionsCreateRequest("eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                userAccess = new UserAccess() {{
                    accountAccess = new AccountAccess() {{
                        permission = new org.openapis.openapi.models.shared.AccountAccessPermissionEnum[]{{
                            add(AccountAccessPermissionEnum.READ),
                            add(AccountAccessPermissionEnum.READ),
                        }};
                    }};;
                    accountId = "maiores";
                    containerAccess = new org.openapis.openapi.models.shared.ContainerAccess[]{{
                        add(new ContainerAccess() {{
                            containerId = "vero";
                            permission = new org.openapis.openapi.models.shared.ContainerAccessPermissionEnum[]{{
                                add(ContainerAccessPermissionEnum.READ),
                                add(ContainerAccessPermissionEnum.MANAGE),
                                add(ContainerAccessPermissionEnum.PUBLISH),
                            }};
                        }}),
                        add(new ContainerAccess() {{
                            containerId = "minus";
                            permission = new org.openapis.openapi.models.shared.ContainerAccessPermissionEnum[]{{
                                add(ContainerAccessPermissionEnum.MANAGE),
                                add(ContainerAccessPermissionEnum.MANAGE),
                                add(ContainerAccessPermissionEnum.PUBLISH),
                            }};
                        }}),
                        add(new ContainerAccess() {{
                            containerId = "saepe";
                            permission = new org.openapis.openapi.models.shared.ContainerAccessPermissionEnum[]{{
                                add(ContainerAccessPermissionEnum.MANAGE),
                                add(ContainerAccessPermissionEnum.PUBLISH),
                                add(ContainerAccessPermissionEnum.EDIT),
                                add(ContainerAccessPermissionEnum.EDIT),
                            }};
                        }}),
                        add(new ContainerAccess() {{
                            containerId = "ducimus";
                            permission = new org.openapis.openapi.models.shared.ContainerAccessPermissionEnum[]{{
                                add(ContainerAccessPermissionEnum.MANAGE),
                                add(ContainerAccessPermissionEnum.DELETE),
                                add(ContainerAccessPermissionEnum.READ),
                            }};
                        }}),
                    }};
                    emailAddress = "ad";
                    permissionId = "sequi";
                }};;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "magnam";
                key = "odio";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "cupiditate";
                uploadProtocol = "illo";
            }};            

            TagmanagerAccountsPermissionsCreateResponse res = sdk.accounts.tagmanagerAccountsPermissionsCreate(req, new TagmanagerAccountsPermissionsCreateSecurity("exercitationem", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userAccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsPermissionsDelete

Removes a user from the account, revoking access to it and all of its containers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsDeleteRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsDeleteResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsPermissionsDeleteRequest req = new TagmanagerAccountsPermissionsDeleteRequest("illum", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "illum";
                key = "quibusdam";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "explicabo";
                uploadProtocol = "consectetur";
            }};            

            TagmanagerAccountsPermissionsDeleteResponse res = sdk.accounts.tagmanagerAccountsPermissionsDelete(req, new TagmanagerAccountsPermissionsDeleteSecurity("temporibus", "optio") {{
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

## tagmanagerAccountsPermissionsGet

Gets a user's Account & Container Permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsGetRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsGetResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsPermissionsGetRequest req = new TagmanagerAccountsPermissionsGetRequest("ipsa", "maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "sapiente";
                key = "neque";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "harum";
                uploadProtocol = "ducimus";
            }};            

            TagmanagerAccountsPermissionsGetResponse res = sdk.accounts.tagmanagerAccountsPermissionsGet(req, new TagmanagerAccountsPermissionsGetSecurity("doloremque", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userAccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsPermissionsList

List all users that have access to the account along with Account and Container Permissions granted to each of them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsPermissionsListRequest req = new TagmanagerAccountsPermissionsListRequest("laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corrupti";
                alt = AltEnum.MEDIA;
                callback = "quis";
                fields = "iure";
                key = "ab";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "sapiente";
                uploadProtocol = "corporis";
            }};            

            TagmanagerAccountsPermissionsListResponse res = sdk.accounts.tagmanagerAccountsPermissionsList(req, new TagmanagerAccountsPermissionsListSecurity("est", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAccountUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsPermissionsUpdate

Updates a user's Account & Container Permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsPermissionsUpdateSecurity;
import org.openapis.openapi.models.shared.AccountAccess;
import org.openapis.openapi.models.shared.AccountAccessPermissionEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContainerAccess;
import org.openapis.openapi.models.shared.ContainerAccessPermissionEnum;
import org.openapis.openapi.models.shared.UserAccess;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsPermissionsUpdateRequest req = new TagmanagerAccountsPermissionsUpdateRequest("quisquam", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                userAccess = new UserAccess() {{
                    accountAccess = new AccountAccess() {{
                        permission = new org.openapis.openapi.models.shared.AccountAccessPermissionEnum[]{{
                            add(AccountAccessPermissionEnum.PUBLISH),
                            add(AccountAccessPermissionEnum.EDIT),
                            add(AccountAccessPermissionEnum.PUBLISH),
                        }};
                    }};;
                    accountId = "minima";
                    containerAccess = new org.openapis.openapi.models.shared.ContainerAccess[]{{
                        add(new ContainerAccess() {{
                            containerId = "perferendis";
                            permission = new org.openapis.openapi.models.shared.ContainerAccessPermissionEnum[]{{
                                add(ContainerAccessPermissionEnum.READ),
                                add(ContainerAccessPermissionEnum.EDIT_WORKSPACE),
                                add(ContainerAccessPermissionEnum.EDIT),
                            }};
                        }}),
                        add(new ContainerAccess() {{
                            containerId = "doloremque";
                            permission = new org.openapis.openapi.models.shared.ContainerAccessPermissionEnum[]{{
                                add(ContainerAccessPermissionEnum.MANAGE),
                                add(ContainerAccessPermissionEnum.DELETE),
                                add(ContainerAccessPermissionEnum.MANAGE),
                            }};
                        }}),
                    }};
                    emailAddress = "impedit";
                    permissionId = "nisi";
                }};;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "laboriosam";
                key = "nam";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "consectetur";
                uploadProtocol = "necessitatibus";
            }};            

            TagmanagerAccountsPermissionsUpdateResponse res = sdk.accounts.tagmanagerAccountsPermissionsUpdate(req, new TagmanagerAccountsPermissionsUpdateSecurity("maxime", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userAccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsUpdate

Updates a GTM Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsUpdateSecurity;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsUpdateRequest req = new TagmanagerAccountsUpdateRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                account = new Account() {{
                    accountId = "adipisci";
                    fingerprint = "accusantium";
                    name = "Kristie Mohr";
                    shareData = false;
                }};;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "fugit";
                fingerprint = "ipsam";
                key = "nostrum";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "quasi";
                uploadProtocol = "error";
            }};            

            TagmanagerAccountsUpdateResponse res = sdk.accounts.tagmanagerAccountsUpdate(req, new TagmanagerAccountsUpdateSecurity("nobis", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
