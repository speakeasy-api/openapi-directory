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

import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse;
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

            ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest req = new ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest() {{
                dollarXgafv = "2";
                googleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest = new GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest[]{{
                        add(new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest() {{
                            policySchema = "distinctio";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("unde", "nulla");
                                    put("corrupti", "illum");
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                }};
                                targetResource = "iure";
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest() {{
                            policySchema = "magnam";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("ipsa", "delectus");
                                    put("tempora", "suscipit");
                                    put("molestiae", "minus");
                                    put("placeat", "voluptatum");
                                }};
                                targetResource = "iusto";
                            }};
                        }}),
                        add(new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest() {{
                            policySchema = "excepturi";
                            policyTargetKey = new GoogleChromePolicyVersionsV1PolicyTargetKey() {{
                                additionalTargetKeys = new java.util.HashMap<String, String>() {{
                                    put("recusandae", "temporibus");
                                    put("ab", "quis");
                                }};
                                targetResource = "veritatis";
                            }};
                        }}),
                    }};
                }};
                accessToken = "deserunt";
                alt = "json";
                callback = "ipsam";
                customer = "repellendus";
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "at";
                uploadProtocol = "maiores";
            }}            

            ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse res = sdk.customers.chromepolicyCustomersPoliciesGroupsBatchDelete(req, new ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### customers

* `chromepolicyCustomersPoliciesGroupsBatchDelete` - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesGroupsBatchModify` - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering` - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering` - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesNetworksDefineCertificate` - Creates a certificate at a specified OU for a customer.
* `chromepolicyCustomersPoliciesNetworksDefineNetwork` - Define a new network.
* `chromepolicyCustomersPoliciesNetworksRemoveCertificate` - Remove an existing certificate by guid.
* `chromepolicyCustomersPoliciesNetworksRemoveNetwork` - Remove an existing network by guid.
* `chromepolicyCustomersPoliciesOrgunitsBatchInherit` - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesOrgunitsBatchModify` - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesResolve` - Gets the resolved policy values for a list of policies that match a search query.
* `chromepolicyCustomersPolicySchemasGet` - Get a specific policy schema for a customer by its resource name.
* `chromepolicyCustomersPolicySchemasList` - Gets a list of policy schemas that match a specified filter value for a given customer.

### media

* `chromepolicyMediaUpload` - Creates an enterprise file from the content provided by user. Returns a public download url for end user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
