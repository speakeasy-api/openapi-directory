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
        DollarXgafv: "2",
        EndpointPolicyInput: &shared.EndpointPolicyInput{
            AuthorizationPolicy: "provident",
            ClientTLSPolicy: "distinctio",
            Description: "quibusdam",
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.MetadataLabelMatcher{
                    MetadataLabelMatchCriteria: "MATCH_ANY",
                    MetadataLabels: []shared.MetadataLabels{
                        shared.MetadataLabels{
                            LabelName: "corrupti",
                            LabelValue: "illum",
                        },
                        shared.MetadataLabels{
                            LabelName: "vel",
                            LabelValue: "error",
                        },
                        shared.MetadataLabels{
                            LabelName: "deserunt",
                            LabelValue: "suscipit",
                        },
                        shared.MetadataLabels{
                            LabelName: "iure",
                            LabelValue: "magnam",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            Name: "iusto",
            ServerTLSPolicy: "excepturi",
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "recusandae",
                    "temporibus",
                },
            },
            Type: "ENDPOINT_POLICY_TYPE_UNSPECIFIED",
        },
        AccessToken: "quis",
        Alt: "json",
        Callback: "deserunt",
        EndpointPolicyID: "perferendis",
        Fields: "ipsam",
        Key: "repellendus",
        OauthToken: "sapiente",
        Parent: "quo",
        PrettyPrint: false,
        QuotaUser: "odit",
        UploadType: "at",
        UploadProtocol: "at",
    }

    ctx := context.Background()
    res, err := s.Projects.NetworkservicesProjectsLocationsEndpointPoliciesCreate(ctx, req, operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity{
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
<!-- End SDK Example Usage -->