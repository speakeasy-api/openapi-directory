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
            Parent: "unde",
        },
        QueryParams: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            EndpointPolicyID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.EndpointPolicyInput{
            AuthorizationPolicy: "iusto",
            ClientTLSPolicy: "ullam",
            Description: "saepe",
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.EndpointMatcherMetadataLabelMatcher{
                    MetadataLabelMatchCriteria: "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
                    MetadataLabels: []shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "enim",
                            LabelValue: "eum",
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "voluptatum",
                            LabelValue: "autem",
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "vel",
                            LabelValue: "non",
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "deleniti",
                            LabelValue: "similique",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "molestiae": "quo",
                "quasi": "laboriosam",
            },
            Name: "dicta",
            ServerTLSPolicy: "est",
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "consequatur",
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