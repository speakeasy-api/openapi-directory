<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthorizationPolicyActionEnum;
import org.openapis.openapi.models.shared.AuthorizationPolicyInput;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.HttpHeaderMatch;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest req = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                authorizationPolicyInput = new AuthorizationPolicyInput() {{
                    action = AuthorizationPolicyActionEnum.DENY;
                    description = "quibusdam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nulla", "corrupti");
                        put("illum", "vel");
                        put("error", "deserunt");
                    }};
                    name = "Willie Gulgowski DVM";
                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                        add(new Rule() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("minus"),
                                        add("placeat"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "voluptatum";
                                        regexMatch = "iusto";
                                    }};
                                    methods = new String[]{{
                                        add("nisi"),
                                        add("recusandae"),
                                        add("temporibus"),
                                    }};
                                    ports = new Long[]{{
                                        add(337396L),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("deserunt"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "perferendis";
                                        regexMatch = "ipsam";
                                    }};
                                    methods = new String[]{{
                                        add("sapiente"),
                                        add("quo"),
                                        add("odit"),
                                        add("at"),
                                    }};
                                    ports = new Long[]{{
                                        add(978619L),
                                        add(473608L),
                                        add(799159L),
                                        add(800911L),
                                    }};
                                }}),
                            }};
                            sources = new org.openapis.openapi.models.shared.Source[]{{
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("porro"),
                                        add("dolorum"),
                                        add("dicta"),
                                    }};
                                    principals = new String[]{{
                                        add("officia"),
                                        add("occaecati"),
                                        add("fugit"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("hic"),
                                        add("optio"),
                                        add("totam"),
                                    }};
                                    principals = new String[]{{
                                        add("commodi"),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new Rule() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("qui"),
                                        add("impedit"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "cum";
                                        regexMatch = "esse";
                                    }};
                                    methods = new String[]{{
                                        add("excepturi"),
                                    }};
                                    ports = new Long[]{{
                                        add(18789L),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("natus"),
                                        add("sed"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "iste";
                                        regexMatch = "dolor";
                                    }};
                                    methods = new String[]{{
                                        add("laboriosam"),
                                        add("hic"),
                                        add("saepe"),
                                    }};
                                    ports = new Long[]{{
                                        add(449950L),
                                        add(359508L),
                                        add(613064L),
                                    }};
                                }}),
                            }};
                            sources = new org.openapis.openapi.models.shared.Source[]{{
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("quidem"),
                                        add("architecto"),
                                        add("ipsa"),
                                        add("reiciendis"),
                                    }};
                                    principals = new String[]{{
                                        add("mollitia"),
                                        add("laborum"),
                                        add("dolores"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("corporis"),
                                    }};
                                    principals = new String[]{{
                                        add("nobis"),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                authorizationPolicyId = "nemo";
                callback = "minima";
                fields = "excepturi";
                key = "accusantium";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "doloribus";
                uploadProtocol = "sapiente";
            }};            

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesCreate(req, new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity("architecto", "mollitia") {{
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