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
                    parent = "a";
                }};
                queryParams = new NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "vero";
                    alt = "media";
                    callback = "repellendus";
                    endpointPolicyId = "placeat";
                    fields = "hic";
                    key = "et";
                    oauthToken = "qui";
                    prettyPrint = true;
                    quotaUser = "est";
                    uploadType = "dolorem";
                    uploadProtocol = "soluta";
                }};
                request = new EndpointPolicyInput() {{
                    authorizationPolicy = "at";
                    clientTlsPolicy = "et";
                    description = "vitae";
                    endpointMatcher = new EndpointMatcher() {{
                        metadataLabelMatcher = new EndpointMatcherMetadataLabelMatcher() {{
                            metadataLabelMatchCriteria = "MATCH_ALL";
                            metadataLabels = new openapisdk.models.shared.EndpointMatcherMetadataLabelMatcherMetadataLabels[]() {{
                                add(new EndpointMatcherMetadataLabelMatcherMetadataLabels() {{
                                    labelName = "cupiditate";
                                    labelValue = "sit";
                                }}),
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("non", "rerum");
                    }};
                    name = "quasi";
                    serverTlsPolicy = "sed";
                    trafficPortSelector = new TrafficPortSelector() {{
                        ports = new String[]() {{
                            add("sed"),
                            add("officia"),
                        }};
                    }};
                    type = "SIDECAR_PROXY";
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