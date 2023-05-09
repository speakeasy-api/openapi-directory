# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1PolicyTargetKey;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest req = new ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest = new GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest[]{{
                        add(new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest() {{
                            policySchema = "quibusdam";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("nulla", "corrupti");
                                    put("illum", "vel");
                                    put("error", "deserunt");
                                }};
                                targetResource = "suscipit";
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest() {{
                            policySchema = "iure";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("debitis", "ipsa");
                                    put("delectus", "tempora");
                                }};
                                targetResource = "suscipit";
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest() {{
                            policySchema = "molestiae";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("placeat", "voluptatum");
                                    put("iusto", "excepturi");
                                    put("nisi", "recusandae");
                                    put("temporibus", "ab");
                                }};
                                targetResource = "quis";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse res = sdk.customers.chromepolicyCustomersPoliciesGroupsBatchDelete(req, new ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity("at", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [customers](docs/customers/README.md)

* [chromepolicyCustomersPoliciesGroupsBatchDelete](docs/customers/README.md#chromepolicycustomerspoliciesgroupsbatchdelete) - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsBatchModify](docs/customers/README.md#chromepolicycustomerspoliciesgroupsbatchmodify) - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering](docs/customers/README.md#chromepolicycustomerspoliciesgroupslistgrouppriorityordering) - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering](docs/customers/README.md#chromepolicycustomerspoliciesgroupsupdategrouppriorityordering) - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesNetworksDefineCertificate](docs/customers/README.md#chromepolicycustomerspoliciesnetworksdefinecertificate) - Creates a certificate at a specified OU for a customer.
* [chromepolicyCustomersPoliciesNetworksDefineNetwork](docs/customers/README.md#chromepolicycustomerspoliciesnetworksdefinenetwork) - Define a new network.
* [chromepolicyCustomersPoliciesNetworksRemoveCertificate](docs/customers/README.md#chromepolicycustomerspoliciesnetworksremovecertificate) - Remove an existing certificate by guid.
* [chromepolicyCustomersPoliciesNetworksRemoveNetwork](docs/customers/README.md#chromepolicycustomerspoliciesnetworksremovenetwork) - Remove an existing network by guid.
* [chromepolicyCustomersPoliciesOrgunitsBatchInherit](docs/customers/README.md#chromepolicycustomerspoliciesorgunitsbatchinherit) - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesOrgunitsBatchModify](docs/customers/README.md#chromepolicycustomerspoliciesorgunitsbatchmodify) - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesResolve](docs/customers/README.md#chromepolicycustomerspoliciesresolve) - Gets the resolved policy values for a list of policies that match a search query.
* [chromepolicyCustomersPolicySchemasGet](docs/customers/README.md#chromepolicycustomerspolicyschemasget) - Get a specific policy schema for a customer by its resource name.
* [chromepolicyCustomersPolicySchemasList](docs/customers/README.md#chromepolicycustomerspolicyschemaslist) - Gets a list of policy schemas that match a specified filter value for a given customer.

### [media](docs/media/README.md)

* [chromepolicyMediaUpload](docs/media/README.md#chromepolicymediaupload) - Creates an enterprise file from the content provided by user. Returns a public download url for end user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
