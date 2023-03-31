<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurityOption1;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurityOption2;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurity;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckPathParams;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckQueryParams;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckRequest;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckResponse;
import org.openapis.openapi.models.shared.CheckRequest;
import org.openapis.openapi.models.shared.ResourceInfo;
import org.openapis.openapi.models.shared.AttributeContext;
import org.openapis.openapi.models.shared.Peer;
import org.openapis.openapi.models.shared.Response;
import org.openapis.openapi.models.shared.Resource;
import org.openapis.openapi.models.shared.Request;
import org.openapis.openapi.models.shared.Auth;
import org.openapis.openapi.models.shared.Api;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    serviceName = "corrupti";
                }};
                queryParams = new ServicecontrolServicesCheckQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new CheckRequest() {{
                    attributes = new AttributeContext() {{
                        api = new Api() {{
                            operation = "suscipit";
                            protocol = "iure";
                            service = "magnam";
                            version = "debitis";
                        }};
                        destination = new Peer() {{
                            ip = "ipsa";
                            labels = new java.util.HashMap<String, String>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }};
                            port = "nisi";
                            principal = "recusandae";
                            regionCode = "temporibus";
                        }};
                        extensions = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("veritatis", "deserunt");
                                put("perferendis", "ipsam");
                            }}),
                        }};
                        origin = new Peer() {{
                            ip = "repellendus";
                            labels = new java.util.HashMap<String, String>() {{
                                put("quo", "odit");
                                put("at", "at");
                                put("maiores", "molestiae");
                                put("quod", "quod");
                            }};
                            port = "esse";
                            principal = "totam";
                            regionCode = "porro";
                        }};
                        request = new Request() {{
                            auth = new Auth() {{
                                accessLevels = new String[]{{
                                    add("dicta"),
                                    add("nam"),
                                    add("officia"),
                                }};
                                audiences = new String[]{{
                                    add("fugit"),
                                    add("deleniti"),
                                    add("hic"),
                                }};
                                claims = new java.util.HashMap<String, Object>() {{
                                    put("totam", "beatae");
                                    put("commodi", "molestiae");
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