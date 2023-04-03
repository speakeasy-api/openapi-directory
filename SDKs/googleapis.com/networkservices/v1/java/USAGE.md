<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EndpointPolicyTypeEnum;
import org.openapis.openapi.models.shared.EndpointPolicyInput;
import org.openapis.openapi.models.shared.TrafficPortSelector;
import org.openapis.openapi.models.shared.EndpointMatcher;
import org.openapis.openapi.models.shared.EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum;
import org.openapis.openapi.models.shared.EndpointMatcherMetadataLabelMatcher;
import org.openapis.openapi.models.shared.EndpointMatcherMetadataLabelMatcherMetadataLabels;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest req = new NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest() {{
                dollarXgafv = "2";
                endpointPolicyInput = new EndpointPolicyInput() {{
                    authorizationPolicy = "provident";
                    clientTlsPolicy = "distinctio";
                    description = "quibusdam";
                    endpointMatcher = new EndpointMatcher() {{
                        metadataLabelMatcher = new EndpointMatcherMetadataLabelMatcher() {{
                            metadataLabelMatchCriteria = "MATCH_ANY";
                            metadataLabels = new org.openapis.openapi.models.shared.EndpointMatcherMetadataLabelMatcherMetadataLabels[]{{
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "corrupti";
                                    labelValue = "illum";
                                }}),
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "vel";
                                    labelValue = "error";
                                }}),
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "deserunt";
                                    labelValue = "suscipit";
                                }}),
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "iure";
                                    labelValue = "magnam";
                                }}),
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "delectus");
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    name = "iusto";
                    serverTlsPolicy = "excepturi";
                    trafficPortSelector = new TrafficPortSelector() {{
                        ports = new String[]{{
                            add("recusandae"),
                            add("temporibus"),
                        }};
                    }};
                    type = "ENDPOINT_POLICY_TYPE_UNSPECIFIED";
                }};
                accessToken = "quis";
                alt = "json";
                callback = "deserunt";
                endpointPolicyId = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                parent = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }}            

            NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse res = sdk.projects.networkservicesProjectsLocationsEndpointPoliciesCreate(req, new NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->