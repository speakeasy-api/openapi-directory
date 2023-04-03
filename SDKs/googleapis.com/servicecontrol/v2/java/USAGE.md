<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurityOption1;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurityOption2;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurity;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckRequest;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CheckRequest;
import org.openapis.openapi.models.shared.ResourceInfo;
import org.openapis.openapi.models.shared.AttributeContext;
import org.openapis.openapi.models.shared.Peer;
import org.openapis.openapi.models.shared.Response;
import org.openapis.openapi.models.shared.Resource;
import org.openapis.openapi.models.shared.Request;
import org.openapis.openapi.models.shared.Auth;
import org.openapis.openapi.models.shared.Api;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicecontrolServicesCheckRequest req = new ServicecontrolServicesCheckRequest() {{
                dollarXgafv = "2";
                checkRequest = new CheckRequest() {{
                    attributes = new AttributeContext() {{
                        api = new Api() {{
                            operation = "provident";
                            protocol = "distinctio";
                            service = "quibusdam";
                            version = "unde";
                        }};
                        destination = new Peer() {{
                            ip = "nulla";
                            labels = new java.util.HashMap<String, String>() {{
                                put("illum", "vel");
                                put("error", "deserunt");
                                put("suscipit", "iure");
                            }};
                            port = "magnam";
                            principal = "debitis";
                            regionCode = "ipsa";
                        }};
                        extensions = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("suscipit", "molestiae");
                                put("minus", "placeat");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("iusto", "excepturi");
                                put("nisi", "recusandae");
                                put("temporibus", "ab");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("veritatis", "deserunt");
                                put("perferendis", "ipsam");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("sapiente", "quo");
                                put("odit", "at");
                                put("at", "maiores");
                                put("molestiae", "quod");
                            }}),
                        }};
                        origin = new Peer() {{
                            ip = "quod";
                            labels = new java.util.HashMap<String, String>() {{
                                put("totam", "porro");
                                put("dolorum", "dicta");
                            }};
                            port = "nam";
                            principal = "officia";
                            regionCode = "occaecati";
                        }};
                        request = new Request() {{
                            auth = new Auth() {{
                                accessLevels = new String[]{{
                                    add("deleniti"),
                                }};
                                audiences = new String[]{{
                                    add("optio"),
                                    add("totam"),
                                    add("beatae"),
                                    add("commodi"),
                                }};
                                claims = new java.util.HashMap<String, Object>() {{
                                    put("modi", "qui");
                                    put("impedit", "cum");
                                }};
                                presenter = "esse";
                                principal = "ipsum";
                            }};
                            headers = new java.util.HashMap<String, String>() {{
                                put("aspernatur", "perferendis");
                                put("ad", "natus");
                                put("sed", "iste");
                            }};
                            host = "dolor";
                            id = "natus";
                            method = "laboriosam";
                            path = "hic";
                            protocol = "saepe";
                            query = "fuga";
                            reason = "in";
                            scheme = "corporis";
                            size = "iste";
                            time = "iure";
                        }};
                        resource = new Resource() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("quidem", "architecto");
                                put("ipsa", "reiciendis");
                                put("est", "mollitia");
                                put("laborum", "dolores");
                            }};
                            createTime = "dolorem";
                            deleteTime = "corporis";
                            displayName = "explicabo";
                            etag = "nobis";
                            labels = new java.util.HashMap<String, String>() {{
                                put("omnis", "nemo");
                                put("minima", "excepturi");
                            }};
                            location = "accusantium";
                            name = "iure";
                            service = "culpa";
                            type = "doloribus";
                            uid = "sapiente";
                            updateTime = "architecto";
                        }};
                        response = new Response() {{
                            backendLatency = "mollitia";
                            code = "dolorem";
                            headers = new java.util.HashMap<String, String>() {{
                                put("consequuntur", "repellat");
                                put("mollitia", "occaecati");
                                put("numquam", "commodi");
                            }};
                            size = "quam";
                            time = "molestiae";
                        }};
                        source = new Peer() {{
                            ip = "velit";
                            labels = new java.util.HashMap<String, String>() {{
                                put("quia", "quis");
                                put("vitae", "laborum");
                                put("animi", "enim");
                            }};
                            port = "odit";
                            principal = "quo";
                            regionCode = "sequi";
                        }};
                    }};
                    flags = "tenetur";
                    resources = new org.openapis.openapi.models.shared.ResourceInfo[]{{
                        add(new ResourceInfo() {{
                            container = "id";
                            location = "possimus";
                            name = "aut";
                            permission = "quasi";
                            type = "error";
                        }}),
                        add(new ResourceInfo() {{
                            container = "temporibus";
                            location = "laborum";
                            name = "quasi";
                            permission = "reiciendis";
                            type = "voluptatibus";
                        }}),
                    }};
                    serviceConfigId = "vero";
                }};
                accessToken = "nihil";
                alt = "media";
                callback = "voluptatibus";
                fields = "ipsa";
                key = "omnis";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "cum";
                serviceName = "perferendis";
                uploadType = "doloremque";
                uploadProtocol = "reprehenderit";
            }}            

            ServicecontrolServicesCheckResponse res = sdk.services.servicecontrolServicesCheck(req, new ServicecontrolServicesCheckSecurity() {{
                option1 = new ServicecontrolServicesCheckSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->