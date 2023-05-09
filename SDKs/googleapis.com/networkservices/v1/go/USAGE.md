<!-- Start SDK Example Usage -->
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
    res, err := s.Projects.NetworkservicesProjectsLocationsEndpointPoliciesCreate(ctx, operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EndpointPolicyInput: &shared.EndpointPolicyInput{
            AuthorizationPolicy: sdk.String("provident"),
            ClientTLSPolicy: sdk.String("distinctio"),
            Description: sdk.String("quibusdam"),
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.EndpointMatcherMetadataLabelMatcher{
                    MetadataLabelMatchCriteria: shared.EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnumMatchAny.ToPointer(),
                    MetadataLabels: []shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: sdk.String("corrupti"),
                            LabelValue: sdk.String("illum"),
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: sdk.String("vel"),
                            LabelValue: sdk.String("error"),
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: sdk.String("deserunt"),
                            LabelValue: sdk.String("suscipit"),
                        },
                        shared.EndpointMatcherMetadataLabelMatcherMetadataLabels{
                            LabelName: sdk.String("iure"),
                            LabelValue: sdk.String("magnam"),
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
            Name: sdk.String("Miriam Huel"),
            ServerTLSPolicy: sdk.String("ab"),
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "veritatis",
                    "deserunt",
                },
            },
            Type: shared.EndpointPolicyTypeEnumEndpointPolicyTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        EndpointPolicyID: sdk.String("quo"),
        Fields: sdk.String("odit"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("at"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity{
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