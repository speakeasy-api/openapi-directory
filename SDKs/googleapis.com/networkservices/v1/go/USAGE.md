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
            Parent: "beatae",
        },
        QueryParams: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "vel",
            Alt: "json",
            Callback: "possimus",
            EndpointPolicyID: "sed",
            Fields: "debitis",
            Key: "veritatis",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "voluptas",
            UploadType: "quis",
            UploadProtocol: "sequi",
        },
        Request: &shared.EndpointPolicyInput{
            AuthorizationPolicy: "voluptatem",
            ClientTLSPolicy: "et",
            Description: "aut",
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.EndpointMatcherMetadataLabelMatcher{
                    MetadataLabelMatchCriteria: "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
                    MetadataLabels: []shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "quo",
                            LabelValue: "ullam",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "dolores": "nihil",
                "omnis": "rerum",
            },
            Name: "id",
            ServerTLSPolicy: "odio",
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "consectetur",
                },
            },
            Type: "ENDPOINT_POLICY_TYPE_UNSPECIFIED",
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