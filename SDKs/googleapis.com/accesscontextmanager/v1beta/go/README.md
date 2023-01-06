# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "cumque",
        },
        QueryParams: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "ut",
            Alt: "proto",
            Callback: "voluptatum",
            Fields: "temporibus",
            Key: "voluptas",
            OauthToken: "accusantium",
            PrettyPrint: false,
            QuotaUser: "aut",
            UploadType: "rerum",
            UploadProtocol: "quasi",
        },
        Request: &shared.AccessLevel{
            Basic: &shared.BasicLevel{
                CombiningFunction: "OR",
                Conditions: []shared.Condition{
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "NONE",
                                "BASIC",
                                "BASIC",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "UNENCRYPTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "sed",
                                    OsType: "DESKTOP_MAC",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "commodi",
                                    OsType: "OS_UNSPECIFIED",
                                    RequireVerifiedChromeOs: true,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: false,
                            RequireScreenlock: true,
                        },
                        IPSubnetworks: []string{
                            "et",
                            "doloremque",
                        },
                        Members: []string{
                            "doloremque",
                            "deserunt",
                        },
                        Negate: false,
                        Regions: []string{
                            "nostrum",
                        },
                        RequiredAccessLevels: []string{
                            "praesentium",
                        },
                    },
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "NONE",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "ENCRYPTED",
                                "ENCRYPTION_UNSPECIFIED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "facere",
                                    OsType: "ANDROID",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "facilis",
                                    OsType: "ANDROID",
                                    RequireVerifiedChromeOs: false,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: true,
                            RequireScreenlock: true,
                        },
                        IPSubnetworks: []string{
                            "nihil",
                            "ut",
                            "nostrum",
                        },
                        Members: []string{
                            "et",
                            "maxime",
                            "quae",
                        },
                        Negate: true,
                        Regions: []string{
                            "eum",
                            "placeat",
                        },
                        RequiredAccessLevels: []string{
                            "magnam",
                        },
                    },
                },
            },
            Custom: &shared.CustomLevel{
                Expr: &shared.Expr{
                    Description: "quas",
                    Expression: "nemo",
                    Location: "voluptatum",
                    Title: "quibusdam",
                },
            },
            Description: "eos",
            Name: "quae",
            Title: "sit",
        },
    }
    
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesAccessLevelsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accessPolicies

* `AccesscontextmanagerAccessPoliciesAccessLevelsCreate` - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* `AccesscontextmanagerAccessPoliciesAccessLevelsList` - List all Access Levels for an access policy.
* `AccesscontextmanagerAccessPoliciesCreate` - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* `AccesscontextmanagerAccessPoliciesList` - List all AccessPolicies under a container.
* `AccesscontextmanagerAccessPoliciesServicePerimetersCreate` - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* `AccesscontextmanagerAccessPoliciesServicePerimetersDelete` - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* `AccesscontextmanagerAccessPoliciesServicePerimetersList` - List all Service Perimeters for an access policy.
* `AccesscontextmanagerAccessPoliciesServicePerimetersPatch` - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### operations

* `AccesscontextmanagerOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
