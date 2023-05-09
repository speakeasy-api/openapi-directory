# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/chromepolicy/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    res, err := s.Customers.ChromepolicyCustomersPoliciesGroupsBatchDelete(ctx, operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest: &shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest{
            Requests: []shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: sdk.String("distinctio"),
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "unde": "nulla",
                            "corrupti": "illum",
                            "vel": "error",
                            "deserunt": "suscipit",
                        },
                        TargetResource: sdk.String("iure"),
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: sdk.String("magnam"),
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "ipsa": "delectus",
                            "tempora": "suscipit",
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                        TargetResource: sdk.String("iusto"),
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: sdk.String("excepturi"),
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "recusandae": "temporibus",
                            "ab": "quis",
                        },
                        TargetResource: sdk.String("veritatis"),
                    },
                },
            },
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Customer: "repellendus",
        Fields: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Customers](docs/customers/README.md)

* [ChromepolicyCustomersPoliciesGroupsBatchDelete](docs/customers/README.md#chromepolicycustomerspoliciesgroupsbatchdelete) - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesGroupsBatchModify](docs/customers/README.md#chromepolicycustomerspoliciesgroupsbatchmodify) - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering](docs/customers/README.md#chromepolicycustomerspoliciesgroupslistgrouppriorityordering) - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering](docs/customers/README.md#chromepolicycustomerspoliciesgroupsupdategrouppriorityordering) - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesNetworksDefineCertificate](docs/customers/README.md#chromepolicycustomerspoliciesnetworksdefinecertificate) - Creates a certificate at a specified OU for a customer.
* [ChromepolicyCustomersPoliciesNetworksDefineNetwork](docs/customers/README.md#chromepolicycustomerspoliciesnetworksdefinenetwork) - Define a new network.
* [ChromepolicyCustomersPoliciesNetworksRemoveCertificate](docs/customers/README.md#chromepolicycustomerspoliciesnetworksremovecertificate) - Remove an existing certificate by guid.
* [ChromepolicyCustomersPoliciesNetworksRemoveNetwork](docs/customers/README.md#chromepolicycustomerspoliciesnetworksremovenetwork) - Remove an existing network by guid.
* [ChromepolicyCustomersPoliciesOrgunitsBatchInherit](docs/customers/README.md#chromepolicycustomerspoliciesorgunitsbatchinherit) - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesOrgunitsBatchModify](docs/customers/README.md#chromepolicycustomerspoliciesorgunitsbatchmodify) - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesResolve](docs/customers/README.md#chromepolicycustomerspoliciesresolve) - Gets the resolved policy values for a list of policies that match a search query.
* [ChromepolicyCustomersPolicySchemasGet](docs/customers/README.md#chromepolicycustomerspolicyschemasget) - Get a specific policy schema for a customer by its resource name.
* [ChromepolicyCustomersPolicySchemasList](docs/customers/README.md#chromepolicycustomerspolicyschemaslist) - Gets a list of policy schemas that match a specified filter value for a given customer.

### [Media](docs/media/README.md)

* [ChromepolicyMediaUpload](docs/media/README.md#chromepolicymediaupload) - Creates an enterprise file from the content provided by user. Returns a public download url for end user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
