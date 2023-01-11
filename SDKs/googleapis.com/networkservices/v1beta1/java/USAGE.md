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
                    parent = "officia";
                }};
                queryParams = new NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "aut";
                    alt = "media";
                    callback = "itaque";
                    endpointPolicyId = "molestiae";
                    fields = "recusandae";
                    key = "optio";
                    oauthToken = "odit";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "ut";
                    uploadProtocol = "id";
                }};
                request = new EndpointPolicyInput() {{
                    authorizationPolicy = "necessitatibus";
                    clientTlsPolicy = "eveniet";
                    description = "harum";
                    endpointMatcher = new EndpointMatcher() {{
                        metadataLabelMatcher = new MetadataLabelMatcher() {{
                            metadataLabelMatchCriteria = "MATCH_ALL";
                            metadataLabels = new openapisdk.models.shared.MetadataLabels[]() {{
                                add(new MetadataLabels() {{
                                    labelName = "rerum";
                                    labelValue = "eveniet";
                                }}),
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("doloribus", "illo");
                        put("assumenda", "dolor");
                    }};
                    name = "libero";
                    serverTlsPolicy = "ad";
                    trafficPortSelector = new TrafficPortSelector() {{
                        ports = new String[]() {{
                            add("ea"),
                            add("voluptatum"),
                            add("doloribus"),
                        }};
                    }};
                    type = "ENDPOINT_POLICY_TYPE_UNSPECIFIED";
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