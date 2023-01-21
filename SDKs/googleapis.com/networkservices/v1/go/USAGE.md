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
            Parent: "sit",
        },
        QueryParams: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            EndpointPolicyID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.EndpointPolicyInput{
            AuthorizationPolicy: "debitis",
            ClientTLSPolicy: "voluptatum",
            Description: "et",
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.EndpointMatcherMetadataLabelMatcher{
                    MetadataLabelMatchCriteria: "MATCH_ALL",
                    MetadataLabels: []shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "et",
                            LabelValue: "voluptate",
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "iste",
                            LabelValue: "vitae",
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "totam",
                            LabelValue: "dolores",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "debitis": "vel",
                "odio": "dolore",
                "id": "aspernatur",
            },
            Name: "accusantium",
            ServerTLSPolicy: "totam",
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "quis",
                    "est",
                },
            },
            Type: "GRPC_SERVER",
        },
    }
    
    res, err := s.Projects.NetworkservicesProjectsLocationsEndpointPoliciesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->