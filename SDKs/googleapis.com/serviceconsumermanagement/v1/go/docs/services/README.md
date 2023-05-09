# Services

### Available Operations

* [ServiceconsumermanagementServicesSearch](#serviceconsumermanagementservicessearch) - Search tenancy units for a managed service.
* [ServiceconsumermanagementServicesTenancyUnitsAddProject](#serviceconsumermanagementservicestenancyunitsaddproject) - Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.
* [ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfig](#serviceconsumermanagementservicestenancyunitsapplyprojectconfig) - Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation.
* [ServiceconsumermanagementServicesTenancyUnitsAttachProject](#serviceconsumermanagementservicestenancyunitsattachproject) - Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.
* [ServiceconsumermanagementServicesTenancyUnitsCreate](#serviceconsumermanagementservicestenancyunitscreate) - Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.
* [ServiceconsumermanagementServicesTenancyUnitsDelete](#serviceconsumermanagementservicestenancyunitsdelete) - Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation.
* [ServiceconsumermanagementServicesTenancyUnitsDeleteProject](#serviceconsumermanagementservicestenancyunitsdeleteproject) - Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.
* [ServiceconsumermanagementServicesTenancyUnitsList](#serviceconsumermanagementservicestenancyunitslist) - Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.
* [ServiceconsumermanagementServicesTenancyUnitsRemoveProject](#serviceconsumermanagementservicestenancyunitsremoveproject) - Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.
* [ServiceconsumermanagementServicesTenancyUnitsUndeleteProject](#serviceconsumermanagementservicestenancyunitsundeleteproject) - Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.

## ServiceconsumermanagementServicesSearch

Search tenancy units for a managed service.

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
    res, err := s.Services.ServiceconsumermanagementServicesSearch(ctx, operations.ServiceconsumermanagementServicesSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("excepturi"),
        PageSize: sdk.Int64(135218),
        PageToken: sdk.String("perferendis"),
        Parent: "ad",
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("natus"),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.ServiceconsumermanagementServicesSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchTenancyUnitsResponse != nil {
        // handle response
    }
}
```

## ServiceconsumermanagementServicesTenancyUnitsAddProject

Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.

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
    res, err := s.Services.ServiceconsumermanagementServicesTenancyUnitsAddProject(ctx, operations.ServiceconsumermanagementServicesTenancyUnitsAddProjectRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddTenantProjectRequest: &shared.AddTenantProjectRequest{
            ProjectConfig: &shared.TenantProjectConfig{
                BillingConfig: &shared.BillingConfig{
                    BillingAccount: sdk.String("laboriosam"),
                },
                Folder: sdk.String("hic"),
                Labels: map[string]string{
                    "fuga": "in",
                    "corporis": "iste",
                    "iure": "saepe",
                    "quidem": "architecto",
                },
                ServiceAccountConfig: &shared.ServiceAccountConfig{
                    AccountID: sdk.String("ipsa"),
                    TenantProjectRoles: []string{
                        "est",
                        "mollitia",
                        "laborum",
                        "dolores",
                    },
                },
                Services: []string{
                    "corporis",
                },
                TenantProjectPolicy: &shared.TenantProjectPolicy{
                    PolicyBindings: []shared.PolicyBinding{
                        shared.PolicyBinding{
                            Members: []string{
                                "enim",
                                "omnis",
                                "nemo",
                                "minima",
                            },
                            Role: sdk.String("excepturi"),
                        },
                    },
                },
            },
            Tag: sdk.String("accusantium"),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("mollitia"),
        Parent: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.ServiceconsumermanagementServicesTenancyUnitsAddProjectSecurity{
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

## ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfig

Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation.

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
    res, err := s.Services.ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfig(ctx, operations.ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApplyTenantProjectConfigRequest: &shared.ApplyTenantProjectConfigRequest{
            ProjectConfig: &shared.TenantProjectConfig{
                BillingConfig: &shared.BillingConfig{
                    BillingAccount: sdk.String("occaecati"),
                },
                Folder: sdk.String("numquam"),
                Labels: map[string]string{
                    "quam": "molestiae",
                    "velit": "error",
                },
                ServiceAccountConfig: &shared.ServiceAccountConfig{
                    AccountID: sdk.String("quia"),
                    TenantProjectRoles: []string{
                        "vitae",
                        "laborum",
                    },
                },
                Services: []string{
                    "enim",
                    "odit",
                    "quo",
                },
                TenantProjectPolicy: &shared.TenantProjectPolicy{
                    PolicyBindings: []shared.PolicyBinding{
                        shared.PolicyBinding{
                            Members: []string{
                                "ipsam",
                                "id",
                                "possimus",
                                "aut",
                            },
                            Role: sdk.String("quasi"),
                        },
                    },
                },
            },
            Tag: sdk.String("error"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("voluptatibus"),
        Name: "Jessie Langosh V",
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigSecurity{
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

## ServiceconsumermanagementServicesTenancyUnitsAttachProject

Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.

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
    res, err := s.Services.ServiceconsumermanagementServicesTenancyUnitsAttachProject(ctx, operations.ServiceconsumermanagementServicesTenancyUnitsAttachProjectRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AttachTenantProjectRequest: &shared.AttachTenantProjectRequest{
            ExternalResource: sdk.String("ut"),
            ReservedResource: sdk.String("maiores"),
            Tag: sdk.String("dicta"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("harum"),
        Name: "Sophia Jerde I",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.ServiceconsumermanagementServicesTenancyUnitsAttachProjectSecurity{
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

## ServiceconsumermanagementServicesTenancyUnitsCreate

Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.

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
    res, err := s.Services.ServiceconsumermanagementServicesTenancyUnitsCreate(ctx, operations.ServiceconsumermanagementServicesTenancyUnitsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateTenancyUnitRequest: &shared.CreateTenancyUnitRequest{
            TenancyUnitID: sdk.String("praesentium"),
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("veritatis"),
        Parent: "itaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.ServiceconsumermanagementServicesTenancyUnitsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TenancyUnit != nil {
        // handle response
    }
}
```

## ServiceconsumermanagementServicesTenancyUnitsDelete

Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation.

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
    res, err := s.Services.ServiceconsumermanagementServicesTenancyUnitsDelete(ctx, operations.ServiceconsumermanagementServicesTenancyUnitsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        Name: "Pauline Deckow",
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("assumenda"),
    }, operations.ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity{
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

## ServiceconsumermanagementServicesTenancyUnitsDeleteProject

Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.

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
    res, err := s.Services.ServiceconsumermanagementServicesTenancyUnitsDeleteProject(ctx, operations.ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DeleteTenantProjectRequest: &shared.DeleteTenantProjectRequest{
            Tag: sdk.String("alias"),
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("facilis"),
        Name: "Francisco Windler",
        OauthToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("provident"),
    }, operations.ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity{
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

## ServiceconsumermanagementServicesTenancyUnitsList

Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.

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
    res, err := s.Services.ServiceconsumermanagementServicesTenancyUnitsList(ctx, operations.ServiceconsumermanagementServicesTenancyUnitsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("debitis"),
        Filter: sdk.String("a"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("in"),
        PageSize: sdk.Int64(449198),
        PageToken: sdk.String("illum"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.ServiceconsumermanagementServicesTenancyUnitsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTenancyUnitsResponse != nil {
        // handle response
    }
}
```

## ServiceconsumermanagementServicesTenancyUnitsRemoveProject

Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.

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
    res, err := s.Services.ServiceconsumermanagementServicesTenancyUnitsRemoveProject(ctx, operations.ServiceconsumermanagementServicesTenancyUnitsRemoveProjectRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemoveTenantProjectRequest: &shared.RemoveTenantProjectRequest{
            Tag: sdk.String("facere"),
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("non"),
        Name: "Jon Tillman",
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.ServiceconsumermanagementServicesTenancyUnitsRemoveProjectSecurity{
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

## ServiceconsumermanagementServicesTenancyUnitsUndeleteProject

Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.

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
    res, err := s.Services.ServiceconsumermanagementServicesTenancyUnitsUndeleteProject(ctx, operations.ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UndeleteTenantProjectRequest: &shared.UndeleteTenantProjectRequest{
            Tag: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("vel"),
        Key: sdk.String("natus"),
        Name: "Fernando Aufderhar",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("labore"),
    }, operations.ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectSecurity{
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
