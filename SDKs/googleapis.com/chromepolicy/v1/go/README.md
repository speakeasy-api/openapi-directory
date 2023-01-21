# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    
    req := operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest{
        Security: operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ChromepolicyCustomersPoliciesGroupsBatchDeletePathParams{
            Customer: "sit",
        },
        QueryParams: operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest{
            Requests: []shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: "debitis",
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "et": "ut",
                        },
                        TargetResource: "dolorem",
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: "et",
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "iste": "vitae",
                        },
                        TargetResource: "totam",
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: "dolores",
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "debitis": "vel",
                            "odio": "dolore",
                            "id": "aspernatur",
                        },
                        TargetResource: "accusantium",
                    },
                },
            },
        },
    }
    
    res, err := s.Customers.ChromepolicyCustomersPoliciesGroupsBatchDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### customers

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

### media

* `ChromepolicyMediaUpload` - Creates an enterprise file from the content provided by user. Returns a public download url for end user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
