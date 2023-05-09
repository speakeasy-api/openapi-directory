# Organizations

### Available Operations

* [SecuritycenterOrganizationsAssetsGroup](#securitycenterorganizationsassetsgroup) - Filters an organization's assets and groups them by their specified properties.
* [SecuritycenterOrganizationsAssetsList](#securitycenterorganizationsassetslist) - Lists an organization's assets.
* [SecuritycenterOrganizationsAssetsRunDiscovery](#securitycenterorganizationsassetsrundiscovery) - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* [SecuritycenterOrganizationsOperationsCancel](#securitycenterorganizationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [SecuritycenterOrganizationsOperationsDelete](#securitycenterorganizationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [SecuritycenterOrganizationsSourcesCreate](#securitycenterorganizationssourcescreate) - Creates a source.
* [SecuritycenterOrganizationsSourcesFindingsCreate](#securitycenterorganizationssourcesfindingscreate) - Creates a finding. The corresponding source must exist for finding creation to succeed.
* [SecuritycenterOrganizationsSourcesFindingsGroup](#securitycenterorganizationssourcesfindingsgroup) - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* [SecuritycenterOrganizationsSourcesFindingsList](#securitycenterorganizationssourcesfindingslist) - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* [SecuritycenterOrganizationsSourcesFindingsSetState](#securitycenterorganizationssourcesfindingssetstate) - Updates the state of a finding.
* [SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarks](#securitycenterorganizationssourcesfindingsupdatesecuritymarks) - Updates security marks.
* [SecuritycenterOrganizationsSourcesGet](#securitycenterorganizationssourcesget) - Gets a source.
* [SecuritycenterOrganizationsSourcesGetIamPolicy](#securitycenterorganizationssourcesgetiampolicy) - Gets the access control policy on the specified Source.
* [SecuritycenterOrganizationsSourcesList](#securitycenterorganizationssourceslist) - Lists all sources belonging to an organization.
* [SecuritycenterOrganizationsSourcesSetIamPolicy](#securitycenterorganizationssourcessetiampolicy) - Sets the access control policy on the specified Source.
* [SecuritycenterOrganizationsSourcesTestIamPermissions](#securitycenterorganizationssourcestestiampermissions) - Returns the permissions that a caller has on the specified source.

## SecuritycenterOrganizationsAssetsGroup

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
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsGroup(ctx, operations.SecuritycenterOrganizationsAssetsGroupRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GroupAssetsRequest: &shared.GroupAssetsRequest{
            CompareDuration: sdk.String("suscipit"),
            Filter: sdk.String("molestiae"),
            GroupBy: sdk.String("minus"),
            PageSize: sdk.Int(812169),
            PageToken: sdk.String("voluptatum"),
            ReadTime: sdk.String("iusto"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("quis"),
        Parent: "veritatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.SecuritycenterOrganizationsAssetsGroupSecurity{
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

## SecuritycenterOrganizationsAssetsList

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
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsList(ctx, operations.SecuritycenterOrganizationsAssetsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        CompareDuration: sdk.String("at"),
        FieldMask: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        OrderBy: sdk.String("esse"),
        PageSize: sdk.Int64(520478),
        PageToken: sdk.String("porro"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        ReadTime: sdk.String("nam"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.SecuritycenterOrganizationsAssetsListSecurity{
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

## SecuritycenterOrganizationsAssetsRunDiscovery

Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.

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
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsRunDiscovery(ctx, operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "hic": "optio",
            "totam": "beatae",
            "commodi": "molestiae",
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("cum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsum"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ad"),
    }, operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity{
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

## SecuritycenterOrganizationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Organizations.SecuritycenterOrganizationsOperationsCancel(ctx, operations.SecuritycenterOrganizationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "iste": "dolor",
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        Name: "Stacy Moore",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.SecuritycenterOrganizationsOperationsCancelSecurity{
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

## SecuritycenterOrganizationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Organizations.SecuritycenterOrganizationsOperationsDelete(ctx, operations.SecuritycenterOrganizationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("corporis"),
        Name: "Della Halvorson",
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("iure"),
    }, operations.SecuritycenterOrganizationsOperationsDeleteSecurity{
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

## SecuritycenterOrganizationsSourcesCreate

Creates a source.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesCreate(ctx, operations.SecuritycenterOrganizationsSourcesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Source: &shared.Source{
            Description: sdk.String("doloribus"),
            DisplayName: sdk.String("sapiente"),
            Name: sdk.String("Angie Durgan"),
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("quam"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("quia"),
    }, operations.SecuritycenterOrganizationsSourcesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Source != nil {
        // handle response
    }
}
```

## SecuritycenterOrganizationsSourcesFindingsCreate

Creates a finding. The corresponding source must exist for finding creation to succeed.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesFindingsCreate(ctx, operations.SecuritycenterOrganizationsSourcesFindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudSecuritycenterV1beta1Finding: &shared.GoogleCloudSecuritycenterV1beta1Finding{
            Category: sdk.String("vitae"),
            CreateTime: sdk.String("laborum"),
            EventTime: sdk.String("animi"),
            ExternalURI: sdk.String("enim"),
            Name: sdk.String("Angelica Dietrich"),
            Parent: sdk.String("id"),
            ResourceName: sdk.String("possimus"),
            SecurityMarks: &shared.GoogleCloudSecuritycenterV1beta1SecurityMarks{
                Marks: map[string]string{
                    "quasi": "error",
                },
                Name: sdk.String("Neal Boyer"),
            },
            SourceProperties: map[string]interface{}{
                "nihil": "praesentium",
                "voluptatibus": "ipsa",
                "omnis": "voluptate",
                "cum": "perferendis",
            },
            State: shared.GoogleCloudSecuritycenterV1beta1FindingStateEnumStateUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("dicta"),
        FindingID: sdk.String("corporis"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("iusto"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.SecuritycenterOrganizationsSourcesFindingsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudSecuritycenterV1beta1Finding != nil {
        // handle response
    }
}
```

## SecuritycenterOrganizationsSourcesFindingsGroup

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesFindingsGroup(ctx, operations.SecuritycenterOrganizationsSourcesFindingsGroupRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GroupFindingsRequest: &shared.GroupFindingsRequest{
            Filter: sdk.String("repudiandae"),
            GroupBy: sdk.String("quae"),
            PageSize: sdk.Int(216822),
            PageToken: sdk.String("quidem"),
            ReadTime: sdk.String("molestias"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("voluptates"),
        Parent: "quasi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.SecuritycenterOrganizationsSourcesFindingsGroupSecurity{
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

## SecuritycenterOrganizationsSourcesFindingsList

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesFindingsList(ctx, operations.SecuritycenterOrganizationsSourcesFindingsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequatur"),
        FieldMask: sdk.String("est"),
        Fields: sdk.String("quibusdam"),
        Filter: sdk.String("explicabo"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("distinctio"),
        OrderBy: sdk.String("quibusdam"),
        PageSize: sdk.Int64(289406),
        PageToken: sdk.String("modi"),
        Parent: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        ReadTime: sdk.String("cupiditate"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.SecuritycenterOrganizationsSourcesFindingsListSecurity{
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

## SecuritycenterOrganizationsSourcesFindingsSetState

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesFindingsSetState(ctx, operations.SecuritycenterOrganizationsSourcesFindingsSetStateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetFindingStateRequest: &shared.SetFindingStateRequest{
            StartTime: sdk.String("assumenda"),
            State: shared.SetFindingStateRequestStateEnumActive.ToPointer(),
        },
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("tempora"),
        Name: "Geoffrey Green",
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.SecuritycenterOrganizationsSourcesFindingsSetStateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudSecuritycenterV1beta1Finding != nil {
        // handle response
    }
}
```

## SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarks

Updates security marks.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarks(ctx, operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudSecuritycenterV1beta1SecurityMarks: &shared.GoogleCloudSecuritycenterV1beta1SecurityMarks{
            Marks: map[string]string{
                "sint": "officia",
                "dolor": "debitis",
                "a": "dolorum",
                "in": "in",
            },
            Name: sdk.String("Mrs. Emilio Price"),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("accusamus"),
        Name: "Toni Haley",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        StartTime: sdk.String("nam"),
        UpdateMask: sdk.String("id"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudSecuritycenterV1beta1SecurityMarks != nil {
        // handle response
    }
}
```

## SecuritycenterOrganizationsSourcesGet

Gets a source.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesGet(ctx, operations.SecuritycenterOrganizationsSourcesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("vel"),
        Filter: sdk.String("natus"),
        Key: sdk.String("omnis"),
        Name: "Dorothy Kovacek",
        OauthToken: sdk.String("id"),
        PageSize: sdk.Int64(287991),
        PageToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.SecuritycenterOrganizationsSourcesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Source != nil {
        // handle response
    }
}
```

## SecuritycenterOrganizationsSourcesGetIamPolicy

Gets the access control policy on the specified Source.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesGetIamPolicy(ctx, operations.SecuritycenterOrganizationsSourcesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(878453),
            },
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("et"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        Resource: "quos",
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.SecuritycenterOrganizationsSourcesGetIamPolicySecurity{
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

## SecuritycenterOrganizationsSourcesList

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesList(ctx, operations.SecuritycenterOrganizationsSourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("eum"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("necessitatibus"),
        PageSize: sdk.Int64(141264),
        PageToken: sdk.String("nemo"),
        Parent: "quasi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.SecuritycenterOrganizationsSourcesListSecurity{
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

## SecuritycenterOrganizationsSourcesSetIamPolicy

Sets the access control policy on the specified Source.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesSetIamPolicy(ctx, operations.SecuritycenterOrganizationsSourcesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "in",
                                    "architecto",
                                    "architecto",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "expedita",
                                    "nihil",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sed",
                                    "saepe",
                                    "pariatur",
                                    "accusantium",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("praesentium"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sunt",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "pariatur",
                                    "maxime",
                                    "ea",
                                    "excepturi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "accusantium",
                                    "ab",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("quidem"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "autem",
                                    "nam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nemo",
                                    "voluptatibus",
                                    "perferendis",
                                    "fugiat",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("aut"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "hic",
                                    "libero",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "eaque",
                                    "quis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "perferendis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("minus"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("dolor"),
                            Expression: sdk.String("vero"),
                            Location: sdk.String("nostrum"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "omnis",
                            "facilis",
                            "perspiciatis",
                            "voluptatem",
                        },
                        Role: sdk.String("porro"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("consequuntur"),
                            Expression: sdk.String("blanditiis"),
                            Location: sdk.String("error"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "rerum",
                            "adipisci",
                            "asperiores",
                        },
                        Role: sdk.String("earum"),
                    },
                },
                Etag: sdk.String("modi"),
                Version: sdk.Int(613966),
            },
            UpdateMask: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        Resource: "quos",
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.SecuritycenterOrganizationsSourcesSetIamPolicySecurity{
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

## SecuritycenterOrganizationsSourcesTestIamPermissions

Returns the permissions that a caller has on the specified source.

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
    res, err := s.Organizations.SecuritycenterOrganizationsSourcesTestIamPermissions(ctx, operations.SecuritycenterOrganizationsSourcesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "qui",
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("cum"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        Resource: "amet",
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
