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
            Parent: "expedita",
        },
        QueryParams: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "explicabo",
            Alt: "json",
            Callback: "eaque",
            EndpointPolicyID: "perferendis",
            Fields: "et",
            Key: "neque",
            OauthToken: "ullam",
            PrettyPrint: true,
            QuotaUser: "aut",
            UploadType: "a",
            UploadProtocol: "aut",
        },
        Request: &shared.EndpointPolicyInput{
            AuthorizationPolicy: "temporibus",
            ClientTLSPolicy: "consequatur",
            Description: "enim",
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.MetadataLabelMatcher{
                    MetadataLabelMatchCriteria: "MATCH_ANY",
                    MetadataLabels: []shared.MetadataLabels{
                        shared.MetadataLabels{
                            LabelName: "reiciendis",
                            LabelValue: "dolor",
                        },
                        shared.MetadataLabels{
                            LabelName: "quod",
                            LabelValue: "corporis",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "necessitatibus": "quia",
                "minus": "non",
                "eligendi": "quisquam",
            },
            Name: "ipsum",
            ServerTLSPolicy: "eos",
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "aut",
                    "id",
                    "sint",
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