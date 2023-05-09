# Organizations

### Available Operations

* [CloudresourcemanagerOrganizationsGet](#cloudresourcemanagerorganizationsget) - Fetches an Organization resource identified by the specified resource name.
* [CloudresourcemanagerOrganizationsGetIamPolicy](#cloudresourcemanagerorganizationsgetiampolicy) - Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* [CloudresourcemanagerOrganizationsList](#cloudresourcemanagerorganizationslist) - Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.
* [CloudresourcemanagerOrganizationsSetIamPolicy](#cloudresourcemanagerorganizationssetiampolicy) - Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* [CloudresourcemanagerOrganizationsTestIamPermissions](#cloudresourcemanagerorganizationstestiampermissions) - Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* [CloudresourcemanagerOrganizationsUpdate](#cloudresourcemanagerorganizationsupdate) - Updates an Organization resource identified by the specified resource name.

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
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        Name: "Ted Mante",
        OauthToken: sdk.String("temporibus"),
        OrganizationID: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("deserunt"),
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

Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".

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
                RequestedPolicyVersion: sdk.Int(368241),
            },
        },
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("odit"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        Resource: "molestiae",
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
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

## CloudresourcemanagerOrganizationsList

Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.

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
    res, err := s.Organizations.CloudresourcemanagerOrganizationsList(ctx, operations.CloudresourcemanagerOrganizationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("dicta"),
        Filter: sdk.String("nam"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(143353),
        PageToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
    }, operations.CloudresourcemanagerOrganizationsListSecurity{
        Option1: &operations.CloudresourcemanagerOrganizationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOrganizationsResponse != nil {
        // handle response
    }
}
```

## CloudresourcemanagerOrganizationsSetIamPolicy

Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".

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
                                    "qui",
                                    "impedit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ipsum",
                                    "excepturi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("perferendis"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sed",
                                    "iste",
                                    "dolor",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "hic",
                                    "saepe",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("in"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("iste"),
                            Expression: sdk.String("iure"),
                            Location: sdk.String("saepe"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "ipsa",
                        },
                        Role: sdk.String("reiciendis"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("est"),
                            Expression: sdk.String("mollitia"),
                            Location: sdk.String("laborum"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "corporis",
                        },
                        Role: sdk.String("explicabo"),
                    },
                },
                Etag: sdk.String("nobis"),
                Version: sdk.Int(315428),
            },
            UpdateMask: sdk.String("omnis"),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        Resource: "sapiente",
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
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

Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "consequuntur",
                "repellat",
                "mollitia",
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("quam"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        Resource: "quia",
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("vitae"),
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

## CloudresourcemanagerOrganizationsUpdate

Updates an Organization resource identified by the specified resource name.

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
    res, err := s.Organizations.CloudresourcemanagerOrganizationsUpdate(ctx, operations.CloudresourcemanagerOrganizationsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Organization: &shared.Organization{
            CreationTime: sdk.String("animi"),
            DisplayName: sdk.String("enim"),
            LifecycleState: shared.OrganizationLifecycleStateEnumLifecycleStateUnspecified.ToPointer(),
            Name: sdk.String("Jimmy Wiegand"),
            OrganizationID: sdk.String("possimus"),
            Owner: &shared.OrganizationOwner{
                DirectoryCustomerID: sdk.String("aut"),
            },
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        Name: "Jan Thiel",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.CloudresourcemanagerOrganizationsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```
