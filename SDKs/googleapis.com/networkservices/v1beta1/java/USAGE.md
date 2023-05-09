<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EndpointMatcher;
import org.openapis.openapi.models.shared.EndpointPolicyInput;
import org.openapis.openapi.models.shared.EndpointPolicyTypeEnum;
import org.openapis.openapi.models.shared.MetadataLabelMatcher;
import org.openapis.openapi.models.shared.MetadataLabelMatcherMetadataLabelMatchCriteriaEnum;
import org.openapis.openapi.models.shared.MetadataLabels;
import org.openapis.openapi.models.shared.TrafficPortSelector;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest req = new NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                endpointPolicyInput = new EndpointPolicyInput() {{
                    authorizationPolicy = "distinctio";
                    clientTlsPolicy = "quibusdam";
                    description = "unde";
                    endpointMatcher = new EndpointMatcher() {{
                        metadataLabelMatcher = new MetadataLabelMatcher() {{
                            metadataLabelMatchCriteria = MetadataLabelMatcherMetadataLabelMatchCriteriaEnum.MATCH_ALL;
                            metadataLabels = new org.openapis.openapi.models.shared.MetadataLabels[]{{
                                add(new MetadataLabels() {{
                                    labelName = "illum";
                                    labelValue = "vel";
                                }}),
                                add(new MetadataLabels() {{
                                    labelName = "error";
                                    labelValue = "deserunt";
                                }}),
                                add(new MetadataLabels() {{
                                    labelName = "suscipit";
                                    labelValue = "iure";
                                }}),
                            }};
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }};
                    name = "Minnie Schiller";
                    serverTlsPolicy = "iusto";
                    trafficPortSelector = new TrafficPortSelector() {{
                        ports = new String[]{{
                            add("nisi"),
                            add("recusandae"),
                            add("temporibus"),
                        }};
                    }};;
                    type = EndpointPolicyTypeEnum.ENDPOINT_POLICY_TYPE_UNSPECIFIED;
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                endpointPolicyId = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse res = sdk.projects.networkservicesProjectsLocationsEndpointPoliciesCreate(req, new NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity("at", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->