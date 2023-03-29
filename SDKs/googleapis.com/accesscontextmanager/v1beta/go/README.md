# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/accesscontextmanager/v1beta/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest{
        Security: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.AccessLevel{
            Basic: &shared.BasicLevel{
                CombiningFunction: "AND",
                Conditions: []shared.Condition{
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "COMPLETE",
                                "MANAGEMENT_UNSPECIFIED",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "ENCRYPTION_UNSUPPORTED",
                                "ENCRYPTION_UNSUPPORTED",
                                "ENCRYPTION_UNSUPPORTED",
                                "ENCRYPTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "non",
                                    OsType: "DESKTOP_LINUX",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "similique",
                                    OsType: "DESKTOP_WINDOWS",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "molestiae",
                                    OsType: "ANDROID",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "quasi",
                                    OsType: "DESKTOP_WINDOWS",
                                    RequireVerifiedChromeOs: false,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: false,
                            RequireScreenlock: false,
                        },
                        IPSubnetworks: []string{
                            "est",
                        },
                        Members: []string{
                            "consequatur",
                        },
                        Negate: false,
                        Regions: []string{
                            "a",
                            "omnis",
                            "eos",
                            "accusamus",
                        },
                        RequiredAccessLevels: []string{
                            "reiciendis",
                            "rem",
                            "quibusdam",
                            "et",
                        },
                    },
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "BASIC",
                                "COMPLETE",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "ENCRYPTION_UNSPECIFIED",
                                "UNENCRYPTED",
                                "UNENCRYPTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "qui",
                                    OsType: "DESKTOP_LINUX",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "rerum",
                                    OsType: "ANDROID",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "occaecati",
                                    OsType: "OS_UNSPECIFIED",
                                    RequireVerifiedChromeOs: false,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: false,
                            RequireScreenlock: false,
                        },
                        IPSubnetworks: []string{
                            "rem",
                            "voluptatem",
                        },
                        Members: []string{
                            "est",
                        },
                        Negate: false,
                        Regions: []string{
                            "blanditiis",
                            "numquam",
                            "similique",
                        },
                        RequiredAccessLevels: []string{
                            "sit",
                        },
                    },
                },
            },
            Custom: &shared.CustomLevel{
                Expr: &shared.Expr{
                    Description: "quia",
                    Expression: "et",
                    Location: "voluptatem",
                    Title: "Investor Integration Orchestrator",
                },
            },
            Description: "iure",
            Name: "earum",
            Title: "Human Quality Architect",
        },
    }

    ctx := context.Background()
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesAccessLevelsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### AccessPolicies

* `AccesscontextmanagerAccessPoliciesAccessLevelsCreate` - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* `AccesscontextmanagerAccessPoliciesAccessLevelsList` - List all Access Levels for an access policy.
* `AccesscontextmanagerAccessPoliciesCreate` - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* `AccesscontextmanagerAccessPoliciesList` - List all AccessPolicies under a container.
* `AccesscontextmanagerAccessPoliciesServicePerimetersCreate` - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* `AccesscontextmanagerAccessPoliciesServicePerimetersDelete` - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* `AccesscontextmanagerAccessPoliciesServicePerimetersList` - List all Service Perimeters for an access policy.
* `AccesscontextmanagerAccessPoliciesServicePerimetersPatch` - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### Operations

* `AccesscontextmanagerOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
