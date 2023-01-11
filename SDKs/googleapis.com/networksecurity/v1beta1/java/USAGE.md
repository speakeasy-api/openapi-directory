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

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest req = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest() {{
                security = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams() {{
                    parent = "perferendis";
                }};
                queryParams = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "json";
                    authorizationPolicyId = "sequi";
                    callback = "magni";
                    fields = "odit";
                    key = "et";
                    oauthToken = "suscipit";
                    prettyPrint = true;
                    quotaUser = "ad";
                    uploadType = "harum";
                    uploadProtocol = "occaecati";
                }};
                request = new AuthorizationPolicyInput() {{
                    action = "ACTION_UNSPECIFIED";
                    description = "ut";
                    labels = new java.util.HashMap<String, String>() {{
                        put("asperiores", "architecto");
                        put("omnis", "quaerat");
                    }};
                    name = "in";
                    rules = new openapisdk.models.shared.Rule[]() {{
                        add(new Rule() {{
                            destinations = new openapisdk.models.shared.Destination[]() {{
                                add(new Destination() {{
                                    hosts = new String[]() {{
                                        add("incidunt"),
                                        add("eius"),
                                        add("molestiae"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "dolores";
                                        regexMatch = "voluptates";
                                    }};
                                    methods = new String[]() {{
                                        add("odit"),
                                    }};
                                    ports = new Long[]() {{
                                        add(853841943264848773),
                                        add(3148354411772899995),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]() {{
                                        add("maiores"),
                                        add("alias"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "rerum";
                                        regexMatch = "impedit";
                                    }};
                                    methods = new String[]() {{
                                        add("eaque"),
                                    }};
                                    ports = new Long[]() {{
                                        add(8043918493885498120),
                                        add(6153112703132901384),
                                        add(6595658161325710708),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]() {{
                                        add("minus"),
                                        add("quaerat"),
                                        add("possimus"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "non";
                                        regexMatch = "vel";
                                    }};
                                    methods = new String[]() {{
                                        add("pariatur"),
                                    }};
                                    ports = new Long[]() {{
                                        add(5337193312638487048),
                                        add(2123557953428248262),
                                    }};
                                }}),
                            }};
                            sources = new openapisdk.models.shared.Source[]() {{
                                add(new Source() {{
                                    ipBlocks = new String[]() {{
                                        add("rerum"),
                                    }};
                                    principals = new String[]() {{
                                        add("et"),
                                        add("ducimus"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]() {{
                                        add("aspernatur"),
                                        add("aut"),
                                    }};
                                    principals = new String[]() {{
                                        add("voluptatem"),
                                        add("et"),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};
            }};

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->