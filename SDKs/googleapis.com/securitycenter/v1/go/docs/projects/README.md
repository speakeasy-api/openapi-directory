# Projects

### Available Operations

* [SecuritycenterProjectsAssetsGroup](#securitycenterprojectsassetsgroup) - Filters an organization's assets and groups them by their specified properties.
* [SecuritycenterProjectsAssetsList](#securitycenterprojectsassetslist) - Lists an organization's assets.
* [SecuritycenterProjectsBigQueryExportsCreate](#securitycenterprojectsbigqueryexportscreate) - Creates a BigQuery export.
* [SecuritycenterProjectsBigQueryExportsList](#securitycenterprojectsbigqueryexportslist) - Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
* [SecuritycenterProjectsFindingsBulkMute](#securitycenterprojectsfindingsbulkmute) - Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
* [SecuritycenterProjectsMuteConfigsCreate](#securitycenterprojectsmuteconfigscreate) - Creates a mute config.
* [SecuritycenterProjectsMuteConfigsList](#securitycenterprojectsmuteconfigslist) - Lists mute configs.
* [SecuritycenterProjectsNotificationConfigsCreate](#securitycenterprojectsnotificationconfigscreate) - Creates a notification config.
* [SecuritycenterProjectsNotificationConfigsList](#securitycenterprojectsnotificationconfigslist) - Lists notification configs.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreate](#securitycenterprojectssecurityhealthanalyticssettingscustommodulescreate) - Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDelete](#securitycenterprojectssecurityhealthanalyticssettingscustommodulesdelete) - Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesList](#securitycenterprojectssecurityhealthanalyticssettingscustommoduleslist) - Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendant](#securitycenterprojectssecurityhealthanalyticssettingscustommoduleslistdescendant) - Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGet](#securitycenterprojectssecurityhealthanalyticssettingseffectivecustommodulesget) - Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
* [SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesList](#securitycenterprojectssecurityhealthanalyticssettingseffectivecustommoduleslist) - Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
* [SecuritycenterProjectsSourcesFindingsExternalSystemsPatch](#securitycenterprojectssourcesfindingsexternalsystemspatch) - Updates external system. This is for a given finding.
* [SecuritycenterProjectsSourcesFindingsGroup](#securitycenterprojectssourcesfindingsgroup) - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
* [SecuritycenterProjectsSourcesFindingsList](#securitycenterprojectssourcesfindingslist) - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
* [SecuritycenterProjectsSourcesFindingsSetMute](#securitycenterprojectssourcesfindingssetmute) - Updates the mute state of a finding.
* [SecuritycenterProjectsSourcesFindingsSetState](#securitycenterprojectssourcesfindingssetstate) - Updates the state of a finding.
* [SecuritycenterProjectsSourcesList](#securitycenterprojectssourceslist) - Lists all sources belonging to an organization.

## SecuritycenterProjectsAssetsGroup

Filters an organization's assets and groups them by their specified properties.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsAssetsGroup(ctx, operations.SecuritycenterProjectsAssetsGroupRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GroupAssetsRequest: &shared.GroupAssetsRequest{
            CompareDuration: sdk.String("beatae"),
            Filter: sdk.String("dolores"),
            GroupBy: sdk.String("enim"),
            PageSize: sdk.Int(389135),
            PageToken: sdk.String("velit"),
            ReadTime: sdk.String("a"),
        },
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("officiis"),
        Parent: "perspiciatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("eveniet"),
    }, operations.SecuritycenterProjectsAssetsGroupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupAssetsResponse != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsAssetsList

Lists an organization's assets.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsAssetsList(ctx, operations.SecuritycenterProjectsAssetsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("id"),
        CompareDuration: sdk.String("quis"),
        FieldMask: sdk.String("reprehenderit"),
        Fields: sdk.String("error"),
        Filter: sdk.String("illo"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("quidem"),
        OrderBy: sdk.String("eveniet"),
        PageSize: sdk.Int64(247399),
        PageToken: sdk.String("vero"),
        Parent: "doloremque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        ReadTime: sdk.String("ipsa"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("quae"),
    }, operations.SecuritycenterProjectsAssetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetsResponse != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsBigQueryExportsCreate

Creates a BigQuery export.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsBigQueryExportsCreate(ctx, operations.SecuritycenterProjectsBigQueryExportsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudSecuritycenterV1BigQueryExportInput: &shared.GoogleCloudSecuritycenterV1BigQueryExportInput{
            Dataset: sdk.String("eveniet"),
            Description: sdk.String("qui"),
            Filter: sdk.String("cum"),
            Name: sdk.String("Kelley Dibbert"),
        },
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BigQueryExportID: sdk.String("aliquam"),
        Callback: sdk.String("ad"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("corporis"),
        Parent: "perspiciatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.SecuritycenterProjectsBigQueryExportsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudSecuritycenterV1BigQueryExport != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsBigQueryExportsList

Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsBigQueryExportsList(ctx, operations.SecuritycenterProjectsBigQueryExportsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("id"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("dolore"),
        PageSize: sdk.Int64(680349),
        PageToken: sdk.String("nesciunt"),
        Parent: "quae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.SecuritycenterProjectsBigQueryExportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBigQueryExportsResponse != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsFindingsBulkMute

Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsFindingsBulkMute(ctx, operations.SecuritycenterProjectsFindingsBulkMuteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BulkMuteFindingsRequest: &shared.BulkMuteFindingsRequest{
            Filter: sdk.String("ex"),
            MuteAnnotation: sdk.String("ut"),
        },
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("nemo"),
        Parent: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("quis"),
    }, operations.SecuritycenterProjectsFindingsBulkMuteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsMuteConfigsCreate

Creates a mute config.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsMuteConfigsCreate(ctx, operations.SecuritycenterProjectsMuteConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudSecuritycenterV1MuteConfigInput: &shared.GoogleCloudSecuritycenterV1MuteConfigInput{
            Description: sdk.String("reiciendis"),
            DisplayName: sdk.String("provident"),
            Filter: sdk.String("aspernatur"),
            Name: sdk.String("Joyce O'Kon"),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("animi"),
        Fields: sdk.String("ex"),
        Key: sdk.String("aliquid"),
        MuteConfigID: sdk.String("accusantium"),
        OauthToken: sdk.String("repellat"),
        Parent: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("nam"),
    }, operations.SecuritycenterProjectsMuteConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudSecuritycenterV1MuteConfig != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsMuteConfigsList

Lists mute configs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsMuteConfigsList(ctx, operations.SecuritycenterProjectsMuteConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("modi"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("molestias"),
        PageSize: sdk.Int64(889794),
        PageToken: sdk.String("sapiente"),
        Parent: "cumque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.SecuritycenterProjectsMuteConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMuteConfigsResponse != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsNotificationConfigsCreate

Creates a notification config.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsNotificationConfigsCreate(ctx, operations.SecuritycenterProjectsNotificationConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        NotificationConfigInput: &shared.NotificationConfigInput{
            Description: sdk.String("inventore"),
            Name: sdk.String("Mrs. Erma Berge"),
            PubsubTopic: sdk.String("eum"),
            StreamingConfig: &shared.StreamingConfig{
                Filter: sdk.String("eius"),
            },
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("impedit"),
        ConfigID: sdk.String("eos"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("dicta"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("provident"),
    }, operations.SecuritycenterProjectsNotificationConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationConfig != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsNotificationConfigsList

Lists notification configs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsNotificationConfigsList(ctx, operations.SecuritycenterProjectsNotificationConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("perspiciatis"),
        PageSize: sdk.Int64(983427),
        PageToken: sdk.String("debitis"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.SecuritycenterProjectsNotificationConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotificationConfigsResponse != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreate

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreate(ctx, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput: &shared.GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput{
            CustomConfig: &shared.GoogleCloudSecuritycenterV1CustomConfig{
                CustomOutput: &shared.GoogleCloudSecuritycenterV1CustomOutputSpec{
                    Properties: []shared.GoogleCloudSecuritycenterV1Property{
                        shared.GoogleCloudSecuritycenterV1Property{
                            Name: sdk.String("Philip O'Kon"),
                            ValueExpression: &shared.Expr{
                                Description: sdk.String("consequatur"),
                                Expression: sdk.String("quasi"),
                                Location: sdk.String("et"),
                                Title: sdk.String("Ms."),
                            },
                        },
                        shared.GoogleCloudSecuritycenterV1Property{
                            Name: sdk.String("Tracy Homenick Sr."),
                            ValueExpression: &shared.Expr{
                                Description: sdk.String("doloribus"),
                                Expression: sdk.String("nulla"),
                                Location: sdk.String("necessitatibus"),
                                Title: sdk.String("Mr."),
                            },
                        },
                        shared.GoogleCloudSecuritycenterV1Property{
                            Name: sdk.String("Ms. Marcia Kozey"),
                            ValueExpression: &shared.Expr{
                                Description: sdk.String("praesentium"),
                                Expression: sdk.String("maiores"),
                                Location: sdk.String("reiciendis"),
                                Title: sdk.String("Ms."),
                            },
                        },
                        shared.GoogleCloudSecuritycenterV1Property{
                            Name: sdk.String("Ms. Janis Batz"),
                            ValueExpression: &shared.Expr{
                                Description: sdk.String("esse"),
                                Expression: sdk.String("ex"),
                                Location: sdk.String("consectetur"),
                                Title: sdk.String("Mrs."),
                            },
                        },
                    },
                },
                Description: sdk.String("ipsa"),
                Predicate: &shared.Expr{
                    Description: sdk.String("laborum"),
                    Expression: sdk.String("sunt"),
                    Location: sdk.String("nostrum"),
                    Title: sdk.String("Dr."),
                },
                Recommendation: sdk.String("expedita"),
                ResourceSelector: &shared.GoogleCloudSecuritycenterV1ResourceSelector{
                    ResourceTypes: []string{
                        "officia",
                        "suscipit",
                    },
                },
                Severity: shared.GoogleCloudSecuritycenterV1CustomConfigSeverityEnumCritical.ToPointer(),
            },
            DisplayName: sdk.String("perferendis"),
            EnablementState: shared.GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleEnablementStateEnumEnabled.ToPointer(),
            Name: sdk.String("Miss Cora Olson"),
        },
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("libero"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("deleniti"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("ex"),
    }, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDelete

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDelete(ctx, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("voluptatem"),
        Name: "Ms. Jonathon Jacobs",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesList

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesList(ctx, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("debitis"),
        PageSize: sdk.Int64(29190),
        PageToken: sdk.String("alias"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSecurityHealthAnalyticsCustomModulesResponse != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendant

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendant(ctx, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("ratione"),
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(848341),
        PageToken: sdk.String("totam"),
        Parent: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDescendantSecurityHealthAnalyticsCustomModulesResponse != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGet

Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGet(ctx, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("deleniti"),
        Filter: sdk.String("veritatis"),
        Key: sdk.String("tempora"),
        Name: "Mrs. Elizabeth Bradtke",
        OauthToken: sdk.String("ab"),
        PageSize: sdk.Int64(513760),
        PageToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesList

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesList(ctx, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("esse"),
        PageSize: sdk.Int64(897277),
        PageToken: sdk.String("sed"),
        Parent: "veniam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nesciunt"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("eum"),
    }, operations.SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSourcesFindingsExternalSystemsPatch

Updates external system. This is for a given finding.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSourcesFindingsExternalSystemsPatch(ctx, operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudSecuritycenterV1ExternalSystem: &shared.GoogleCloudSecuritycenterV1ExternalSystem{
            Assignees: []string{
                "magnam",
                "exercitationem",
                "ab",
            },
            ExternalSystemUpdateTime: sdk.String("porro"),
            ExternalUID: sdk.String("autem"),
            Name: sdk.String("Brent Walter II"),
            Status: sdk.String("necessitatibus"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("vero"),
        Key: sdk.String("est"),
        Name: "Johnny Yundt",
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UpdateMask: sdk.String("voluptate"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("officia"),
    }, operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudSecuritycenterV1ExternalSystem != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSourcesFindingsGroup

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSourcesFindingsGroup(ctx, operations.SecuritycenterProjectsSourcesFindingsGroupRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GroupFindingsRequest: &shared.GroupFindingsRequest{
            CompareDuration: sdk.String("numquam"),
            Filter: sdk.String("nemo"),
            GroupBy: sdk.String("quos"),
            PageSize: sdk.Int(260904),
            PageToken: sdk.String("aspernatur"),
            ReadTime: sdk.String("ducimus"),
        },
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("rem"),
        Parent: "fugiat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.SecuritycenterProjectsSourcesFindingsGroupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupFindingsResponse != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSourcesFindingsList

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSourcesFindingsList(ctx, operations.SecuritycenterProjectsSourcesFindingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        CompareDuration: sdk.String("soluta"),
        FieldMask: sdk.String("alias"),
        Fields: sdk.String("omnis"),
        Filter: sdk.String("eos"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("iste"),
        OrderBy: sdk.String("magni"),
        PageSize: sdk.Int64(81369),
        PageToken: sdk.String("fuga"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        ReadTime: sdk.String("distinctio"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.SecuritycenterProjectsSourcesFindingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFindingsResponse != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSourcesFindingsSetMute

Updates the mute state of a finding.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSourcesFindingsSetMute(ctx, operations.SecuritycenterProjectsSourcesFindingsSetMuteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetMuteRequest: &shared.SetMuteRequest{
            Mute: shared.SetMuteRequestMuteEnumUnmuted.ToPointer(),
        },
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("quos"),
        Key: sdk.String("commodi"),
        Name: "Leslie Lebsack",
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.SecuritycenterProjectsSourcesFindingsSetMuteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Finding != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSourcesFindingsSetState

Updates the state of a finding.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSourcesFindingsSetState(ctx, operations.SecuritycenterProjectsSourcesFindingsSetStateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetFindingStateRequest: &shared.SetFindingStateRequest{
            StartTime: sdk.String("alias"),
            State: shared.SetFindingStateRequestStateEnumStateUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("sint"),
        Key: sdk.String("nulla"),
        Name: "Claude Hickle",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.SecuritycenterProjectsSourcesFindingsSetStateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Finding != nil {
        // handle response
    }
}
```

## SecuritycenterProjectsSourcesList

Lists all sources belonging to an organization.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.SecuritycenterProjectsSourcesList(ctx, operations.SecuritycenterProjectsSourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("delectus"),
        PageSize: sdk.Int64(65082),
        PageToken: sdk.String("minus"),
        Parent: "fuga",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("velit"),
    }, operations.SecuritycenterProjectsSourcesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSourcesResponse != nil {
        // handle response
    }
}
```
