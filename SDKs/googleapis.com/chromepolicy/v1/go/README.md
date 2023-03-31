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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest{
        DollarXgafv: "2",
        GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest: &shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest{
            Requests: []shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: "distinctio",
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "unde": "nulla",
                            "corrupti": "illum",
                            "vel": "error",
                            "deserunt": "suscipit",
                        },
                        TargetResource: "iure",
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: "magnam",
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "ipsa": "delectus",
                            "tempora": "suscipit",
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                        TargetResource: "iusto",
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: "excepturi",
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "recusandae": "temporibus",
                            "ab": "quis",
                        },
                        TargetResource: "veritatis",
                    },
                },
            },
        },
        AccessToken: "deserunt",
        Alt: "json",
        Callback: "ipsam",
        Customer: "repellendus",
        Fields: "sapiente",
        Key: "quo",
        OauthToken: "odit",
        PrettyPrint: false,
        QuotaUser: "at",
        UploadType: "at",
        UploadProtocol: "maiores",
    }

    ctx := context.Background()
    res, err := s.Customers.ChromepolicyCustomersPoliciesGroupsBatchDelete(ctx, req, operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity{
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


### Customers

* `ChromepolicyCustomersPoliciesGroupsBatchDelete` - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `ChromepolicyCustomersPoliciesGroupsBatchModify` - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering` - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering` - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `ChromepolicyCustomersPoliciesNetworksDefineCertificate` - Creates a certificate at a specified OU for a customer.
* `ChromepolicyCustomersPoliciesNetworksDefineNetwork` - Define a new network.
* `ChromepolicyCustomersPoliciesNetworksRemoveCertificate` - Remove an existing certificate by guid.
* `ChromepolicyCustomersPoliciesNetworksRemoveNetwork` - Remove an existing network by guid.
* `ChromepolicyCustomersPoliciesOrgunitsBatchInherit` - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `ChromepolicyCustomersPoliciesOrgunitsBatchModify` - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `ChromepolicyCustomersPoliciesResolve` - Gets the resolved policy values for a list of policies that match a search query.
* `ChromepolicyCustomersPolicySchemasGet` - Get a specific policy schema for a customer by its resource name.
* `ChromepolicyCustomersPolicySchemasList` - Gets a list of policy schemas that match a specified filter value for a given customer.

### Media

* `ChromepolicyMediaUpload` - Creates an enterprise file from the content provided by user. Returns a public download url for end user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
