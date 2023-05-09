# Organizations

### Available Operations

* [CloudresourcemanagerOrganizationsGet](#cloudresourcemanagerorganizationsget) - Fetches an Organization resource identified by the specified resource name.
* [CloudresourcemanagerOrganizationsGetIamPolicy](#cloudresourcemanagerorganizationsgetiampolicy) - Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization
* [CloudresourcemanagerOrganizationsSearch](#cloudresourcemanagerorganizationssearch) - Searches Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the results. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`
* [CloudresourcemanagerOrganizationsSetIamPolicy](#cloudresourcemanagerorganizationssetiampolicy) - Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization
* [CloudresourcemanagerOrganizationsTestIamPermissions](#cloudresourcemanagerorganizationstestiampermissions) - Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123". There are no permissions required for making this API call.

## CloudresourcemanagerOrganizationsGet

Fetches an Organization resource identified by the specified resource name.

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
    res, err := s.Organizations.CloudresourcemanagerOrganizationsGet(ctx, operations.CloudresourcemanagerOrganizationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("iste"),
        Key: sdk.String("iure"),
        Name: "Dr. Rickey Boyle",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.CloudresourcemanagerOrganizationsGetSecurity{
        Option1: &operations.CloudresourcemanagerOrganizationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```

## CloudresourcemanagerOrganizationsGetIamPolicy

Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization

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
    res, err := s.Organizations.CloudresourcemanagerOrganizationsGetIamPolicy(ctx, operations.CloudresourcemanagerOrganizationsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(128926),
            },
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        Resource: "iure",
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.CloudresourcemanagerOrganizationsGetIamPolicySecurity{
        Option1: &operations.CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudresourcemanagerOrganizationsSearch

Searches Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the results. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`

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
    res, err := s.Organizations.CloudresourcemanagerOrganizationsSearch(ctx, operations.CloudresourcemanagerOrganizationsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SearchOrganizationsRequest: &shared.SearchOrganizationsRequest{
            Filter: sdk.String("architecto"),
            PageSize: sdk.Int(652790),
            PageToken: sdk.String("dolorem"),
        },
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.CloudresourcemanagerOrganizationsSearchSecurity{
        Option1: &operations.CloudresourcemanagerOrganizationsSearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchOrganizationsResponse != nil {
        // handle response
    }
}
```

## CloudresourcemanagerOrganizationsSetIamPolicy

Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization

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
    res, err := s.Organizations.CloudresourcemanagerOrganizationsSetIamPolicy(ctx, operations.CloudresourcemanagerOrganizationsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "vitae",
                                    "laborum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("enim"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sequi",
                                    "tenetur",
                                    "ipsam",
                                    "id",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("aut"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "temporibus",
                                    "laborum",
                                    "quasi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("voluptatibus"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("nihil"),
                            Expression: sdk.String("praesentium"),
                            Location: sdk.String("voluptatibus"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "voluptate",
                            "cum",
                            "perferendis",
                        },
                        Role: sdk.String("doloremque"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("reprehenderit"),
                            Expression: sdk.String("ut"),
                            Location: sdk.String("maiores"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "dolore",
                            "iusto",
                        },
                        Role: sdk.String("dicta"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("harum"),
                            Expression: sdk.String("enim"),
                            Location: sdk.String("accusamus"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "quae",
                            "ipsum",
                            "quidem",
                            "molestias",
                        },
                        Role: sdk.String("excepturi"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("pariatur"),
                            Expression: sdk.String("modi"),
                            Location: sdk.String("praesentium"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "quasi",
                            "repudiandae",
                            "sint",
                            "veritatis",
                        },
                        Role: sdk.String("itaque"),
                    },
                },
                Etag: sdk.String("incidunt"),
                Version: sdk.Int(318569),
            },
            UpdateMask: sdk.String("consequatur"),
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        Resource: "modi",
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.CloudresourcemanagerOrganizationsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudresourcemanagerOrganizationsTestIamPermissions

Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123". There are no permissions required for making this API call.

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
    res, err := s.Organizations.CloudresourcemanagerOrganizationsTestIamPermissions(ctx, operations.CloudresourcemanagerOrganizationsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "perferendis",
                "magni",
                "assumenda",
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        Resource: "tempore",
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.CloudresourcemanagerOrganizationsTestIamPermissionsSecurity{
        Option1: &operations.CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
