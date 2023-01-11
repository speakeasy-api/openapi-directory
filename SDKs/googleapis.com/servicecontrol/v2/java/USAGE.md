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

            ServicecontrolServicesCheckRequest req = new ServicecontrolServicesCheckRequest() {{
                security = new ServicecontrolServicesCheckSecurity() {{
                    option1 = new ServicecontrolServicesCheckSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ServicecontrolServicesCheckPathParams() {{
                    serviceName = "qui";
                }};
                queryParams = new ServicecontrolServicesCheckQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "placeat";
                    alt = "proto";
                    callback = "aut";
                    fields = "vitae";
                    key = "hic";
                    oauthToken = "cupiditate";
                    prettyPrint = false;
                    quotaUser = "quia";
                    uploadType = "ut";
                    uploadProtocol = "omnis";
                }};
                request = new CheckRequest() {{
                    attributes = new AttributeContext() {{
                        api = new Api() {{
                            operation = "dolores";
                            protocol = "iusto";
                            service = "ratione";
                            version = "sed";
                        }};
                        destination = new Peer() {{
                            ip = "libero";
                            labels = new java.util.HashMap<String, String>() {{
                                put("illo", "sapiente");
                                put("et", "et");
                            }};
                            port = "dolore";
                            principal = "quod";
                            regionCode = "similique";
                        }};
                        extensions = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("dolore", "libero");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("distinctio", "aut");
                                put("exercitationem", "quisquam");
                                put("cum", "corrupti");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("id", "ut");
                            }}),
                        }};
                        origin = new Peer() {{
                            ip = "totam";
                            labels = new java.util.HashMap<String, String>() {{
                                put("quas", "quaerat");
                                put("aut", "hic");
                            }};
                            port = "rerum";
                            principal = "occaecati";
                            regionCode = "iure";
                        }};
                        request = new Request() {{
                            auth = new Auth() {{
                                accessLevels = new String[]() {{
                                    add("voluptas"),
                                    add("perspiciatis"),
                                }};
                                audiences = new String[]() {{
                                    add("ab"),
                                    add("maxime"),
                                }};
                                claims = new java.util.HashMap<String, Object>() {{
                                    put("quia", "amet");
                                    put("non", "dignissimos");
                                    put("quisquam", "nihil");
                                }};
                                presenter = "illo";
                                principal = "tempore";
                            }};
                            headers = new java.util.HashMap<String, String>() {{
                                put("et", "dolorem");
                                put("quaerat", "pariatur");
                                put("inventore", "reiciendis");
                            }};
                            host = "quidem";
                            id = "ut";
                            method = "eum";
                            path = "quo";
                            protocol = "assumenda";
                            query = "quisquam";
                            reason = "ad";
                            scheme = "placeat";
                            size = "est";
                            time = "necessitatibus";
                        }};
                        resource = new Resource() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("necessitatibus", "iure");
                                put("corporis", "voluptatem");
                            }};
                            createTime = "quibusdam";
                            deleteTime = "fugit";
                            displayName = "dolorum";
                            etag = "praesentium";
                            labels = new java.util.HashMap<String, String>() {{
                                put("voluptates", "et");
                                put("consectetur", "ratione");
                                put("rerum", "commodi");
                            }};
                            location = "enim";
                            name = "distinctio";
                            service = "voluptatem";
                            type = "omnis";
                            uid = "quis";
                            updateTime = "modi";
                        }};
                        response = new Response() {{
                            backendLatency = "quae";
                            code = "enim";
                            headers = new java.util.HashMap<String, String>() {{
                                put("dolor", "hic");
                                put("sed", "quisquam");
                            }};
                            size = "quo";
                            time = "deleniti";
                        }};
                        source = new Peer() {{
                            ip = "ut";
                            labels = new java.util.HashMap<String, String>() {{
                                put("voluptatem", "iure");
                                put("porro", "rem");
                                put("fugiat", "nihil");
                            }};
                            port = "voluptatibus";
                            principal = "beatae";
                            regionCode = "nobis";
                        }};
                    }};
                    flags = "sit";
                    resources = new openapisdk.models.shared.ResourceInfo[]() {{
                        add(new ResourceInfo() {{
                            container = "iusto";
                            location = "officia";
                            name = "aliquam";
                            permission = "veniam";
                            type = "autem";
                        }}),
                        add(new ResourceInfo() {{
                            container = "dignissimos";
                            location = "impedit";
                            name = "et";
                            permission = "sed";
                            type = "facere";
                        }}),
                    }};
                    serviceConfigId = "corporis";
                }};
            }};

            ServicecontrolServicesCheckResponse res = sdk.services.servicecontrolServicesCheck(req);

            if (res.checkResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->