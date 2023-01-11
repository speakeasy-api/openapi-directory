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
                    parent = "est";
                }};
                queryParams = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "hic";
                    alt = "media";
                    authorizationPolicyId = "autem";
                    callback = "fuga";
                    fields = "qui";
                    key = "corrupti";
                    oauthToken = "officiis";
                    prettyPrint = false;
                    quotaUser = "blanditiis";
                    uploadType = "deserunt";
                    uploadProtocol = "ipsum";
                }};
                request = new AuthorizationPolicyInput() {{
                    action = "DENY";
                    description = "voluptas";
                    labels = new java.util.HashMap<String, String>() {{
                        put("blanditiis", "ipsa");
                        put("ut", "possimus");
                    }};
                    name = "delectus";
                    rules = new openapisdk.models.shared.Rule[]() {{
                        add(new Rule() {{
                            destinations = new openapisdk.models.shared.Destination[]() {{
                                add(new Destination() {{
                                    hosts = new String[]() {{
                                        add("aliquid"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "quos";
                                        regexMatch = "iure";
                                    }};
                                    methods = new String[]() {{
                                        add("nihil"),
                                        add("hic"),
                                    }};
                                    ports = new Long[]() {{
                                        add(5281431942038218023),
                                        add(9013246515984776182),
                                        add(1950594325119419634),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]() {{
                                        add("unde"),
                                        add("consequatur"),
                                        add("et"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "et";
                                        regexMatch = "tempore";
                                    }};
                                    methods = new String[]() {{
                                        add("culpa"),
                                    }};
                                    ports = new Long[]() {{
                                        add(5791876016407049487),
                                    }};
                                }}),
                            }};
                            sources = new openapisdk.models.shared.Source[]() {{
                                add(new Source() {{
                                    ipBlocks = new String[]() {{
                                        add("enim"),
                                        add("nam"),
                                        add("ut"),
                                    }};
                                    principals = new String[]() {{
                                        add("adipisci"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]() {{
                                        add("omnis"),
                                    }};
                                    principals = new String[]() {{
                                        add("non"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]() {{
                                        add("aut"),
                                    }};
                                    principals = new String[]() {{
                                        add("iste"),
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