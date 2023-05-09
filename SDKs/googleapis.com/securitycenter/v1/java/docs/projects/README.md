# projects

### Available Operations

* [securitycenterProjectsAssetsGroup](#securitycenterprojectsassetsgroup) - Filters an organization's assets and groups them by their specified properties.
* [securitycenterProjectsAssetsList](#securitycenterprojectsassetslist) - Lists an organization's assets.
* [securitycenterProjectsBigQueryExportsCreate](#securitycenterprojectsbigqueryexportscreate) - Creates a BigQuery export.
* [securitycenterProjectsBigQueryExportsList](#securitycenterprojectsbigqueryexportslist) - Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
* [securitycenterProjectsFindingsBulkMute](#securitycenterprojectsfindingsbulkmute) - Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
* [securitycenterProjectsMuteConfigsCreate](#securitycenterprojectsmuteconfigscreate) - Creates a mute config.
* [securitycenterProjectsMuteConfigsList](#securitycenterprojectsmuteconfigslist) - Lists mute configs.
* [securitycenterProjectsNotificationConfigsCreate](#securitycenterprojectsnotificationconfigscreate) - Creates a notification config.
* [securitycenterProjectsNotificationConfigsList](#securitycenterprojectsnotificationconfigslist) - Lists notification configs.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreate](#securitycenterprojectssecurityhealthanalyticssettingscustommodulescreate) - Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDelete](#securitycenterprojectssecurityhealthanalyticssettingscustommodulesdelete) - Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesList](#securitycenterprojectssecurityhealthanalyticssettingscustommoduleslist) - Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendant](#securitycenterprojectssecurityhealthanalyticssettingscustommoduleslistdescendant) - Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGet](#securitycenterprojectssecurityhealthanalyticssettingseffectivecustommodulesget) - Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesList](#securitycenterprojectssecurityhealthanalyticssettingseffectivecustommoduleslist) - Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
* [securitycenterProjectsSourcesFindingsExternalSystemsPatch](#securitycenterprojectssourcesfindingsexternalsystemspatch) - Updates external system. This is for a given finding.
* [securitycenterProjectsSourcesFindingsGroup](#securitycenterprojectssourcesfindingsgroup) - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
* [securitycenterProjectsSourcesFindingsList](#securitycenterprojectssourcesfindingslist) - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
* [securitycenterProjectsSourcesFindingsSetMute](#securitycenterprojectssourcesfindingssetmute) - Updates the mute state of a finding.
* [securitycenterProjectsSourcesFindingsSetState](#securitycenterprojectssourcesfindingssetstate) - Updates the state of a finding.
* [securitycenterProjectsSourcesList](#securitycenterprojectssourceslist) - Lists all sources belonging to an organization.

## securitycenterProjectsAssetsGroup

Filters an organization's assets and groups them by their specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsAssetsGroupRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsAssetsGroupResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsAssetsGroupSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GroupAssetsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsAssetsGroupRequest req = new SecuritycenterProjectsAssetsGroupRequest("inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                groupAssetsRequest = new GroupAssetsRequest() {{
                    compareDuration = "cumque";
                    filter = "quae";
                    groupBy = "perferendis";
                    pageSize = 241901;
                    pageToken = "aspernatur";
                    readTime = "eum";
                }};;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "at";
                fields = "impedit";
                key = "eos";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "dicta";
                uploadProtocol = "minima";
            }};            

            SecuritycenterProjectsAssetsGroupResponse res = sdk.projects.securitycenterProjectsAssetsGroup(req, new SecuritycenterProjectsAssetsGroupSecurity("beatae", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsAssetsList

Lists an organization's assets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsAssetsListRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsAssetsListResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsAssetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsAssetsListRequest req = new SecuritycenterProjectsAssetsListRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "illum";
                compareDuration = "eaque";
                fieldMask = "earum";
                fields = "perspiciatis";
                filter = "maiores";
                key = "debitis";
                oauthToken = "aliquid";
                orderBy = "porro";
                pageSize = 380335L;
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "fugit";
                readTime = "cumque";
                uploadType = "fuga";
                uploadProtocol = "ratione";
            }};            

            SecuritycenterProjectsAssetsListResponse res = sdk.projects.securitycenterProjectsAssetsList(req, new SecuritycenterProjectsAssetsListSecurity("animi", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsBigQueryExportsCreate

Creates a BigQuery export.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsBigQueryExportsCreateRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsBigQueryExportsCreateResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsBigQueryExportsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1BigQueryExportInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsBigQueryExportsCreateRequest req = new SecuritycenterProjectsBigQueryExportsCreateRequest("nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudSecuritycenterV1BigQueryExportInput = new GoogleCloudSecuritycenterV1BigQueryExportInput() {{
                    dataset = "quasi";
                    description = "et";
                    filter = "ducimus";
                    name = "Tracy Homenick Sr.";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                bigQueryExportId = "necessitatibus";
                callback = "ipsa";
                fields = "tempora";
                key = "nihil";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "iusto";
                uploadProtocol = "esse";
            }};            

            SecuritycenterProjectsBigQueryExportsCreateResponse res = sdk.projects.securitycenterProjectsBigQueryExportsCreate(req, new SecuritycenterProjectsBigQueryExportsCreateSecurity("praesentium", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudSecuritycenterV1BigQueryExport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsBigQueryExportsList

Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsBigQueryExportsListRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsBigQueryExportsListResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsBigQueryExportsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsBigQueryExportsListRequest req = new SecuritycenterProjectsBigQueryExportsListRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "doloremque";
                fields = "dicta";
                key = "odio";
                oauthToken = "tempora";
                pageSize = 458259L;
                pageToken = "ex";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "aliquid";
                uploadProtocol = "ipsa";
            }};            

            SecuritycenterProjectsBigQueryExportsListResponse res = sdk.projects.securitycenterProjectsBigQueryExportsList(req, new SecuritycenterProjectsBigQueryExportsListSecurity("laborum", "sunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBigQueryExportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsFindingsBulkMute

Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsFindingsBulkMuteRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsFindingsBulkMuteResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsFindingsBulkMuteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BulkMuteFindingsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsFindingsBulkMuteRequest req = new SecuritycenterProjectsFindingsBulkMuteRequest("nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkMuteFindingsRequest = new BulkMuteFindingsRequest() {{
                    filter = "expedita";
                    muteAnnotation = "aliquid";
                }};;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "perferendis";
                key = "eum";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "id";
                uploadProtocol = "ab";
            }};            

            SecuritycenterProjectsFindingsBulkMuteResponse res = sdk.projects.securitycenterProjectsFindingsBulkMute(req, new SecuritycenterProjectsFindingsBulkMuteSecurity("error", "possimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsMuteConfigsCreate

Creates a mute config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsMuteConfigsCreateRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsMuteConfigsCreateResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsMuteConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1MuteConfigInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsMuteConfigsCreateRequest req = new SecuritycenterProjectsMuteConfigsCreateRequest("voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudSecuritycenterV1MuteConfigInput = new GoogleCloudSecuritycenterV1MuteConfigInput() {{
                    description = "laborum";
                    displayName = "libero";
                    filter = "ad";
                    name = "Bill Brown";
                }};;
                accessToken = "quo";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "ad";
                key = "expedita";
                muteConfigId = "voluptatem";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "aliquid";
                uploadProtocol = "beatae";
            }};            

            SecuritycenterProjectsMuteConfigsCreateResponse res = sdk.projects.securitycenterProjectsMuteConfigsCreate(req, new SecuritycenterProjectsMuteConfigsCreateSecurity("voluptatum", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudSecuritycenterV1MuteConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsMuteConfigsList

Lists mute configs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsMuteConfigsListRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsMuteConfigsListResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsMuteConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsMuteConfigsListRequest req = new SecuritycenterProjectsMuteConfigsListRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "sapiente";
                key = "officiis";
                oauthToken = "architecto";
                pageSize = 682119L;
                pageToken = "pariatur";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "voluptatem";
                uploadProtocol = "alias";
            }};            

            SecuritycenterProjectsMuteConfigsListResponse res = sdk.projects.securitycenterProjectsMuteConfigsList(req, new SecuritycenterProjectsMuteConfigsListSecurity("deleniti", "earum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listMuteConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsNotificationConfigsCreate

Creates a notification config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsNotificationConfigsCreateRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsNotificationConfigsCreateResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsNotificationConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NotificationConfigInput;
import org.openapis.openapi.models.shared.StreamingConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsNotificationConfigsCreateRequest req = new SecuritycenterProjectsNotificationConfigsCreateRequest("ex") {{
                dollarXgafv = XgafvEnum.TWO;
                notificationConfigInput = new NotificationConfigInput() {{
                    description = "rem";
                    name = "Herman Zemlak";
                    pubsubTopic = "perferendis";
                    streamingConfig = new StreamingConfig() {{
                        filter = "illum";
                    }};;
                }};;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                configId = "nam";
                fields = "ipsam";
                key = "culpa";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "inventore";
                uploadProtocol = "deleniti";
            }};            

            SecuritycenterProjectsNotificationConfigsCreateResponse res = sdk.projects.securitycenterProjectsNotificationConfigsCreate(req, new SecuritycenterProjectsNotificationConfigsCreateSecurity("veritatis", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.notificationConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsNotificationConfigsList

Lists notification configs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsNotificationConfigsListRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsNotificationConfigsListResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsNotificationConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsNotificationConfigsListRequest req = new SecuritycenterProjectsNotificationConfigsListRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "fugit";
                key = "ab";
                oauthToken = "laudantium";
                pageSize = 65604L;
                pageToken = "dolor";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "ipsam";
                uploadProtocol = "consequuntur";
            }};            

            SecuritycenterProjectsNotificationConfigsListResponse res = sdk.projects.securitycenterProjectsNotificationConfigsList(req, new SecuritycenterProjectsNotificationConfigsListSecurity("ipsa", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNotificationConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreate

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1CustomConfig;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1CustomConfigSeverityEnum;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1CustomOutputSpec;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1Property;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1ResourceSelector;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleEnablementStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateRequest req = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateRequest("eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput = new GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput() {{
                    customConfig = new GoogleCloudSecuritycenterV1CustomConfig() {{
                        customOutput = new GoogleCloudSecuritycenterV1CustomOutputSpec() {{
                            properties = new org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1Property[]{{
                                add(new GoogleCloudSecuritycenterV1Property() {{
                                    name = "Jana Cremin";
                                    valueExpression = new Expr() {{
                                        description = "expedita";
                                        expression = "eum";
                                        location = "vel";
                                        title = "Ms.";
                                    }};
                                }}),
                                add(new GoogleCloudSecuritycenterV1Property() {{
                                    name = "Annette Bernier";
                                    valueExpression = new Expr() {{
                                        description = "nobis";
                                        expression = "laboriosam";
                                        location = "recusandae";
                                        title = "Mr.";
                                    }};
                                }}),
                                add(new GoogleCloudSecuritycenterV1Property() {{
                                    name = "Mrs. June Tremblay";
                                    valueExpression = new Expr() {{
                                        description = "vero";
                                        expression = "est";
                                        location = "harum";
                                        title = "Mr.";
                                    }};
                                }}),
                                add(new GoogleCloudSecuritycenterV1Property() {{
                                    name = "Phil Rowe";
                                    valueExpression = new Expr() {{
                                        description = "voluptate";
                                        expression = "blanditiis";
                                        location = "officia";
                                        title = "Mrs.";
                                    }};
                                }}),
                            }};
                        }};;
                        description = "numquam";
                        predicate = new Expr() {{
                            description = "nemo";
                            expression = "quos";
                            location = "eius";
                            title = "Mr.";
                        }};;
                        recommendation = "ducimus";
                        resourceSelector = new GoogleCloudSecuritycenterV1ResourceSelector() {{
                            resourceTypes = new String[]{{
                                add("fuga"),
                            }};
                        }};;
                        severity = GoogleCloudSecuritycenterV1CustomConfigSeverityEnum.HIGH;
                    }};;
                    displayName = "incidunt";
                    enablementState = GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleEnablementStateEnum.ENABLEMENT_STATE_UNSPECIFIED;
                    name = "Clint Carroll";
                }};;
                accessToken = "consectetur";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "reiciendis";
                key = "soluta";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "eos";
                uploadProtocol = "occaecati";
            }};            

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateResponse res = sdk.projects.securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreate(req, new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateSecurity("iste", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDelete

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteRequest req = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteRequest("inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "omnis";
                key = "delectus";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "maxime";
                uploadProtocol = "magnam";
            }};            

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteResponse res = sdk.projects.securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDelete(req, new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteSecurity("temporibus", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesList

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListRequest req = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListRequest("commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "modi";
                key = "nam";
                oauthToken = "vero";
                pageSize = 32901L;
                pageToken = "ipsam";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "alias";
                uploadProtocol = "quasi";
            }};            

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListResponse res = sdk.projects.securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesList(req, new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListSecurity("non", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSecurityHealthAnalyticsCustomModulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendant

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantRequest req = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "nemo";
                key = "reprehenderit";
                oauthToken = "est";
                pageSize = 336102L;
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "impedit";
                uploadProtocol = "hic";
            }};            

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantResponse res = sdk.projects.securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendant(req, new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantSecurity("necessitatibus", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDescendantSecurityHealthAnalyticsCustomModulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGet

Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetRequest req = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetRequest("ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "minus";
                filter = "fuga";
                key = "laborum";
                oauthToken = "consectetur";
                pageSize = 244889L;
                pageToken = "atque";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "impedit";
                uploadProtocol = "magni";
            }};            

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetResponse res = sdk.projects.securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGet(req, new SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetSecurity("soluta", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesList

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListRequest req = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "sequi";
                fields = "dignissimos";
                key = "neque";
                oauthToken = "quo";
                pageSize = 535468L;
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odit";
                uploadProtocol = "voluptatibus";
            }};            

            SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListResponse res = sdk.projects.securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesList(req, new SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListSecurity("vel", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEffectiveSecurityHealthAnalyticsCustomModulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSourcesFindingsExternalSystemsPatch

Updates external system. This is for a given finding.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1ExternalSystem;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest req = new SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudSecuritycenterV1ExternalSystem = new GoogleCloudSecuritycenterV1ExternalSystem() {{
                    assignees = new String[]{{
                        add("libero"),
                        add("architecto"),
                        add("voluptatibus"),
                        add("quia"),
                    }};
                    externalSystemUpdateTime = "porro";
                    externalUid = "aliquam";
                    name = "Martha Bashirian";
                    status = "beatae";
                }};;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "velit";
                key = "ut";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "earum";
                updateMask = "dicta";
                uploadType = "impedit";
                uploadProtocol = "voluptatibus";
            }};            

            SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse res = sdk.projects.securitycenterProjectsSourcesFindingsExternalSystemsPatch(req, new SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity("iste", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudSecuritycenterV1ExternalSystem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSourcesFindingsGroup

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsGroupRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsGroupResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsGroupSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GroupFindingsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSourcesFindingsGroupRequest req = new SecuritycenterProjectsSourcesFindingsGroupRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                groupFindingsRequest = new GroupFindingsRequest() {{
                    compareDuration = "itaque";
                    filter = "velit";
                    groupBy = "laborum";
                    pageSize = 250398;
                    pageToken = "dolor";
                    readTime = "iusto";
                }};;
                accessToken = "sit";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "officia";
                key = "recusandae";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "voluptas";
                uploadProtocol = "facilis";
            }};            

            SecuritycenterProjectsSourcesFindingsGroupResponse res = sdk.projects.securitycenterProjectsSourcesFindingsGroup(req, new SecuritycenterProjectsSourcesFindingsGroupSecurity("placeat", "perspiciatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSourcesFindingsList

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsListRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsListResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSourcesFindingsListRequest req = new SecuritycenterProjectsSourcesFindingsListRequest("expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "a";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                compareDuration = "unde";
                fieldMask = "necessitatibus";
                fields = "animi";
                filter = "impedit";
                key = "ipsam";
                oauthToken = "corporis";
                orderBy = "est";
                pageSize = 621666L;
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "labore";
                readTime = "veritatis";
                uploadType = "vero";
                uploadProtocol = "consectetur";
            }};            

            SecuritycenterProjectsSourcesFindingsListResponse res = sdk.projects.securitycenterProjectsSourcesFindingsList(req, new SecuritycenterProjectsSourcesFindingsListSecurity("vitae", "inventore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSourcesFindingsSetMute

Updates the mute state of a finding.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsSetMuteRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsSetMuteResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsSetMuteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetMuteRequest;
import org.openapis.openapi.models.shared.SetMuteRequestMuteEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSourcesFindingsSetMuteRequest req = new SecuritycenterProjectsSourcesFindingsSetMuteRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                setMuteRequest = new SetMuteRequest() {{
                    mute = SetMuteRequestMuteEnum.MUTE_UNSPECIFIED;
                }};;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "soluta";
                key = "libero";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "odio";
                uploadProtocol = "fugit";
            }};            

            SecuritycenterProjectsSourcesFindingsSetMuteResponse res = sdk.projects.securitycenterProjectsSourcesFindingsSetMute(req, new SecuritycenterProjectsSourcesFindingsSetMuteSecurity("alias", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.finding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSourcesFindingsSetState

Updates the state of a finding.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsSetStateRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsSetStateResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesFindingsSetStateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetFindingStateRequest;
import org.openapis.openapi.models.shared.SetFindingStateRequestStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSourcesFindingsSetStateRequest req = new SecuritycenterProjectsSourcesFindingsSetStateRequest("vel") {{
                dollarXgafv = XgafvEnum.ONE;
                setFindingStateRequest = new SetFindingStateRequest() {{
                    startTime = "quae";
                    state = SetFindingStateRequestStateEnum.STATE_UNSPECIFIED;
                }};;
                accessToken = "neque";
                alt = AltEnum.MEDIA;
                callback = "itaque";
                fields = "et";
                key = "ipsum";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "distinctio";
                uploadProtocol = "maxime";
            }};            

            SecuritycenterProjectsSourcesFindingsSetStateResponse res = sdk.projects.securitycenterProjectsSourcesFindingsSetState(req, new SecuritycenterProjectsSourcesFindingsSetStateSecurity("quia", "quia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.finding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsSourcesList

Lists all sources belonging to an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesListRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesListResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsSourcesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsSourcesListRequest req = new SecuritycenterProjectsSourcesListRequest("nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "libero";
                key = "fugiat";
                oauthToken = "officia";
                pageSize = 554603L;
                pageToken = "placeat";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "iusto";
                uploadProtocol = "ipsa";
            }};            

            SecuritycenterProjectsSourcesListResponse res = sdk.projects.securitycenterProjectsSourcesList(req, new SecuritycenterProjectsSourcesListSecurity("voluptates", "inventore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
