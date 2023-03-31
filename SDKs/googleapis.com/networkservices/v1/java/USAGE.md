<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreatePathParams;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse;
import org.openapis.openapi.models.shared.EndpointPolicyTypeEnum;
import org.openapis.openapi.models.shared.EndpointPolicyInput;
import org.openapis.openapi.models.shared.TrafficPortSelector;
import org.openapis.openapi.models.shared.EndpointMatcher;
import org.openapis.openapi.models.shared.EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum;
import org.openapis.openapi.models.shared.EndpointMatcherMetadataLabelMatcher;
import org.openapis.openapi.models.shared.EndpointMatcherMetadataLabelMatcherMetadataLabels;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest req = new NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest() {{
                security = new NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new NetworkservicesProjectsLocationsEndpointPoliciesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    endpointPolicyId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new EndpointPolicyInput() {{
                    authorizationPolicy = "iure";
                    clientTlsPolicy = "magnam";
                    description = "debitis";
                    endpointMatcher = new EndpointMatcher() {{
                        metadataLabelMatcher = new EndpointMatcherMetadataLabelMatcher() {{
                            metadataLabelMatchCriteria = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED";
                            metadataLabels = new org.openapis.openapi.models.shared.EndpointMatcherMetadataLabelMatcherMetadataLabels[]{{
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "tempora";
                                    labelValue = "suscipit";
                                }}),
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "molestiae";
                                    labelValue = "minus";
                                }}),
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "placeat";
                                    labelValue = "voluptatum";
                                }}),
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "iusto";
                                    labelValue = "excepturi";
                                }}),
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("recusandae", "temporibus");
                        put("ab", "quis");
                    }};
                    name = "veritatis";
                    serverTlsPolicy = "deserunt";
                    trafficPortSelector = new TrafficPortSelector() {{
                        ports = new String[]{{
                            add("ipsam"),
                        }};
                    }};
                    type = "GRPC_SERVER";
                }};
            }};            

            NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse res = sdk.projects.networkservicesProjectsLocationsEndpointPoliciesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->