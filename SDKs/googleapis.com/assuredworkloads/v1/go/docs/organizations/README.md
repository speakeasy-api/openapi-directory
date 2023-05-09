# Organizations

### Available Operations

* [AssuredworkloadsOrganizationsLocationsOperationsList](#assuredworkloadsorganizationslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [AssuredworkloadsOrganizationsLocationsWorkloadsCreate](#assuredworkloadsorganizationslocationsworkloadscreate) - Creates Assured Workload.
* [AssuredworkloadsOrganizationsLocationsWorkloadsDelete](#assuredworkloadsorganizationslocationsworkloadsdelete) - Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.
* [AssuredworkloadsOrganizationsLocationsWorkloadsList](#assuredworkloadsorganizationslocationsworkloadslist) - Lists Assured Workloads under a CRM Node.
* [AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions](#assuredworkloadsorganizationslocationsworkloadsmutatepartnerpermissions) - Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
* [AssuredworkloadsOrganizationsLocationsWorkloadsPatch](#assuredworkloadsorganizationslocationsworkloadspatch) - Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
* [AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources](#assuredworkloadsorganizationslocationsworkloadsrestrictallowedresources) - Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
* [AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge](#assuredworkloadsorganizationslocationsworkloadsviolationsacknowledge) - Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
* [AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGet](#assuredworkloadsorganizationslocationsworkloadsviolationsget) - Retrieves Assured Workload Violation based on ID.
* [AssuredworkloadsOrganizationsLocationsWorkloadsViolationsList](#assuredworkloadsorganizationslocationsworkloadsviolationslist) - Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`

## AssuredworkloadsOrganizationsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsOperationsList(ctx, operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        Name: "Mrs. Sophie Smith MD",
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.AssuredworkloadsOrganizationsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```

## AssuredworkloadsOrganizationsLocationsWorkloadsCreate

Creates Assured Workload.

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
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsWorkloadsCreate(ctx, operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudAssuredworkloadsV1WorkloadInput: &shared.GoogleCloudAssuredworkloadsV1WorkloadInput{
            BillingAccount: sdk.String("at"),
            ComplianceRegime: shared.GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumCaProtectedB.ToPointer(),
            ComplianceStatus: &shared.GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus{
                AcknowledgedViolationCount: sdk.Int(473608),
                ActiveViolationCount: sdk.Int(799159),
            },
            DisplayName: sdk.String("quod"),
            EkmProvisioningResponse: &shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse{
                EkmProvisioningErrorDomain: shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomainEnumGoogleServerError.ToPointer(),
                EkmProvisioningErrorMapping: shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMappingEnumMissingMetricsScopeAdminPermission.ToPointer(),
                EkmProvisioningState: shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningStateEnumEkmProvisioningStateCompleted.ToPointer(),
            },
            EnableSovereignControls: sdk.Bool(false),
            Etag: sdk.String("dolorum"),
            KmsSettings: &shared.GoogleCloudAssuredworkloadsV1WorkloadKMSSettings{
                NextRotationTime: sdk.String("dicta"),
                RotationPeriod: sdk.String("nam"),
            },
            Labels: map[string]string{
                "occaecati": "fugit",
                "deleniti": "hic",
                "optio": "totam",
            },
            Name: sdk.String("Lucy Krajcik"),
            Partner: shared.GoogleCloudAssuredworkloadsV1WorkloadPartnerEnumSovereignControlsBySiaMinsait.ToPointer(),
            ProvisionedResourcesParent: sdk.String("cum"),
            ResourceSettings: []shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings{
                shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings{
                    DisplayName: sdk.String("ipsum"),
                    ResourceID: sdk.String("excepturi"),
                    ResourceType: shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnumResourceTypeUnspecified.ToPointer(),
                },
                shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings{
                    DisplayName: sdk.String("perferendis"),
                    ResourceID: sdk.String("ad"),
                    ResourceType: shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnumEncryptionKeysProject.ToPointer(),
                },
            },
            SaaEnrollmentResponse: &shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse{
                SetupErrors: []shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum{
                    shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnumErrorNotAllServicesEnrolled,
                },
                SetupStatus: shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnumSetupStateUnspecified.ToPointer(),
            },
            ViolationNotificationsEnabled: sdk.Bool(false),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        ExternalID: sdk.String("saepe"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("corporis"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## AssuredworkloadsOrganizationsLocationsWorkloadsDelete

Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.

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
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsWorkloadsDelete(ctx, operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("est"),
        Etag: sdk.String("mollitia"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("dolores"),
        Name: "Stacy Champlin",
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## AssuredworkloadsOrganizationsLocationsWorkloadsList

Lists Assured Workloads under a CRM Node.

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
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsWorkloadsList(ctx, operations.AssuredworkloadsOrganizationsLocationsWorkloadsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("sapiente"),
        Filter: sdk.String("architecto"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("dolorem"),
        PageSize: sdk.Int64(635059),
        PageToken: sdk.String("consequuntur"),
        Parent: "repellat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.AssuredworkloadsOrganizationsLocationsWorkloadsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudAssuredworkloadsV1ListWorkloadsResponse != nil {
        // handle response
    }
}
```

## AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions

Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.

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
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions(ctx, operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest: &shared.GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest{
            Etag: sdk.String("quam"),
            PartnerPermissions: &shared.GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions{
                DataLogsViewer: sdk.Bool(false),
                RemediateFolderViolations: sdk.Bool(false),
                ServiceAccessApprover: sdk.Bool(false),
            },
            UpdateMask: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("quis"),
        Key: sdk.String("vitae"),
        Name: "Matt Hamill",
        OauthToken: sdk.String("sequi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("id"),
    }, operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudAssuredworkloadsV1Workload != nil {
        // handle response
    }
}
```

## AssuredworkloadsOrganizationsLocationsWorkloadsPatch

Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.

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
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsWorkloadsPatch(ctx, operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudAssuredworkloadsV1WorkloadInput: &shared.GoogleCloudAssuredworkloadsV1WorkloadInput{
            BillingAccount: sdk.String("aut"),
            ComplianceRegime: shared.GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumIl4.ToPointer(),
            ComplianceStatus: &shared.GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus{
                AcknowledgedViolationCount: sdk.Int(622846),
                ActiveViolationCount: sdk.Int(837945),
            },
            DisplayName: sdk.String("laborum"),
            EkmProvisioningResponse: &shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse{
                EkmProvisioningErrorDomain: shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomainEnumEkmProvisioningErrorDomainUnspecified.ToPointer(),
                EkmProvisioningErrorMapping: shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMappingEnumMissingEkmConnectionAdminPermission.ToPointer(),
                EkmProvisioningState: shared.GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningStateEnumEkmProvisioningStateCompleted.ToPointer(),
            },
            EnableSovereignControls: sdk.Bool(false),
            Etag: sdk.String("vero"),
            KmsSettings: &shared.GoogleCloudAssuredworkloadsV1WorkloadKMSSettings{
                NextRotationTime: sdk.String("nihil"),
                RotationPeriod: sdk.String("praesentium"),
            },
            Labels: map[string]string{
                "ipsa": "omnis",
                "voluptate": "cum",
                "perferendis": "doloremque",
                "reprehenderit": "ut",
            },
            Name: sdk.String("Willie Hessel"),
            Partner: shared.GoogleCloudAssuredworkloadsV1WorkloadPartnerEnumPartnerUnspecified.ToPointer(),
            ProvisionedResourcesParent: sdk.String("harum"),
            ResourceSettings: []shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings{
                shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings{
                    DisplayName: sdk.String("accusamus"),
                    ResourceID: sdk.String("commodi"),
                    ResourceType: shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnumKeyring.ToPointer(),
                },
                shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings{
                    DisplayName: sdk.String("quae"),
                    ResourceID: sdk.String("ipsum"),
                    ResourceType: shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnumEncryptionKeysProject.ToPointer(),
                },
            },
            SaaEnrollmentResponse: &shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse{
                SetupErrors: []shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum{
                    shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnumErrorMissingExternalSigningKey,
                    shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnumErrorSetupCheckFailed,
                    shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnumErrorInvalidBaseSetup,
                },
                SetupStatus: shared.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnumStatusPending.ToPointer(),
            },
            ViolationNotificationsEnabled: sdk.Bool(false),
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        Name: "Patti Gottlieb MD",
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UpdateMask: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudAssuredworkloadsV1Workload != nil {
        // handle response
    }
}
```

## AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources

Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.

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
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources(ctx, operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest: &shared.GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest{
            RestrictionType: shared.GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnumAllowAllGcpResources.ToPointer(),
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("quos"),
        Key: sdk.String("perferendis"),
        Name: "Mr. Nadine Hills",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse != nil {
        // handle response
    }
}
```

## AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge

Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.

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
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge(ctx, operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest: &shared.GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest{
            Comment: sdk.String("delectus"),
            NonCompliantOrgPolicy: sdk.String("eum"),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("provident"),
        Name: "Perry Nikolaus",
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("in"),
    }, operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse != nil {
        // handle response
    }
}
```

## AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGet

Retrieves Assured Workload Violation based on ID.

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
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGet(ctx, operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("cumque"),
        Name: "Nathaniel Hyatt",
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudAssuredworkloadsV1Violation != nil {
        // handle response
    }
}
```

## AssuredworkloadsOrganizationsLocationsWorkloadsViolationsList

Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`

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
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsList(ctx, operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("id"),
        Filter: sdk.String("blanditiis"),
        IntervalEndTime: sdk.String("deleniti"),
        IntervalStartTime: sdk.String("sapiente"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(394869),
        PageToken: sdk.String("vel"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudAssuredworkloadsV1ListViolationsResponse != nil {
        // handle response
    }
}
```
