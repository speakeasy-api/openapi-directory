<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    endpointPolicyId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new EndpointPolicyInput() {{
                    authorizationPolicy = "debitis";
                    clientTlsPolicy = "voluptatum";
                    description = "et";
                    endpointMatcher = new EndpointMatcher() {{
                        metadataLabelMatcher = new EndpointMatcherMetadataLabelMatcher() {{
                            metadataLabelMatchCriteria = "MATCH_ALL";
                            metadataLabels = new openapisdk.models.shared.EndpointMatcherMetadataLabelMatcherMetadataLabels[]() {{
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "et";
                                    labelValue = "voluptate";
                                }}),
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "iste";
                                    labelValue = "vitae";
                                }}),
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "totam";
                                    labelValue = "dolores";
                                }}),
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("debitis", "vel");
                        put("odio", "dolore");
                        put("id", "aspernatur");
                    }};
                    name = "accusantium";
                    serverTlsPolicy = "totam";
                    trafficPortSelector = new TrafficPortSelector() {{
                        ports = new String[]() {{
                            add("quis"),
                            add("est"),
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