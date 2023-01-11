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
                    serviceName = "sit";
                }};
                queryParams = new ServicecontrolServicesCheckQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new CheckRequest() {{
                    attributes = new AttributeContext() {{
                        api = new Api() {{
                            operation = "dicta";
                            protocol = "debitis";
                            service = "voluptatum";
                            version = "et";
                        }};
                        destination = new Peer() {{
                            ip = "ut";
                            labels = new java.util.HashMap<String, String>() {{
                                put("et", "voluptate");
                                put("iste", "vitae");
                                put("totam", "dolores");
                            }};
                            port = "illum";
                            principal = "debitis";
                            regionCode = "vel";
                        }};
                        extensions = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("id", "aspernatur");
                                put("accusantium", "totam");
                            }}),
                        }};
                        origin = new Peer() {{
                            ip = "commodi";
                            labels = new java.util.HashMap<String, String>() {{
                                put("est", "aut");
                                put("odit", "non");
                                put("voluptas", "omnis");
                            }};
                            port = "aut";
                            principal = "illo";
                            regionCode = "sed";
                        }};
                        request = new Request() {{
                            auth = new Auth() {{
                                accessLevels = new String[]() {{
                                    add("autem"),
                                    add("consectetur"),
                                }};
                                audiences = new String[]() {{
                                    add("odio"),
                                }};
                                claims = new java.util.HashMap<String, Object>() {{
                                    put("recusandae", "at");
                                }};
                                presenter = "ipsum";
                                principal = "eveniet";
                            }};
                            headers = new java.util.HashMap<String, String>() {{
                                put("sint", "inventore");
                                put("ut", "exercitationem");
                            }};
                            host = "aut";
                            id = "reprehenderit";
                            method = "tempore";
                            path = "maiores";
                            protocol = "incidunt";
                            query = "dolor";
                            reason = "beatae";
                            scheme = "veritatis";
                            size = "in";
                            time = "et";
                        }};
                        resource = new Resource() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("ipsum", "ex");
                                put("dolores", "placeat");
                            }};
                            createTime = "vel";
                            deleteTime = "rerum";
                            displayName = "mollitia";
                            etag = "voluptas";
                            labels = new java.util.HashMap<String, String>() {{
                                put("reprehenderit", "qui");
                            }};
                            location = "qui";
                            name = "unde";
                            service = "in";
                            type = "autem";
                            uid = "qui";
                            updateTime = "ut";
                        }};
                        response = new Response() {{
                            backendLatency = "itaque";
                            code = "ab";
                            headers = new java.util.HashMap<String, String>() {{
                                put("ullam", "et");
                            }};
                            size = "accusantium";
                            time = "esse";
                        }};
                        source = new Peer() {{
                            ip = "architecto";
                            labels = new java.util.HashMap<String, String>() {{
                                put("velit", "cumque");
                            }};
                            port = "soluta";
                            principal = "sunt";
                            regionCode = "voluptates";
                        }};
                    }};
                    flags = "magni";
                    resources = new openapisdk.models.shared.ResourceInfo[]() {{
                        add(new ResourceInfo() {{
                            container = "optio";
                            location = "qui";
                            name = "earum";
                            permission = "illo";
                            type = "omnis";
                        }}),
                        add(new ResourceInfo() {{
                            container = "ut";
                            location = "consequatur";
                            name = "dolor";
                            permission = "commodi";
                            type = "error";
                        }}),
                        add(new ResourceInfo() {{
                            container = "reprehenderit";
                            location = "consectetur";
                            name = "nostrum";
                            permission = "ut";
                            type = "laboriosam";
                        }}),
                    }};
                    serviceConfigId = "sed";
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