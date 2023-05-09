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