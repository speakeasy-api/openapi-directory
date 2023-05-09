# BillingAccounts

### Available Operations

* [CloudbillingBillingAccountsCreate](#cloudbillingbillingaccountscreate) - This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned as a reseller account.
* [CloudbillingBillingAccountsGet](#cloudbillingbillingaccountsget) - Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).
* [CloudbillingBillingAccountsGetIamPolicy](#cloudbillingbillingaccountsgetiampolicy) - Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
* [CloudbillingBillingAccountsList](#cloudbillingbillingaccountslist) - Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
* [CloudbillingBillingAccountsPatch](#cloudbillingbillingaccountspatch) - Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.
* [CloudbillingBillingAccountsProjectsList](#cloudbillingbillingaccountsprojectslist) - Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
* [CloudbillingBillingAccountsSetIamPolicy](#cloudbillingbillingaccountssetiampolicy) - Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).
* [CloudbillingBillingAccountsTestIamPermissions](#cloudbillingbillingaccountstestiampermissions) - Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.

## CloudbillingBillingAccountsCreate

This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned as a reseller account.

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
    res, err := s.BillingAccounts.CloudbillingBillingAccountsCreate(ctx, operations.CloudbillingBillingAccountsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BillingAccountInput: &shared.BillingAccountInput{
            DisplayName: sdk.String("magnam"),
            MasterBillingAccount: sdk.String("debitis"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.CloudbillingBillingAccountsCreateSecurity{
        Option1: &operations.CloudbillingBillingAccountsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAccount != nil {
        // handle response
    }
}
```

## CloudbillingBillingAccountsGet

Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).

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
    res, err := s.BillingAccounts.CloudbillingBillingAccountsGet(ctx, operations.CloudbillingBillingAccountsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("ab"),
        Key: sdk.String("quis"),
        Name: "Iris Aufderhar",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
    }, operations.CloudbillingBillingAccountsGetSecurity{
        Option1: &operations.CloudbillingBillingAccountsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAccount != nil {
        // handle response
    }
}
```

## CloudbillingBillingAccountsGetIamPolicy

Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).

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
    res, err := s.BillingAccounts.CloudbillingBillingAccountsGetIamPolicy(ctx, operations.CloudbillingBillingAccountsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        OptionsRequestedPolicyVersion: sdk.Int64(780529),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        Resource: "dicta",
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("officia"),
    }, operations.CloudbillingBillingAccountsGetIamPolicySecurity{
        Option1: &operations.CloudbillingBillingAccountsGetIamPolicySecurityOption1{
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

## CloudbillingBillingAccountsList

Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).

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
    res, err := s.BillingAccounts.CloudbillingBillingAccountsList(ctx, operations.CloudbillingBillingAccountsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("optio"),
        Filter: sdk.String("totam"),
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("commodi"),
        PageSize: sdk.Int64(473600),
        PageToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
    }, operations.CloudbillingBillingAccountsListSecurity{
        Option1: &operations.CloudbillingBillingAccountsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBillingAccountsResponse != nil {
        // handle response
    }
}
```

## CloudbillingBillingAccountsPatch

Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.

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
    res, err := s.BillingAccounts.CloudbillingBillingAccountsPatch(ctx, operations.CloudbillingBillingAccountsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BillingAccountInput: &shared.BillingAccountInput{
            DisplayName: sdk.String("ipsum"),
            MasterBillingAccount: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        Name: "Curtis Morissette",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UpdateMask: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("iste"),
    }, operations.CloudbillingBillingAccountsPatchSecurity{
        Option1: &operations.CloudbillingBillingAccountsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAccount != nil {
        // handle response
    }
}
```

## CloudbillingBillingAccountsProjectsList

Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).

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
    res, err := s.BillingAccounts.CloudbillingBillingAccountsProjectsList(ctx, operations.CloudbillingBillingAccountsProjectsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("reiciendis"),
        Name: "Shaun Osinski",
        OauthToken: sdk.String("corporis"),
        PageSize: sdk.Int64(128926),
        PageToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.CloudbillingBillingAccountsProjectsListSecurity{
        Option1: &operations.CloudbillingBillingAccountsProjectsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProjectBillingInfoResponse != nil {
        // handle response
    }
}
```

## CloudbillingBillingAccountsSetIamPolicy

Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).

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
    res, err := s.BillingAccounts.CloudbillingBillingAccountsSetIamPolicy(ctx, operations.CloudbillingBillingAccountsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "culpa",
                                    "doloribus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("architecto"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "culpa",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "mollitia",
                                    "occaecati",
                                    "numquam",
                                    "commodi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "velit",
                                    "error",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("quis"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "animi",
                                    "enim",
                                    "odit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("sequi"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("ipsam"),
                            Expression: sdk.String("id"),
                            Location: sdk.String("possimus"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "error",
                        },
                        Role: sdk.String("temporibus"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("laborum"),
                            Expression: sdk.String("quasi"),
                            Location: sdk.String("reiciendis"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "nihil",
                            "praesentium",
                            "voluptatibus",
                            "ipsa",
                        },
                        Role: sdk.String("omnis"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("voluptate"),
                            Expression: sdk.String("cum"),
                            Location: sdk.String("perferendis"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "ut",
                            "maiores",
                        },
                        Role: sdk.String("dicta"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("corporis"),
                            Expression: sdk.String("dolore"),
                            Location: sdk.String("iusto"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "enim",
                            "accusamus",
                            "commodi",
                        },
                        Role: sdk.String("repudiandae"),
                    },
                },
                Etag: sdk.String("quae"),
                Version: sdk.Int(216822),
            },
            UpdateMask: sdk.String("quidem"),
        },
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("modi"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        Resource: "quasi",
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("sint"),
    }, operations.CloudbillingBillingAccountsSetIamPolicySecurity{
        Option1: &operations.CloudbillingBillingAccountsSetIamPolicySecurityOption1{
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

## CloudbillingBillingAccountsTestIamPermissions

Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.

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
    res, err := s.BillingAccounts.CloudbillingBillingAccountsTestIamPermissions(ctx, operations.CloudbillingBillingAccountsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "incidunt",
                "enim",
                "consequatur",
                "est",
            },
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        Resource: "qui",
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.CloudbillingBillingAccountsTestIamPermissionsSecurity{
        Option1: &operations.CloudbillingBillingAccountsTestIamPermissionsSecurityOption1{
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
