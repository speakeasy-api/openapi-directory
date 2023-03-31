<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeletePathParams;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteQueryParams;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest;
import org.openapis.openapi.models.operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1PolicyTargetKey;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest req = new ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest() {{
                security = new ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ChromepolicyCustomersPoliciesGroupsBatchDeletePathParams() {{
                    customer = "corrupti";
                }};
                queryParams = new ChromepolicyCustomersPoliciesGroupsBatchDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest[]{{
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
                }};
            }};            

            ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse res = sdk.customers.chromepolicyCustomersPoliciesGroupsBatchDelete(req);

            if (res.googleProtobufEmpty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->