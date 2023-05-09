# accounts

### Available Operations

* [tagmanagerAccountsContainersCombine](#tagmanageraccountscontainerscombine) - Combines Containers.
* [tagmanagerAccountsContainersCreate](#tagmanageraccountscontainerscreate) - Creates a Container.
* [tagmanagerAccountsContainersDestinationsLink](#tagmanageraccountscontainersdestinationslink) - Adds a Destination to this Container and removes it from the Container to which it is currently linked.
* [tagmanagerAccountsContainersDestinationsList](#tagmanageraccountscontainersdestinationslist) - Lists all Destinations linked to a GTM Container.
* [tagmanagerAccountsContainersEnvironmentsCreate](#tagmanageraccountscontainersenvironmentscreate) - Creates a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsList](#tagmanageraccountscontainersenvironmentslist) - Lists all GTM Environments of a GTM Container.
* [tagmanagerAccountsContainersEnvironmentsReauthorize](#tagmanageraccountscontainersenvironmentsreauthorize) - Re-generates the authorization code for a GTM Environment.
* [tagmanagerAccountsContainersList](#tagmanageraccountscontainerslist) - Lists all Containers that belongs to a GTM Account.
* [tagmanagerAccountsContainersLookup](#tagmanageraccountscontainerslookup) - Looks up a Container by destination ID.
* [tagmanagerAccountsContainersMoveTagId](#tagmanageraccountscontainersmovetagid) - Move Tag ID out of a Container.
* [tagmanagerAccountsContainersSnippet](#tagmanageraccountscontainerssnippet) - Gets the tagging snippet for a Container.
* [tagmanagerAccountsContainersVersionHeadersLatest](#tagmanageraccountscontainersversionheaderslatest) - Gets the latest container version header
* [tagmanagerAccountsContainersVersionHeadersList](#tagmanageraccountscontainersversionheaderslist) - Lists all Container Versions of a GTM Container.
* [tagmanagerAccountsContainersVersionsLive](#tagmanageraccountscontainersversionslive) - Gets the live (i.e. published) container version
* [tagmanagerAccountsContainersVersionsPublish](#tagmanageraccountscontainersversionspublish) - Publishes a Container Version.
* [tagmanagerAccountsContainersVersionsSetLatest](#tagmanageraccountscontainersversionssetlatest) - Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
* [tagmanagerAccountsContainersVersionsUndelete](#tagmanageraccountscontainersversionsundelete) - Undeletes a Container Version.
* [tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate](#tagmanageraccountscontainersworkspacesbuiltinvariablescreate) - Creates one or more GTM Built-In Variables.
* [tagmanagerAccountsContainersWorkspacesBuiltInVariablesList](#tagmanageraccountscontainersworkspacesbuiltinvariableslist) - Lists all the enabled Built-In Variables of a GTM Container.
* [tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert](#tagmanageraccountscontainersworkspacesbuiltinvariablesrevert) - Reverts changes to a GTM Built-In Variables in a GTM Workspace.
* [tagmanagerAccountsContainersWorkspacesClientsCreate](#tagmanageraccountscontainersworkspacesclientscreate) - Creates a GTM Client.
* [tagmanagerAccountsContainersWorkspacesClientsList](#tagmanageraccountscontainersworkspacesclientslist) - Lists all GTM Clients of a GTM container workspace.
* [tagmanagerAccountsContainersWorkspacesCreate](#tagmanageraccountscontainersworkspacescreate) - Creates a Workspace.
* [tagmanagerAccountsContainersWorkspacesCreateVersion](#tagmanageraccountscontainersworkspacescreateversion) - Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
* [tagmanagerAccountsContainersWorkspacesFoldersCreate](#tagmanageraccountscontainersworkspacesfolderscreate) - Creates a GTM Folder.
* [tagmanagerAccountsContainersWorkspacesFoldersEntities](#tagmanageraccountscontainersworkspacesfoldersentities) - List all entities in a GTM Folder.
* [tagmanagerAccountsContainersWorkspacesFoldersList](#tagmanageraccountscontainersworkspacesfolderslist) - Lists all GTM Folders of a Container.
* [tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder](#tagmanageraccountscontainersworkspacesfoldersmoveentitiestofolder) - Moves entities to a GTM Folder.
* [tagmanagerAccountsContainersWorkspacesGetStatus](#tagmanageraccountscontainersworkspacesgetstatus) - Finds conflicting and modified entities in the workspace.
* [tagmanagerAccountsContainersWorkspacesGtagConfigCreate](#tagmanageraccountscontainersworkspacesgtagconfigcreate) - Creates a Google tag config.
* [tagmanagerAccountsContainersWorkspacesGtagConfigList](#tagmanageraccountscontainersworkspacesgtagconfiglist) - Lists all Google tag configs in a Container.
* [tagmanagerAccountsContainersWorkspacesList](#tagmanageraccountscontainersworkspaceslist) - Lists all Workspaces that belong to a GTM Container.
* [tagmanagerAccountsContainersWorkspacesQuickPreview](#tagmanageraccountscontainersworkspacesquickpreview) - Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
* [tagmanagerAccountsContainersWorkspacesResolveConflict](#tagmanageraccountscontainersworkspacesresolveconflict) - Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
* [tagmanagerAccountsContainersWorkspacesSync](#tagmanageraccountscontainersworkspacessync) - Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
* [tagmanagerAccountsContainersWorkspacesTagsCreate](#tagmanageraccountscontainersworkspacestagscreate) - Creates a GTM Tag.
* [tagmanagerAccountsContainersWorkspacesTagsList](#tagmanageraccountscontainersworkspacestagslist) - Lists all GTM Tags of a Container.
* [tagmanagerAccountsContainersWorkspacesTemplatesCreate](#tagmanageraccountscontainersworkspacestemplatescreate) - Creates a GTM Custom Template.
* [tagmanagerAccountsContainersWorkspacesTemplatesList](#tagmanageraccountscontainersworkspacestemplateslist) - Lists all GTM Templates of a GTM container workspace.
* [tagmanagerAccountsContainersWorkspacesTriggersCreate](#tagmanageraccountscontainersworkspacestriggerscreate) - Creates a GTM Trigger.
* [tagmanagerAccountsContainersWorkspacesTriggersList](#tagmanageraccountscontainersworkspacestriggerslist) - Lists all GTM Triggers of a Container.
* [tagmanagerAccountsContainersWorkspacesVariablesCreate](#tagmanageraccountscontainersworkspacesvariablescreate) - Creates a GTM Variable.
* [tagmanagerAccountsContainersWorkspacesVariablesList](#tagmanageraccountscontainersworkspacesvariableslist) - Lists all GTM Variables of a Container.
* [tagmanagerAccountsContainersWorkspacesZonesCreate](#tagmanageraccountscontainersworkspaceszonescreate) - Creates a GTM Zone.
* [tagmanagerAccountsContainersWorkspacesZonesList](#tagmanageraccountscontainersworkspaceszoneslist) - Lists all GTM Zones of a GTM container workspace.
* [tagmanagerAccountsContainersWorkspacesZonesRevert](#tagmanageraccountscontainersworkspaceszonesrevert) - Reverts changes to a GTM Zone in a GTM Workspace.
* [tagmanagerAccountsList](#tagmanageraccountslist) - Lists all GTM Accounts that a user has access to.
* [tagmanagerAccountsUserPermissionsCreate](#tagmanageraccountsuserpermissionscreate) - Creates a user's Account & Container access.
* [tagmanagerAccountsUserPermissionsDelete](#tagmanageraccountsuserpermissionsdelete) - Removes a user from the account, revoking access to it and all of its containers.
* [tagmanagerAccountsUserPermissionsGet](#tagmanageraccountsuserpermissionsget) - Gets a user's Account & Container access.
* [tagmanagerAccountsUserPermissionsList](#tagmanageraccountsuserpermissionslist) - List all users that have access to the account along with Account and Container user access granted to each of them.
* [tagmanagerAccountsUserPermissionsUpdate](#tagmanageraccountsuserpermissionsupdate) - Updates a user's Account & Container access.

## tagmanagerAccountsContainersCombine

Combines Containers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineSettingSourceEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersCombineRequest req = new TagmanagerAccountsContainersCombineRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                allowUserPermissionFeatureUpdate = false;
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                containerId = "minus";
                fields = "placeat";
                key = "voluptatum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "excepturi";
                settingSource = TagmanagerAccountsContainersCombineSettingSourceEnum.CURRENT;
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            TagmanagerAccountsContainersCombineResponse res = sdk.accounts.tagmanagerAccountsContainersCombine(req, new TagmanagerAccountsContainersCombineSecurity("ab", "quis") {{
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
import org.openapis.openapi.models.shared.ContainerFeatures;
import org.openapis.openapi.models.shared.ContainerUsageContextEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersCreateRequest req = new TagmanagerAccountsContainersCreateRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                container = new Container() {{
                    accountId = "perferendis";
                    containerId = "ipsam";
                    domainName = new String[]{{
                        add("sapiente"),
                        add("quo"),
                        add("odit"),
                        add("at"),
                    }};
                    features = new ContainerFeatures() {{
                        supportBuiltInVariables = false;
                        supportClients = false;
                        supportEnvironments = false;
                        supportFolders = false;
                        supportGtagConfigs = false;
                        supportTags = false;
                        supportTemplates = false;
                        supportTriggers = false;
                        supportUserPermissions = false;
                        supportVariables = false;
                        supportVersions = false;
                        supportWorkspaces = false;
                        supportZones = false;
                    }};;
                    fingerprint = "at";
                    name = "Javier Schmidt";
                    notes = "totam";
                    path = "porro";
                    publicId = "dolorum";
                    tagIds = new String[]{{
                        add("nam"),
                    }};
                    tagManagerUrl = "officia";
                    taggingServerUrls = new String[]{{
                        add("fugit"),
                        add("deleniti"),
                        add("hic"),
                    }};
                    usageContext = new org.openapis.openapi.models.shared.ContainerUsageContextEnum[]{{
                        add(ContainerUsageContextEnum.ANDROID_SDK5),
                        add(ContainerUsageContextEnum.USAGE_CONTEXT_UNSPECIFIED),
                        add(ContainerUsageContextEnum.IOS),
                        add(ContainerUsageContextEnum.IOS),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            TagmanagerAccountsContainersCreateResponse res = sdk.accounts.tagmanagerAccountsContainersCreate(req, new TagmanagerAccountsContainersCreateSecurity("ad", "natus") {{
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

## tagmanagerAccountsContainersDestinationsLink

Adds a Destination to this Container and removes it from the Container to which it is currently linked.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersDestinationsLinkRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersDestinationsLinkResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersDestinationsLinkSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersDestinationsLinkRequest req = new TagmanagerAccountsContainersDestinationsLinkRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                allowUserPermissionFeatureUpdate = false;
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                destinationId = "hic";
                fields = "saepe";
                key = "fuga";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "iste";
                uploadProtocol = "iure";
            }};            

            TagmanagerAccountsContainersDestinationsLinkResponse res = sdk.accounts.tagmanagerAccountsContainersDestinationsLink(req, new TagmanagerAccountsContainersDestinationsLinkSecurity("saepe", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.destination != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersDestinationsList

Lists all Destinations linked to a GTM Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersDestinationsListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersDestinationsListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersDestinationsListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersDestinationsListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersDestinationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersDestinationsListRequest req = new TagmanagerAccountsContainersDestinationsListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "nobis";
            }};            

            TagmanagerAccountsContainersDestinationsListResponse res = sdk.accounts.tagmanagerAccountsContainersDestinationsList(req, new TagmanagerAccountsContainersDestinationsListSecurity() {{
                option1 = new TagmanagerAccountsContainersDestinationsListSecurityOption1("enim", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDestinationsResponse != null) {
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

            TagmanagerAccountsContainersEnvironmentsCreateRequest req = new TagmanagerAccountsContainersEnvironmentsCreateRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                environment = new Environment() {{
                    accountId = "excepturi";
                    authorizationCode = "accusantium";
                    authorizationTimestamp = "iure";
                    containerId = "culpa";
                    containerVersionId = "doloribus";
                    description = "sapiente";
                    enableDebug = false;
                    environmentId = "architecto";
                    fingerprint = "mollitia";
                    name = "Cecilia Crooks";
                    path = "occaecati";
                    tagManagerUrl = "numquam";
                    type = EnvironmentTypeEnum.LIVE;
                    url = "quam";
                    workspaceId = "molestiae";
                }};;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "quia";
                fields = "quis";
                key = "vitae";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "enim";
                uploadProtocol = "odit";
            }};            

            TagmanagerAccountsContainersEnvironmentsCreateResponse res = sdk.accounts.tagmanagerAccountsContainersEnvironmentsCreate(req, new TagmanagerAccountsContainersEnvironmentsCreateSecurity("quo", "sequi") {{
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

            TagmanagerAccountsContainersEnvironmentsListRequest req = new TagmanagerAccountsContainersEnvironmentsListRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "quasi";
                key = "error";
                oauthToken = "temporibus";
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "reiciendis";
                uploadProtocol = "voluptatibus";
            }};            

            TagmanagerAccountsContainersEnvironmentsListResponse res = sdk.accounts.tagmanagerAccountsContainersEnvironmentsList(req, new TagmanagerAccountsContainersEnvironmentsListSecurity() {{
                option1 = new TagmanagerAccountsContainersEnvironmentsListSecurityOption1("vero", "nihil") {{
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

## tagmanagerAccountsContainersEnvironmentsReauthorize

Re-generates the authorization code for a GTM Environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsReauthorizeRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsReauthorizeResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersEnvironmentsReauthorizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Environment;
import org.openapis.openapi.models.shared.EnvironmentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersEnvironmentsReauthorizeRequest req = new TagmanagerAccountsContainersEnvironmentsReauthorizeRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                environment = new Environment() {{
                    accountId = "ipsa";
                    authorizationCode = "omnis";
                    authorizationTimestamp = "voluptate";
                    containerId = "cum";
                    containerVersionId = "perferendis";
                    description = "doloremque";
                    enableDebug = false;
                    environmentId = "reprehenderit";
                    fingerprint = "ut";
                    name = "Willie Hessel";
                    path = "dicta";
                    tagManagerUrl = "harum";
                    type = EnvironmentTypeEnum.LIVE;
                    url = "accusamus";
                    workspaceId = "commodi";
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "quidem";
                key = "molestias";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "modi";
                uploadProtocol = "praesentium";
            }};            

            TagmanagerAccountsContainersEnvironmentsReauthorizeResponse res = sdk.accounts.tagmanagerAccountsContainersEnvironmentsReauthorize(req, new TagmanagerAccountsContainersEnvironmentsReauthorizeSecurity("rem", "voluptates") {{
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

            TagmanagerAccountsContainersListRequest req = new TagmanagerAccountsContainersListRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                pageToken = "est";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "explicabo";
                uploadProtocol = "deserunt";
            }};            

            TagmanagerAccountsContainersListResponse res = sdk.accounts.tagmanagerAccountsContainersList(req, new TagmanagerAccountsContainersListSecurity() {{
                option1 = new TagmanagerAccountsContainersListSecurityOption1("distinctio", "quibusdam") {{
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

## tagmanagerAccountsContainersLookup

Looks up a Container by destination ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersLookupRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersLookupResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersLookupSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersLookupSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersLookupSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersLookupRequest req = new TagmanagerAccountsContainersLookupRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "aliquid";
                destinationId = "cupiditate";
                fields = "quos";
                key = "perferendis";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "ipsam";
                uploadProtocol = "alias";
            }};            

            TagmanagerAccountsContainersLookupResponse res = sdk.accounts.tagmanagerAccountsContainersLookup(req, new TagmanagerAccountsContainersLookupSecurity() {{
                option1 = new TagmanagerAccountsContainersLookupSecurityOption1("fugit", "dolorum") {{
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

## tagmanagerAccountsContainersMoveTagId

Move Tag ID out of a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersMoveTagIdRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersMoveTagIdResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersMoveTagIdSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersMoveTagIdRequest req = new TagmanagerAccountsContainersMoveTagIdRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facilis";
                allowUserPermissionFeatureUpdate = false;
                alt = AltEnum.PROTO;
                callback = "labore";
                copySettings = false;
                copyTermsOfService = false;
                copyUsers = false;
                fields = "delectus";
                key = "eum";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "eligendi";
                tagId = "sint";
                tagName = "aliquid";
                uploadType = "provident";
                uploadProtocol = "necessitatibus";
            }};            

            TagmanagerAccountsContainersMoveTagIdResponse res = sdk.accounts.tagmanagerAccountsContainersMoveTagId(req, new TagmanagerAccountsContainersMoveTagIdSecurity("sint", "officia") {{
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

## tagmanagerAccountsContainersSnippet

Gets the tagging snippet for a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersSnippetRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersSnippetResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersSnippetSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersSnippetSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersSnippetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersSnippetRequest req = new TagmanagerAccountsContainersSnippetRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "in";
                key = "illum";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "dicta";
                uploadProtocol = "magnam";
            }};            

            TagmanagerAccountsContainersSnippetResponse res = sdk.accounts.tagmanagerAccountsContainersSnippet(req, new TagmanagerAccountsContainersSnippetSecurity() {{
                option1 = new TagmanagerAccountsContainersSnippetSecurityOption1("cumque", "facere") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getContainerSnippetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVersionHeadersLatest

Gets the latest container version header

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionHeadersLatestRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionHeadersLatestResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionHeadersLatestSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionHeadersLatestRequest req = new TagmanagerAccountsContainersVersionHeadersLatestRequest("ea") {{
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

            TagmanagerAccountsContainersVersionHeadersLatestResponse res = sdk.accounts.tagmanagerAccountsContainersVersionHeadersLatest(req, new TagmanagerAccountsContainersVersionHeadersLatestSecurity() {{
                option1 = new TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1("nam", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.containerVersionHeader != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersVersionHeadersList

Lists all Container Versions of a GTM Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionHeadersListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionHeadersListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionHeadersListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionHeadersListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionHeadersListSecurityOption2;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionHeadersListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionHeadersListRequest req = new TagmanagerAccountsContainersVersionHeadersListRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "nisi";
                includeDeleted = false;
                key = "vel";
                oauthToken = "natus";
                pageToken = "omnis";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "perferendis";
                uploadProtocol = "nihil";
            }};            

            TagmanagerAccountsContainersVersionHeadersListResponse res = sdk.accounts.tagmanagerAccountsContainersVersionHeadersList(req, new TagmanagerAccountsContainersVersionHeadersListSecurity() {{
                option1 = new TagmanagerAccountsContainersVersionHeadersListSecurityOption1("magnam", "distinctio") {{
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

## tagmanagerAccountsContainersVersionsLive

Gets the live (i.e. published) container version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsLiveRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsLiveResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsLiveSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsLiveSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsLiveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionsLiveRequest req = new TagmanagerAccountsContainersVersionsLiveRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "nobis";
                key = "eum";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "architecto";
                uploadProtocol = "magnam";
            }};            

            TagmanagerAccountsContainersVersionsLiveResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsLive(req, new TagmanagerAccountsContainersVersionsLiveSecurity() {{
                option1 = new TagmanagerAccountsContainersVersionsLiveSecurityOption1("et", "excepturi") {{
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

            TagmanagerAccountsContainersVersionsPublishRequest req = new TagmanagerAccountsContainersVersionsPublishRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "mollitia";
                fingerprint = "reiciendis";
                key = "mollitia";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "dolor";
                uploadProtocol = "necessitatibus";
            }};            

            TagmanagerAccountsContainersVersionsPublishResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsPublish(req, new TagmanagerAccountsContainersVersionsPublishSecurity("odit", "nemo") {{
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

## tagmanagerAccountsContainersVersionsSetLatest

Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsSetLatestRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsSetLatestResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersVersionsSetLatestSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersVersionsSetLatestRequest req = new TagmanagerAccountsContainersVersionsSetLatestRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "architecto";
                uploadProtocol = "architecto";
            }};            

            TagmanagerAccountsContainersVersionsSetLatestResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsSetLatest(req, new TagmanagerAccountsContainersVersionsSetLatestSecurity("repudiandae", "ullam") {{
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

            TagmanagerAccountsContainersVersionsUndeleteRequest req = new TagmanagerAccountsContainersVersionsUndeleteRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "saepe";
                key = "pariatur";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "praesentium";
                uploadProtocol = "natus";
            }};            

            TagmanagerAccountsContainersVersionsUndeleteResponse res = sdk.accounts.tagmanagerAccountsContainersVersionsUndelete(req, new TagmanagerAccountsContainersVersionsUndeleteSecurity("magni", "sunt") {{
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

## tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate

Creates one or more GTM Built-In Variables.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest req = new TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest("quo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "excepturi";
                key = "odit";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "accusantium";
                type = new org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum[]{{
                    add(TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum.SERVER_PAGE_LOCATION_HOSTNAME),
                }};
                uploadType = "quidem";
                uploadProtocol = "ipsam";
            }};            

            TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate(req, new TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity("voluptate", "autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createBuiltInVariableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesBuiltInVariablesList

Lists all the enabled Built-In Variables of a GTM Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest req = new TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "perferendis";
                key = "fugiat";
                oauthToken = "amet";
                pageToken = "aut";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "corporis";
                uploadProtocol = "hic";
            }};            

            TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesBuiltInVariablesList(req, new TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1("libero", "nobis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listEnabledBuiltInVariablesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert

Reverts changes to a GTM Built-In Variables in a GTM Workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest req = new TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "quis";
                key = "nesciunt";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "perferendis";
                type = TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum.ERROR_MESSAGE;
                uploadType = "minus";
                uploadProtocol = "quam";
            }};            

            TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert(req, new TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity("dolor", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.revertBuiltInVariableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesClientsCreate

Creates a GTM Client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesClientsCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesClientsCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesClientsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesClientsCreateRequest req = new TagmanagerAccountsContainersWorkspacesClientsCreateRequest("nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                client = new Client() {{
                    accountId = "recusandae";
                    clientId = "omnis";
                    containerId = "facilis";
                    fingerprint = "perspiciatis";
                    name = "Robyn Cruickshank";
                    notes = "eaque";
                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                        add(new Parameter() {{
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
                            type = ParameterTypeEnum.TAG_REFERENCE;
                            value = "modi";
                        }}),
                        add(new Parameter() {{
                            key = "iste";
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
                            value = "provident";
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
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.INTEGER;
                            value = "quos";
                        }}),
                    }};
                    parentFolderId = "aliquid";
                    path = "dolorem";
                    priority = 209843;
                    tagManagerUrl = "dolor";
                    type = "qui";
                    workspaceId = "ipsum";
                }};;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "voluptate";
                key = "dignissimos";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "dolorum";
                uploadProtocol = "numquam";
            }};            

            TagmanagerAccountsContainersWorkspacesClientsCreateResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesClientsCreate(req, new TagmanagerAccountsContainersWorkspacesClientsCreateSecurity("veritatis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.client != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesClientsList

Lists all GTM Clients of a GTM container workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesClientsListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesClientsListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesClientsListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesClientsListRequest req = new TagmanagerAccountsContainersWorkspacesClientsListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "quidem";
                key = "voluptatibus";
                oauthToken = "voluptas";
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "atque";
                uploadProtocol = "sit";
            }};            

            TagmanagerAccountsContainersWorkspacesClientsListResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesClientsList(req, new TagmanagerAccountsContainersWorkspacesClientsListSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1("fugiat", "ab") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listClientsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesCreate

Creates a Workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Workspace;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesCreateRequest req = new TagmanagerAccountsContainersWorkspacesCreateRequest("soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                workspace = new Workspace() {{
                    accountId = "iusto";
                    containerId = "voluptate";
                    description = "dolorum";
                    fingerprint = "deleniti";
                    name = "Terence Rau";
                    path = "ipsum";
                    tagManagerUrl = "voluptate";
                    workspaceId = "id";
                }};;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "perferendis";
                key = "amet";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "ad";
                uploadProtocol = "saepe";
            }};            

            TagmanagerAccountsContainersWorkspacesCreateResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesCreate(req, new TagmanagerAccountsContainersWorkspacesCreateSecurity("suscipit", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workspace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesCreateVersion

Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesCreateVersionRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesCreateVersionResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesCreateVersionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateContainerVersionRequestVersionOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesCreateVersionRequest req = new TagmanagerAccountsContainersWorkspacesCreateVersionRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                createContainerVersionRequestVersionOptions = new CreateContainerVersionRequestVersionOptions() {{
                    name = "Dr. Jimmie Murphy";
                    notes = "tempora";
                }};;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "qui";
                key = "dolorum";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "harum";
                uploadProtocol = "iusto";
            }};            

            TagmanagerAccountsContainersWorkspacesCreateVersionResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesCreateVersion(req, new TagmanagerAccountsContainersWorkspacesCreateVersionSecurity("ipsum", "quisquam") {{
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

## tagmanagerAccountsContainersWorkspacesFoldersCreate

Creates a GTM Folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Folder;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesFoldersCreateRequest req = new TagmanagerAccountsContainersWorkspacesFoldersCreateRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                folder = new Folder() {{
                    accountId = "tempore";
                    containerId = "accusamus";
                    fingerprint = "numquam";
                    folderId = "enim";
                    name = "Jeannie Leannon MD";
                    notes = "neque";
                    path = "sed";
                    tagManagerUrl = "vel";
                    workspaceId = "libero";
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "ipsum";
                key = "incidunt";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "maxime";
                uploadProtocol = "pariatur";
            }};            

            TagmanagerAccountsContainersWorkspacesFoldersCreateResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesFoldersCreate(req, new TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity("soluta", "dicta") {{
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

## tagmanagerAccountsContainersWorkspacesFoldersEntities

List all entities in a GTM Folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest req = new TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "distinctio";
                key = "facilis";
                oauthToken = "aliquid";
                pageToken = "quam";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "temporibus";
                uploadProtocol = "qui";
            }};            

            TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesFoldersEntities(req, new TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption1("neque", "fugit") {{
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

## tagmanagerAccountsContainersWorkspacesFoldersList

Lists all GTM Folders of a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesFoldersListRequest req = new TagmanagerAccountsContainersWorkspacesFoldersListRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "hic";
                key = "voluptatem";
                oauthToken = "cumque";
                pageToken = "soluta";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "et";
                uploadProtocol = "saepe";
            }};            

            TagmanagerAccountsContainersWorkspacesFoldersListResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesFoldersList(req, new TagmanagerAccountsContainersWorkspacesFoldersListSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesFoldersListSecurityOption1("ipsum", "veritatis") {{
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

## tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder

Moves entities to a GTM Folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Folder;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest req = new TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                folder = new Folder() {{
                    accountId = "tempore";
                    containerId = "cupiditate";
                    fingerprint = "aperiam";
                    folderId = "delectus";
                    name = "Joanne Grant";
                    notes = "architecto";
                    path = "quae";
                    tagManagerUrl = "aut";
                    workspaceId = "quas";
                }};;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "repellendus";
                key = "porro";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "ut";
                tagId = new String[]{{
                    add("cupiditate"),
                    add("qui"),
                    add("quae"),
                }};
                triggerId = new String[]{{
                    add("odio"),
                    add("occaecati"),
                    add("voluptatibus"),
                }};
                uploadType = "quisquam";
                uploadProtocol = "vero";
                variableId = new String[]{{
                    add("quis"),
                    add("ipsum"),
                    add("delectus"),
                }};
            }};            

            TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder(req, new TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity("voluptate", "consectetur") {{
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

## tagmanagerAccountsContainersWorkspacesGetStatus

Finds conflicting and modified entities in the workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGetStatusRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGetStatusResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGetStatusSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesGetStatusRequest req = new TagmanagerAccountsContainersWorkspacesGetStatusRequest("vero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "quod";
                key = "odio";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "vero";
                uploadProtocol = "ducimus";
            }};            

            TagmanagerAccountsContainersWorkspacesGetStatusResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesGetStatus(req, new TagmanagerAccountsContainersWorkspacesGetStatusSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1("dolore", "quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getWorkspaceStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesGtagConfigCreate

Creates a Google tag config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GtagConfig;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest req = new TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest("illum") {{
                dollarXgafv = XgafvEnum.ONE;
                gtagConfig = new GtagConfig() {{
                    accountId = "natus";
                    containerId = "impedit";
                    fingerprint = "aut";
                    gtagConfigId = "voluptatibus";
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
                            type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                            value = "officia";
                        }}),
                    }};
                    path = "tempora";
                    tagManagerUrl = "ipsam";
                    type = "ea";
                    workspaceId = "aspernatur";
                }};;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "ratione";
                key = "ex";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "dolor";
                uploadProtocol = "maiores";
            }};            

            TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesGtagConfigCreate(req, new TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity("quasi", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.gtagConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesGtagConfigList

Lists all Google tag configs in a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGtagConfigListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGtagConfigListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesGtagConfigListRequest req = new TagmanagerAccountsContainersWorkspacesGtagConfigListRequest("nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "quisquam";
                key = "saepe";
                oauthToken = "ea";
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "veniam";
                uploadProtocol = "aliquid";
            }};            

            TagmanagerAccountsContainersWorkspacesGtagConfigListResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesGtagConfigList(req, new TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1("inventore", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listGtagConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesList

Lists all Workspaces that belong to a GTM Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesListRequest req = new TagmanagerAccountsContainersWorkspacesListRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "minima";
                key = "eaque";
                oauthToken = "a";
                pageToken = "libero";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "aut";
                uploadProtocol = "deleniti";
            }};            

            TagmanagerAccountsContainersWorkspacesListResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesList(req, new TagmanagerAccountsContainersWorkspacesListSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesListSecurityOption1("impedit", "aliquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listWorkspacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesQuickPreview

Quick previews a workspace by creating a fake container version from all entities in the provided workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesQuickPreviewRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesQuickPreviewResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesQuickPreviewRequest req = new TagmanagerAccountsContainersWorkspacesQuickPreviewRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "inventore";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "dolorum";
                key = "laborum";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "eum";
                uploadProtocol = "autem";
            }};            

            TagmanagerAccountsContainersWorkspacesQuickPreviewResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesQuickPreview(req, new TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity("nobis", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.quickPreviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesResolveConflict

Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesResolveConflictRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesResolveConflictResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesResolveConflictSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionTypeEnum;
import org.openapis.openapi.models.shared.Entity;
import org.openapis.openapi.models.shared.EntityChangeStatusEnum;
import org.openapis.openapi.models.shared.Folder;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.SetupTag;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagConsentSetting;
import org.openapis.openapi.models.shared.TagConsentSettingConsentStatusEnum;
import org.openapis.openapi.models.shared.TagTagFiringOptionEnum;
import org.openapis.openapi.models.shared.TeardownTag;
import org.openapis.openapi.models.shared.Trigger;
import org.openapis.openapi.models.shared.TriggerTypeEnum;
import org.openapis.openapi.models.shared.Variable;
import org.openapis.openapi.models.shared.VariableFormatValue;
import org.openapis.openapi.models.shared.VariableFormatValueCaseConversionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesResolveConflictRequest req = new TagmanagerAccountsContainersWorkspacesResolveConflictRequest("assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                entity = new Entity() {{
                    changeStatus = EntityChangeStatusEnum.NONE;
                    client = new Client() {{
                        accountId = "libero";
                        clientId = "quasi";
                        containerId = "tempora";
                        fingerprint = "numquam";
                        name = "Ramona Bednar";
                        notes = "odio";
                        parameter = new org.openapis.openapi.models.shared.Parameter[]{{
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
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "suscipit";
                            }}),
                        }};
                        parentFolderId = "assumenda";
                        path = "eos";
                        priority = 509342;
                        tagManagerUrl = "quisquam";
                        type = "veritatis";
                        workspaceId = "ipsa";
                    }};;
                    folder = new Folder() {{
                        accountId = "id";
                        containerId = "quidem";
                        fingerprint = "neque";
                        folderId = "quo";
                        name = "Salvatore Parker";
                        notes = "voluptas";
                        path = "ab";
                        tagManagerUrl = "cupiditate";
                        workspaceId = "consequatur";
                    }};;
                    tag = new Tag() {{
                        accountId = "tempora";
                        blockingRuleId = new String[]{{
                            add("ipsam"),
                            add("aspernatur"),
                            add("sequi"),
                            add("quo"),
                        }};
                        blockingTriggerId = new String[]{{
                            add("recusandae"),
                            add("aperiam"),
                        }};
                        consentSettings = new TagConsentSetting() {{
                            consentStatus = TagConsentSettingConsentStatusEnum.NEEDED;
                            consentType = new Parameter() {{
                                key = "quod";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "totam";
                            }};;
                        }};;
                        containerId = "accusamus";
                        fingerprint = "aliquam";
                        firingRuleId = new String[]{{
                            add("occaecati"),
                            add("commodi"),
                        }};
                        firingTriggerId = new String[]{{
                            add("dolores"),
                            add("deserunt"),
                            add("molestiae"),
                            add("accusantium"),
                        }};
                        liveOnly = false;
                        monitoringMetadata = new Parameter() {{
                            key = "porro";
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
                            value = "consequuntur";
                        }};;
                        monitoringMetadataTagNameKey = "deleniti";
                        name = "Lee O'Conner";
                        notes = "explicabo";
                        parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{
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
                                type = ParameterTypeEnum.TEMPLATE;
                                value = "ratione";
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
                                value = "et";
                            }}),
                        }};
                        parentFolderId = "esse";
                        path = "eveniet";
                        paused = false;
                        priority = new Parameter() {{
                            key = "accusamus";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                            value = "nam";
                        }};;
                        scheduleEndMs = "vero";
                        scheduleStartMs = "aliquid";
                        setupTag = new org.openapis.openapi.models.shared.SetupTag[]{{
                            add(new SetupTag() {{
                                stopOnSetupFailure = false;
                                tagName = "saepe";
                            }}),
                        }};
                        tagFiringOption = TagTagFiringOptionEnum.UNLIMITED;
                        tagId = "harum";
                        tagManagerUrl = "molestiae";
                        teardownTag = new org.openapis.openapi.models.shared.TeardownTag[]{{
                            add(new TeardownTag() {{
                                stopTeardownOnFailure = false;
                                tagName = "occaecati";
                            }}),
                            add(new TeardownTag() {{
                                stopTeardownOnFailure = false;
                                tagName = "minima";
                            }}),
                            add(new TeardownTag() {{
                                stopTeardownOnFailure = false;
                                tagName = "distinctio";
                            }}),
                        }};
                        type = "eligendi";
                        workspaceId = "sit";
                    }};;
                    trigger = new Trigger() {{
                        accountId = "culpa";
                        autoEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                            add(new Condition() {{
                                parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{
                                        key = "cumque";
                                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                        }};
                                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                        value = "quaerat";
                                    }}),
                                }};
                                type = ConditionTypeEnum.URL_MATCHES;
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
                                        value = "nulla";
                                    }}),
                                }};
                                type = ConditionTypeEnum.GREATER;
                            }}),
                            add(new Condition() {{
                                parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{
                                        key = "quasi";
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
                                        value = "pariatur";
                                    }}),
                                    add(new Parameter() {{
                                        key = "possimus";
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
                                        value = "facere";
                                    }}),
                                }};
                                type = ConditionTypeEnum.EQUALS;
                            }}),
                        }};
                        checkValidation = new Parameter() {{
                            key = "consequuntur";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.MAP;
                            value = "aliquid";
                        }};;
                        containerId = "tenetur";
                        continuousTimeMinMilliseconds = new Parameter() {{
                            key = "quae";
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
                            value = "eius";
                        }};;
                        customEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                            add(new Condition() {{
                                parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{
                                        key = "soluta";
                                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                        }};
                                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.TAG_REFERENCE;
                                        value = "dicta";
                                    }}),
                                    add(new Parameter() {{
                                        key = "ullam";
                                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.BOOLEAN_;
                                        value = "aut";
                                    }}),
                                    add(new Parameter() {{
                                        key = "voluptatum";
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
                                        value = "deleniti";
                                    }}),
                                    add(new Parameter() {{
                                        key = "itaque";
                                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.LIST;
                                        value = "tenetur";
                                    }}),
                                }};
                                type = ConditionTypeEnum.EQUALS;
                            }}),
                            add(new Condition() {{
                                parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{
                                        key = "et";
                                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.INTEGER;
                                        value = "veritatis";
                                    }}),
                                    add(new Parameter() {{
                                        key = "consectetur";
                                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                        }};
                                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                        value = "accusantium";
                                    }}),
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
                                        type = ParameterTypeEnum.BOOLEAN_;
                                        value = "mollitia";
                                    }}),
                                    add(new Parameter() {{
                                        key = "ab";
                                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                                        value = "dolor";
                                    }}),
                                }};
                                type = ConditionTypeEnum.GREATER;
                            }}),
                            add(new Condition() {{
                                parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{
                                        key = "impedit";
                                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                        }};
                                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                                        value = "dignissimos";
                                    }}),
                                    add(new Parameter() {{
                                        key = "dicta";
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
                                        value = "voluptatibus";
                                    }}),
                                }};
                                type = ConditionTypeEnum.ENDS_WITH;
                            }}),
                        }};
                        eventName = new Parameter() {{
                            key = "asperiores";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.INTEGER;
                            value = "consequuntur";
                        }};;
                        filter = new org.openapis.openapi.models.shared.Condition[]{{
                            add(new Condition() {{
                                parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{
                                        key = "maxime";
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
                                        value = "nemo";
                                    }}),
                                    add(new Parameter() {{
                                        key = "quae";
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
                                        value = "labore";
                                    }}),
                                    add(new Parameter() {{
                                        key = "ab";
                                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                        }};
                                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.MAP;
                                        value = "suscipit";
                                    }}),
                                }};
                                type = ConditionTypeEnum.CONTAINS;
                            }}),
                            add(new Condition() {{
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
                                        }};
                                        type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                        value = "vel";
                                    }}),
                                    add(new Parameter() {{
                                        key = "ducimus";
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
                                        value = "possimus";
                                    }}),
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
                                        }};
                                        type = ParameterTypeEnum.BOOLEAN_;
                                        value = "corporis";
                                    }}),
                                }};
                                type = ConditionTypeEnum.URL_MATCHES;
                            }}),
                            add(new Condition() {{
                                parameter = new org.openapis.openapi.models.shared.Parameter[]{{
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
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                                        value = "cum";
                                    }}),
                                    add(new Parameter() {{
                                        key = "consectetur";
                                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.TAG_REFERENCE;
                                        value = "facere";
                                    }}),
                                    add(new Parameter() {{
                                        key = "numquam";
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
                                        value = "quidem";
                                    }}),
                                    add(new Parameter() {{
                                        key = "saepe";
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
                                        type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                                        value = "asperiores";
                                    }}),
                                }};
                                type = ConditionTypeEnum.CONTAINS;
                            }}),
                            add(new Condition() {{
                                parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{
                                        key = "amet";
                                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                        }};
                                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                                            add(new Parameter() {{}}),
                                            add(new Parameter() {{}}),
                                        }};
                                        type = ParameterTypeEnum.TAG_REFERENCE;
                                        value = "debitis";
                                    }}),
                                }};
                                type = ConditionTypeEnum.CONTAINS;
                            }}),
                        }};
                        fingerprint = "corporis";
                        horizontalScrollPercentageList = new Parameter() {{
                            key = "harum";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TAG_REFERENCE;
                            value = "libero";
                        }};;
                        interval = new Parameter() {{
                            key = "vitae";
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
                            value = "aspernatur";
                        }};;
                        intervalSeconds = new Parameter() {{
                            key = "voluptas";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.INTEGER;
                            value = "nobis";
                        }};;
                        limit = new Parameter() {{
                            key = "dolorum";
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
                            value = "blanditiis";
                        }};;
                        maxTimerLengthSeconds = new Parameter() {{
                            key = "in";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TAG_REFERENCE;
                            value = "temporibus";
                        }};;
                        name = "Sherry Ritchie";
                        notes = "hic";
                        parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{
                                key = "culpa";
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
                                value = "hic";
                            }}),
                        }};
                        parentFolderId = "exercitationem";
                        path = "nobis";
                        selector = new Parameter() {{
                            key = "sit";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TAG_REFERENCE;
                            value = "explicabo";
                        }};;
                        tagManagerUrl = "asperiores";
                        totalTimeMinMilliseconds = new Parameter() {{
                            key = "facilis";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                            value = "iste";
                        }};;
                        triggerId = "dolore";
                        type = TriggerTypeEnum.CLICK;
                        uniqueTriggerId = new Parameter() {{
                            key = "sed";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.MAP;
                            value = "explicabo";
                        }};;
                        verticalScrollPercentageList = new Parameter() {{
                            key = "voluptas";
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
                        visibilitySelector = new Parameter() {{
                            key = "debitis";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                            value = "corrupti";
                        }};;
                        visiblePercentageMax = new Parameter() {{
                            key = "maiores";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.LIST;
                            value = "eius";
                        }};;
                        visiblePercentageMin = new Parameter() {{
                            key = "necessitatibus";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.LIST;
                            value = "quos";
                        }};;
                        waitForTags = new Parameter() {{
                            key = "voluptatibus";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.BOOLEAN_;
                            value = "reiciendis";
                        }};;
                        waitForTagsTimeout = new Parameter() {{
                            key = "ex";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TAG_REFERENCE;
                            value = "praesentium";
                        }};;
                        workspaceId = "facilis";
                    }};;
                    variable = new Variable() {{
                        accountId = "quaerat";
                        containerId = "incidunt";
                        disablingTriggerId = new String[]{{
                            add("debitis"),
                            add("rem"),
                        }};
                        enablingTriggerId = new String[]{{
                            add("nobis"),
                        }};
                        fingerprint = "error";
                        formatValue = new VariableFormatValue() {{
                            caseConversionType = VariableFormatValueCaseConversionTypeEnum.LOWERCASE;
                            convertFalseToValue = new Parameter() {{
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
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.TRIGGER_REFERENCE;
                                value = "magni";
                            }};;
                            convertNullToValue = new Parameter() {{
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
                                type = ParameterTypeEnum.INTEGER;
                                value = "in";
                            }};;
                            convertTrueToValue = new Parameter() {{
                                key = "officiis";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.INTEGER;
                                value = "praesentium";
                            }};;
                            convertUndefinedToValue = new Parameter() {{
                                key = "cum";
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
                                value = "error";
                            }};;
                        }};;
                        name = "Rudolph Trantow";
                        notes = "nostrum";
                        parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{
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
                            }}),
                            add(new Parameter() {{
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
                                type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                                value = "culpa";
                            }}),
                            add(new Parameter() {{
                                key = "expedita";
                                list = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                    add(new Parameter() {{}}),
                                }};
                                map = new org.openapis.openapi.models.shared.Parameter[]{{
                                    add(new Parameter() {{}}),
                                }};
                                type = ParameterTypeEnum.BOOLEAN_;
                                value = "ipsam";
                            }}),
                        }};
                        parentFolderId = "sit";
                        path = "voluptatum";
                        scheduleEndMs = "quas";
                        scheduleStartMs = "repudiandae";
                        tagManagerUrl = "corporis";
                        type = "et";
                        variableId = "blanditiis";
                        workspaceId = "ex";
                    }};;
                }};;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "nostrum";
                fingerprint = "saepe";
                key = "error";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "reiciendis";
                uploadProtocol = "dolorem";
            }};            

            TagmanagerAccountsContainersWorkspacesResolveConflictResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesResolveConflict(req, new TagmanagerAccountsContainersWorkspacesResolveConflictSecurity("harum", "dicta") {{
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

## tagmanagerAccountsContainersWorkspacesSync

Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesSyncRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesSyncResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesSyncSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesSyncRequest req = new TagmanagerAccountsContainersWorkspacesSyncRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "laborum";
                key = "nam";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "alias";
                uploadProtocol = "amet";
            }};            

            TagmanagerAccountsContainersWorkspacesSyncResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesSync(req, new TagmanagerAccountsContainersWorkspacesSyncSecurity("deserunt", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.syncWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesTagsCreate

Creates a GTM Tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTagsCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTagsCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTagsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.SetupTag;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagConsentSetting;
import org.openapis.openapi.models.shared.TagConsentSettingConsentStatusEnum;
import org.openapis.openapi.models.shared.TagTagFiringOptionEnum;
import org.openapis.openapi.models.shared.TeardownTag;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesTagsCreateRequest req = new TagmanagerAccountsContainersWorkspacesTagsCreateRequest("unde") {{
                dollarXgafv = XgafvEnum.TWO;
                tag = new Tag() {{
                    accountId = "provident";
                    blockingRuleId = new String[]{{
                        add("delectus"),
                        add("voluptates"),
                        add("perferendis"),
                        add("est"),
                    }};
                    blockingTriggerId = new String[]{{
                        add("reprehenderit"),
                        add("facere"),
                        add("fuga"),
                    }};
                    consentSettings = new TagConsentSetting() {{
                        consentStatus = TagConsentSettingConsentStatusEnum.NOT_NEEDED;
                        consentType = new Parameter() {{
                            key = "mollitia";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                            value = "repudiandae";
                        }};;
                    }};;
                    containerId = "quasi";
                    fingerprint = "atque";
                    firingRuleId = new String[]{{
                        add("asperiores"),
                        add("totam"),
                    }};
                    firingTriggerId = new String[]{{
                        add("quidem"),
                        add("maxime"),
                    }};
                    liveOnly = false;
                    monitoringMetadata = new Parameter() {{
                        key = "et";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TRIGGER_REFERENCE;
                        value = "ea";
                    }};;
                    monitoringMetadataTagNameKey = "atque";
                    name = "Frankie Torphy";
                    notes = "minima";
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
                            type = ParameterTypeEnum.TRIGGER_REFERENCE;
                            value = "error";
                        }}),
                    }};
                    parentFolderId = "blanditiis";
                    path = "suscipit";
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
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                        value = "recusandae";
                    }};;
                    scheduleEndMs = "dolorum";
                    scheduleStartMs = "repellendus";
                    setupTag = new org.openapis.openapi.models.shared.SetupTag[]{{
                        add(new SetupTag() {{
                            stopOnSetupFailure = false;
                            tagName = "reiciendis";
                        }}),
                        add(new SetupTag() {{
                            stopOnSetupFailure = false;
                            tagName = "doloremque";
                        }}),
                    }};
                    tagFiringOption = TagTagFiringOptionEnum.ONCE_PER_LOAD;
                    tagId = "dicta";
                    tagManagerUrl = "accusantium";
                    teardownTag = new org.openapis.openapi.models.shared.TeardownTag[]{{
                        add(new TeardownTag() {{
                            stopTeardownOnFailure = false;
                            tagName = "dolores";
                        }}),
                    }};
                    type = "enim";
                    workspaceId = "laboriosam";
                }};;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "magnam";
                key = "saepe";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "officiis";
                uploadProtocol = "perspiciatis";
            }};            

            TagmanagerAccountsContainersWorkspacesTagsCreateResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesTagsCreate(req, new TagmanagerAccountsContainersWorkspacesTagsCreateSecurity("in", "adipisci") {{
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

## tagmanagerAccountsContainersWorkspacesTagsList

Lists all GTM Tags of a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTagsListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTagsListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTagsListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesTagsListRequest req = new TagmanagerAccountsContainersWorkspacesTagsListRequest("eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "quis";
                key = "reprehenderit";
                oauthToken = "error";
                pageToken = "illo";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "quidem";
                uploadProtocol = "eveniet";
            }};            

            TagmanagerAccountsContainersWorkspacesTagsListResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesTagsList(req, new TagmanagerAccountsContainersWorkspacesTagsListSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1("non", "vero") {{
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

## tagmanagerAccountsContainersWorkspacesTemplatesCreate

Creates a GTM Custom Template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomTemplate;
import org.openapis.openapi.models.shared.GalleryReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest req = new TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest("doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                customTemplate = new CustomTemplate() {{
                    accountId = "ipsa";
                    containerId = "totam";
                    fingerprint = "quae";
                    galleryReference = new GalleryReference() {{
                        host = "molestiae";
                        isModified = false;
                        owner = "eveniet";
                        repository = "qui";
                        signature = "cum";
                        version = "iure";
                    }};;
                    name = "Sean Pacocha";
                    path = "rem";
                    tagManagerUrl = "aliquam";
                    templateData = "ad";
                    templateId = "repellat";
                    workspaceId = "alias";
                }};;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "nihil";
                fields = "mollitia";
                key = "voluptas";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "reiciendis";
                uploadProtocol = "dolores";
            }};            

            TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesTemplatesCreate(req, new TagmanagerAccountsContainersWorkspacesTemplatesCreateSecurity("id", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesTemplatesList

Lists all GTM Templates of a GTM container workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTemplatesListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTemplatesListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTemplatesListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTemplatesListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTemplatesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesTemplatesListRequest req = new TagmanagerAccountsContainersWorkspacesTemplatesListRequest("dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "omnis";
                key = "quaerat";
                oauthToken = "molestiae";
                pageToken = "ex";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "culpa";
                uploadProtocol = "adipisci";
            }};            

            TagmanagerAccountsContainersWorkspacesTemplatesListResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesTemplatesList(req, new TagmanagerAccountsContainersWorkspacesTemplatesListSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesTemplatesListSecurityOption1("debitis", "laudantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesTriggersCreate

Creates a GTM Trigger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTriggersCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTriggersCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity;
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

            TagmanagerAccountsContainersWorkspacesTriggersCreateRequest req = new TagmanagerAccountsContainersWorkspacesTriggersCreateRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                trigger = new Trigger() {{
                    accountId = "recusandae";
                    autoEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "quis";
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
                                    type = ParameterTypeEnum.LIST;
                                    value = "aspernatur";
                                }}),
                                add(new Parameter() {{
                                    key = "ullam";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "mollitia";
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
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "aliquid";
                                }}),
                            }};
                            type = ConditionTypeEnum.CONDITION_TYPE_UNSPECIFIED;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "doloribus";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.MAP;
                                    value = "earum";
                                }}),
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
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "voluptatibus";
                                }}),
                                add(new Parameter() {{
                                    key = "molestias";
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
                                    value = "vitae";
                                }}),
                                add(new Parameter() {{
                                    key = "rerum";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                                    value = "fugit";
                                }}),
                            }};
                            type = ConditionTypeEnum.LESS_OR_EQUALS;
                        }}),
                    }};
                    checkValidation = new Parameter() {{
                        key = "quae";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TEMPLATE;
                        value = "eum";
                    }};;
                    containerId = "eius";
                    continuousTimeMinMilliseconds = new Parameter() {{
                        key = "rem";
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
                        value = "sapiente";
                    }};;
                    customEventFilter = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
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
                                    type = ParameterTypeEnum.LIST;
                                    value = "earum";
                                }}),
                            }};
                            type = ConditionTypeEnum.LESS;
                        }}),
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "illum";
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
                                    value = "maiores";
                                }}),
                                add(new Parameter() {{
                                    key = "debitis";
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
                                    value = "dolorem";
                                }}),
                                add(new Parameter() {{
                                    key = "fugit";
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
                                    value = "animi";
                                }}),
                                add(new Parameter() {{
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
                                    type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                                    value = "et";
                                }}),
                            }};
                            type = ConditionTypeEnum.MATCH_REGEX;
                        }}),
                    }};
                    eventName = new Parameter() {{
                        key = "natus";
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
                        value = "quasi";
                    }};;
                    filter = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{
                                    key = "nulla";
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
                                    value = "nihil";
                                }}),
                                add(new Parameter() {{
                                    key = "molestiae";
                                    list = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                    }};
                                    map = new org.openapis.openapi.models.shared.Parameter[]{{
                                        add(new Parameter() {{}}),
                                        add(new Parameter() {{}}),
                                    }};
                                    type = ParameterTypeEnum.BOOLEAN_;
                                    value = "praesentium";
                                }}),
                                add(new Parameter() {{
                                    key = "maiores";
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
                                    type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                                    value = "fugiat";
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
                                    type = ParameterTypeEnum.INTEGER;
                                    value = "esse";
                                }}),
                            }};
                            type = ConditionTypeEnum.ENDS_WITH;
                        }}),
                    }};
                    fingerprint = "consectetur";
                    horizontalScrollPercentageList = new Parameter() {{
                        key = "aliquid";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                        value = "nostrum";
                    }};;
                    interval = new Parameter() {{
                        key = "fugiat";
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
                        value = "suscipit";
                    }};;
                    intervalSeconds = new Parameter() {{
                        key = "aliquid";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.INTEGER;
                        value = "iste";
                    }};;
                    limit = new Parameter() {{
                        key = "id";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TRIGGER_REFERENCE;
                        value = "voluptates";
                    }};;
                    maxTimerLengthSeconds = new Parameter() {{
                        key = "mollitia";
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
                        value = "deleniti";
                    }};;
                    name = "Gloria Skiles";
                    notes = "ex";
                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
                        add(new Parameter() {{
                            key = "ad";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.LIST;
                            value = "cum";
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
                            type = ParameterTypeEnum.LIST;
                            value = "veritatis";
                        }}),
                    }};
                    parentFolderId = "rerum";
                    path = "est";
                    selector = new Parameter() {{
                        key = "culpa";
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
                        value = "architecto";
                    }};;
                    tagManagerUrl = "fuga";
                    totalTimeMinMilliseconds = new Parameter() {{
                        key = "pariatur";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                        value = "deleniti";
                    }};;
                    triggerId = "earum";
                    type = TriggerTypeEnum.FIREBASE_IN_APP_PURCHASE;
                    uniqueTriggerId = new Parameter() {{
                        key = "sapiente";
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
                        value = "asperiores";
                    }};;
                    verticalScrollPercentageList = new Parameter() {{
                        key = "ratione";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TRIGGER_REFERENCE;
                        value = "totam";
                    }};;
                    visibilitySelector = new Parameter() {{
                        key = "impedit";
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
                        value = "culpa";
                    }};;
                    visiblePercentageMax = new Parameter() {{
                        key = "dolor";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.LIST;
                        value = "veritatis";
                    }};;
                    visiblePercentageMin = new Parameter() {{
                        key = "tempora";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                        value = "sit";
                    }};;
                    waitForTags = new Parameter() {{
                        key = "modi";
                        list = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        map = new org.openapis.openapi.models.shared.Parameter[]{{
                            add(new Parameter() {{}}),
                        }};
                        type = ParameterTypeEnum.LIST;
                        value = "quae";
                    }};;
                    waitForTagsTimeout = new Parameter() {{
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
                        type = ParameterTypeEnum.TEMPLATE;
                        value = "ipsa";
                    }};;
                    workspaceId = "quas";
                }};;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "esse";
                key = "necessitatibus";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "nesciunt";
                uploadProtocol = "expedita";
            }};            

            TagmanagerAccountsContainersWorkspacesTriggersCreateResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesTriggersCreate(req, new TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity("eum", "vel") {{
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

## tagmanagerAccountsContainersWorkspacesTriggersList

Lists all GTM Triggers of a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTriggersListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTriggersListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTriggersListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesTriggersListRequest req = new TagmanagerAccountsContainersWorkspacesTriggersListRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "exercitationem";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "autem";
                key = "nobis";
                oauthToken = "laboriosam";
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "voluptatem";
                uploadProtocol = "exercitationem";
            }};            

            TagmanagerAccountsContainersWorkspacesTriggersListResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesTriggersList(req, new TagmanagerAccountsContainersWorkspacesTriggersListSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1("necessitatibus", "quasi") {{
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

## tagmanagerAccountsContainersWorkspacesVariablesCreate

Creates a GTM Variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesVariablesCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesVariablesCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.Variable;
import org.openapis.openapi.models.shared.VariableFormatValue;
import org.openapis.openapi.models.shared.VariableFormatValueCaseConversionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesVariablesCreateRequest req = new TagmanagerAccountsContainersWorkspacesVariablesCreateRequest("nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                variable = new Variable() {{
                    accountId = "vero";
                    containerId = "est";
                    disablingTriggerId = new String[]{{
                        add("sequi"),
                        add("doloribus"),
                        add("repudiandae"),
                    }};
                    enablingTriggerId = new String[]{{
                        add("occaecati"),
                        add("nemo"),
                        add("voluptate"),
                        add("blanditiis"),
                    }};
                    fingerprint = "officia";
                    formatValue = new VariableFormatValue() {{
                        caseConversionType = VariableFormatValueCaseConversionTypeEnum.LOWERCASE;
                        convertFalseToValue = new Parameter() {{
                            key = "numquam";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.INTEGER;
                            value = "aspernatur";
                        }};;
                        convertNullToValue = new Parameter() {{
                            key = "ducimus";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.LIST;
                            value = "incidunt";
                        }};;
                        convertTrueToValue = new Parameter() {{
                            key = "quasi";
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
                            type = ParameterTypeEnum.TYPE_UNSPECIFIED;
                            value = "nisi";
                        }};;
                        convertUndefinedToValue = new Parameter() {{
                            key = "consequuntur";
                            list = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            map = new org.openapis.openapi.models.shared.Parameter[]{{
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.LIST;
                            value = "reiciendis";
                        }};;
                    }};;
                    name = "John Monahan";
                    notes = "iste";
                    parameter = new org.openapis.openapi.models.shared.Parameter[]{{
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
                                add(new Parameter() {{}}),
                                add(new Parameter() {{}}),
                            }};
                            type = ParameterTypeEnum.TAG_REFERENCE;
                            value = "distinctio";
                        }}),
                    }};
                    parentFolderId = "omnis";
                    path = "delectus";
                    scheduleEndMs = "minima";
                    scheduleStartMs = "praesentium";
                    tagManagerUrl = "maxime";
                    type = "magnam";
                    variableId = "temporibus";
                    workspaceId = "quos";
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "totam";
                key = "earum";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "vero";
                uploadProtocol = "voluptatem";
            }};            

            TagmanagerAccountsContainersWorkspacesVariablesCreateResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesVariablesCreate(req, new TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity("ipsam", "vel") {{
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

## tagmanagerAccountsContainersWorkspacesVariablesList

Lists all GTM Variables of a Container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesVariablesListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesVariablesListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesVariablesListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesVariablesListRequest req = new TagmanagerAccountsContainersWorkspacesVariablesListRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "sint";
                key = "nulla";
                oauthToken = "deserunt";
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "reprehenderit";
                uploadProtocol = "est";
            }};            

            TagmanagerAccountsContainersWorkspacesVariablesListResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesVariablesList(req, new TagmanagerAccountsContainersWorkspacesVariablesListSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1("quis", "sint") {{
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

## tagmanagerAccountsContainersWorkspacesZonesCreate

Creates a GTM Zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesZonesCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesZonesCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesZonesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionTypeEnum;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.Zone;
import org.openapis.openapi.models.shared.ZoneBoundary;
import org.openapis.openapi.models.shared.ZoneChildContainer;
import org.openapis.openapi.models.shared.ZoneTypeRestriction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesZonesCreateRequest req = new TagmanagerAccountsContainersWorkspacesZonesCreateRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                zone = new Zone() {{
                    accountId = "hic";
                    boundary = new ZoneBoundary() {{
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
                                        type = ParameterTypeEnum.TEMPLATE;
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
                                        type = ParameterTypeEnum.TEMPLATE;
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
                                        type = ParameterTypeEnum.BOOLEAN_;
                                        value = "voluptate";
                                    }}),
                                }};
                                type = ConditionTypeEnum.CONTAINS;
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
                                        type = ParameterTypeEnum.INTEGER;
                                        value = "quibusdam";
                                    }}),
                                }};
                                type = ConditionTypeEnum.CONDITION_TYPE_UNSPECIFIED;
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
                                        type = ParameterTypeEnum.TEMPLATE;
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
                                        type = ParameterTypeEnum.TYPE_UNSPECIFIED;
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
                                        type = ParameterTypeEnum.TEMPLATE;
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
                        customEvaluationTriggerId = new String[]{{
                            add("deleniti"),
                            add("a"),
                            add("voluptate"),
                        }};
                    }};;
                    childContainer = new org.openapis.openapi.models.shared.ZoneChildContainer[]{{
                        add(new ZoneChildContainer() {{
                            nickname = "unde";
                            publicId = "necessitatibus";
                        }}),
                        add(new ZoneChildContainer() {{
                            nickname = "animi";
                            publicId = "impedit";
                        }}),
                    }};
                    containerId = "ipsam";
                    fingerprint = "corporis";
                    name = "Jeremiah Koch PhD";
                    notes = "consectetur";
                    path = "vitae";
                    tagManagerUrl = "inventore";
                    typeRestriction = new ZoneTypeRestriction() {{
                        enable = false;
                        whitelistedTypeId = new String[]{{
                            add("ad"),
                        }};
                    }};;
                    workspaceId = "qui";
                    zoneId = "iste";
                }};;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "soluta";
                fields = "libero";
                key = "rem";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "fugit";
                uploadProtocol = "alias";
            }};            

            TagmanagerAccountsContainersWorkspacesZonesCreateResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesZonesCreate(req, new TagmanagerAccountsContainersWorkspacesZonesCreateSecurity("magni", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.zone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesZonesList

Lists all GTM Zones of a GTM container workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesZonesListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesZonesListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesZonesListSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesZonesListSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesZonesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesZonesListRequest req = new TagmanagerAccountsContainersWorkspacesZonesListRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "exercitationem";
                fields = "itaque";
                key = "et";
                oauthToken = "ipsum";
                pageToken = "unde";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "distinctio";
                uploadProtocol = "maxime";
            }};            

            TagmanagerAccountsContainersWorkspacesZonesListResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesZonesList(req, new TagmanagerAccountsContainersWorkspacesZonesListSecurity() {{
                option1 = new TagmanagerAccountsContainersWorkspacesZonesListSecurityOption1("quia", "quia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listZonesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsContainersWorkspacesZonesRevert

Reverts changes to a GTM Zone in a GTM Workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesZonesRevertRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesZonesRevertResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersWorkspacesZonesRevertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersWorkspacesZonesRevertRequest req = new TagmanagerAccountsContainersWorkspacesZonesRevertRequest("nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "libero";
                fingerprint = "fugiat";
                key = "officia";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "sit";
                uploadProtocol = "iusto";
            }};            

            TagmanagerAccountsContainersWorkspacesZonesRevertResponse res = sdk.accounts.tagmanagerAccountsContainersWorkspacesZonesRevert(req, new TagmanagerAccountsContainersWorkspacesZonesRevertSecurity("ipsa", "voluptates") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.revertZoneResponse != null) {
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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aperiam";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "eligendi";
                includeGoogleTags = false;
                key = "distinctio";
                oauthToken = "voluptatem";
                pageToken = "autem";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "dolores";
                uploadProtocol = "assumenda";
            }};            

            TagmanagerAccountsListResponse res = sdk.accounts.tagmanagerAccountsList(req, new TagmanagerAccountsListSecurity() {{
                option1 = new TagmanagerAccountsListSecurityOption1("beatae", "est") {{
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

## tagmanagerAccountsUserPermissionsCreate

Creates a user's Account & Container access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsCreateSecurity;
import org.openapis.openapi.models.shared.AccountAccess;
import org.openapis.openapi.models.shared.AccountAccessPermissionEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContainerAccess;
import org.openapis.openapi.models.shared.ContainerAccessPermissionEnum;
import org.openapis.openapi.models.shared.UserPermission;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsUserPermissionsCreateRequest req = new TagmanagerAccountsUserPermissionsCreateRequest("facere") {{
                dollarXgafv = XgafvEnum.TWO;
                userPermission = new UserPermission() {{
                    accountAccess = new AccountAccess() {{
                        permission = AccountAccessPermissionEnum.NO_ACCESS;
                    }};;
                    accountId = "provident";
                    containerAccess = new org.openapis.openapi.models.shared.ContainerAccess[]{{
                        add(new ContainerAccess() {{
                            containerId = "necessitatibus";
                            permission = ContainerAccessPermissionEnum.APPROVE;
                        }}),
                        add(new ContainerAccess() {{
                            containerId = "sint";
                            permission = ContainerAccessPermissionEnum.READ;
                        }}),
                        add(new ContainerAccess() {{
                            containerId = "autem";
                            permission = ContainerAccessPermissionEnum.READ;
                        }}),
                        add(new ContainerAccess() {{
                            containerId = "rerum";
                            permission = ContainerAccessPermissionEnum.EDIT;
                        }}),
                    }};
                    emailAddress = "corporis";
                    path = "officiis";
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "at";
                fields = "alias";
                key = "quia";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "repudiandae";
                uploadProtocol = "accusantium";
            }};            

            TagmanagerAccountsUserPermissionsCreateResponse res = sdk.accounts.tagmanagerAccountsUserPermissionsCreate(req, new TagmanagerAccountsUserPermissionsCreateSecurity("expedita", "officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsUserPermissionsDelete

Removes a user from the account, revoking access to it and all of its containers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsDeleteRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsDeleteResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsDeleteSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsDeleteTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsUserPermissionsDeleteRequest req = new TagmanagerAccountsUserPermissionsDeleteRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "explicabo";
                key = "corporis";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "earum";
                type = new org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsDeleteTypeEnum[]{{
                    add(TagmanagerAccountsUserPermissionsDeleteTypeEnum.ELEMENT_VISIBILITY_RECENT_TIME),
                }};
                uploadType = "similique";
                uploadProtocol = "ut";
            }};            

            TagmanagerAccountsUserPermissionsDeleteResponse res = sdk.accounts.tagmanagerAccountsUserPermissionsDelete(req, new TagmanagerAccountsUserPermissionsDeleteSecurity("quidem", "quis") {{
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

## tagmanagerAccountsUserPermissionsGet

Gets a user's Account & Container access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsGetRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsGetResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsGetSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsGetSecurityOption1;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsGetSecurityOption2;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsUserPermissionsGetRequest req = new TagmanagerAccountsUserPermissionsGetRequest("beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                containerVersionId = "fugit";
                fields = "numquam";
                key = "numquam";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "officia";
                uploadProtocol = "dignissimos";
            }};            

            TagmanagerAccountsUserPermissionsGetResponse res = sdk.accounts.tagmanagerAccountsUserPermissionsGet(req, new TagmanagerAccountsUserPermissionsGetSecurity() {{
                option1 = new TagmanagerAccountsUserPermissionsGetSecurityOption1("optio", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.userPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsUserPermissionsList

List all users that have access to the account along with Account and Container user access granted to each of them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsListRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsListResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsUserPermissionsListRequest req = new TagmanagerAccountsUserPermissionsListRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "minima";
                key = "placeat";
                oauthToken = "enim";
                pageToken = "neque";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "minus";
                uploadProtocol = "eum";
            }};            

            TagmanagerAccountsUserPermissionsListResponse res = sdk.accounts.tagmanagerAccountsUserPermissionsList(req, new TagmanagerAccountsUserPermissionsListSecurity("modi", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listUserPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagmanagerAccountsUserPermissionsUpdate

Updates a user's Account & Container access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsUpdateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsUpdateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsUserPermissionsUpdateSecurity;
import org.openapis.openapi.models.shared.AccountAccess;
import org.openapis.openapi.models.shared.AccountAccessPermissionEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContainerAccess;
import org.openapis.openapi.models.shared.ContainerAccessPermissionEnum;
import org.openapis.openapi.models.shared.UserPermission;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsUserPermissionsUpdateRequest req = new TagmanagerAccountsUserPermissionsUpdateRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                userPermission = new UserPermission() {{
                    accountAccess = new AccountAccess() {{
                        permission = AccountAccessPermissionEnum.ADMIN;
                    }};;
                    accountId = "tempore";
                    containerAccess = new org.openapis.openapi.models.shared.ContainerAccess[]{{
                        add(new ContainerAccess() {{
                            containerId = "libero";
                            permission = ContainerAccessPermissionEnum.NO_ACCESS;
                        }}),
                    }};
                    emailAddress = "labore";
                    path = "totam";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "quo";
                fields = "velit";
                fingerprint = "minus";
                key = "fuga";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "impedit";
                uploadProtocol = "delectus";
            }};            

            TagmanagerAccountsUserPermissionsUpdateResponse res = sdk.accounts.tagmanagerAccountsUserPermissionsUpdate(req, new TagmanagerAccountsUserPermissionsUpdateSecurity("tempore", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
