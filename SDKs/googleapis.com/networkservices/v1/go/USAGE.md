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

    req := operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest{
        Security: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            EndpointPolicyID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.EndpointPolicyInput{
            AuthorizationPolicy: "iure",
            ClientTLSPolicy: "magnam",
            Description: "debitis",
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.EndpointMatcherMetadataLabelMatcher{
                    MetadataLabelMatchCriteria: "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
                    MetadataLabels: []shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "tempora",
                            LabelValue: "suscipit",
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "molestiae",
                            LabelValue: "minus",
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "placeat",
                            LabelValue: "voluptatum",
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "iusto",
                            LabelValue: "excepturi",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "recusandae": "temporibus",
                "ab": "quis",
            },
            Name: "veritatis",
            ServerTLSPolicy: "deserunt",
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "ipsam",
                },
            },
            Type: "GRPC_SERVER",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.NetworkservicesProjectsLocationsEndpointPoliciesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->