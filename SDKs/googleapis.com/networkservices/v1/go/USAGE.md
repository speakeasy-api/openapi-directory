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
            Parent: "optio",
        },
        QueryParams: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "accusamus",
            Alt: "proto",
            Callback: "dolorum",
            EndpointPolicyID: "veritatis",
            Fields: "doloribus",
            Key: "in",
            OauthToken: "maxime",
            PrettyPrint: false,
            QuotaUser: "corporis",
            UploadType: "nam",
            UploadProtocol: "assumenda",
        },
        Request: &shared.EndpointPolicyInput{
            AuthorizationPolicy: "molestias",
            ClientTLSPolicy: "aut",
            Description: "esse",
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.EndpointMatcherMetadataLabelMatcher{
                    MetadataLabelMatchCriteria: "MATCH_ALL",
                    MetadataLabels: []shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "cumque",
                            LabelValue: "aut",
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: "qui",
                            LabelValue: "incidunt",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "possimus": "qui",
                "possimus": "alias",
            },
            Name: "ipsam",
            ServerTLSPolicy: "commodi",
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "corrupti",
                    "voluptatem",
                },
            },
            Type: "SIDECAR_PROXY",
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