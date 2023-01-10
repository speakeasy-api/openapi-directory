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
            Parent: "molestiae",
        },
        QueryParams: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "consequatur",
            Alt: "media",
            Callback: "necessitatibus",
            EndpointPolicyID: "consequatur",
            Fields: "ad",
            Key: "eius",
            OauthToken: "ea",
            PrettyPrint: false,
            QuotaUser: "veniam",
            UploadType: "explicabo",
            UploadProtocol: "enim",
        },
        Request: &shared.EndpointPolicyInput{
            AuthorizationPolicy: "dolorem",
            ClientTLSPolicy: "omnis",
            Description: "delectus",
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.MetadataLabelMatcher{
                    MetadataLabelMatchCriteria: "MATCH_ALL",
                    MetadataLabels: []shared.MetadataLabels{
                        shared.MetadataLabels{
                            LabelName: "nesciunt",
                            LabelValue: "voluptatem",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "quo": "eaque",
                "numquam": "officiis",
            },
            Name: "asperiores",
            ServerTLSPolicy: "dolorem",
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "corporis",
                    "veniam",
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