<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckRequest;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckResponse;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurity;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurityOption1;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Api;
import org.openapis.openapi.models.shared.AttributeContext;
import org.openapis.openapi.models.shared.Auth;
import org.openapis.openapi.models.shared.CheckRequest;
import org.openapis.openapi.models.shared.Peer;
import org.openapis.openapi.models.shared.Request;
import org.openapis.openapi.models.shared.Resource;
import org.openapis.openapi.models.shared.ResourceInfo;
import org.openapis.openapi.models.shared.Response;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicecontrolServicesCheckRequest req = new ServicecontrolServicesCheckRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                checkRequest = new CheckRequest() {{
                    attributes = new AttributeContext() {{
                        api = new Api() {{
                            operation = "distinctio";
                            protocol = "quibusdam";
                            service = "unde";
                            version = "nulla";
                        }};;
                        destination = new Peer() {{
                            ip = "corrupti";
                            labels = new java.util.HashMap<String, String>() {{
                                put("vel", "error");
                                put("deserunt", "suscipit");
                                put("iure", "magnam");
                                put("debitis", "ipsa");
                            }};
                            port = "delectus";
                            principal = "tempora";
                            regionCode = "suscipit";
                        }};;
                        extensions = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                                put("nisi", "recusandae");
                                put("temporibus", "ab");
                            }}),
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
                        }};;
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
                            }};;
                            headers = new java.util.HashMap<String, String>() {{
                                put("aspernatur", "perferendis");
                                put("ad", "natus");
                                put("sed", "iste");
                            }};
                            host = "dolor";
                            id = "96fea759-6eb1-40fa-aa23-52c5955907af";
                            method = "sapiente";
                            path = "architecto";
                            protocol = "mollitia";
                            query = "dolorem";
                            reason = "culpa";
                            scheme = "consequuntur";
                            size = "repellat";
                            time = "mollitia";
                        }};;
                        resource = new Resource() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("numquam", "commodi");
                                put("quam", "molestiae");
                                put("velit", "error");
                            }};
                            createTime = "quia";
                            deleteTime = "quis";
                            displayName = "vitae";
                            etag = "laborum";
                            labels = new java.util.HashMap<String, String>() {{
                                put("enim", "odit");
                                put("quo", "sequi");
                                put("tenetur", "ipsam");
                            }};
                            location = "id";
                            name = "Richard Boyer";
                            service = "laborum";
                            type = "quasi";
                            uid = "reiciendis";
                            updateTime = "voluptatibus";
                        }};;
                        response = new Response() {{
                            backendLatency = "vero";
                            code = "nihil";
                            headers = new java.util.HashMap<String, String>() {{
                                put("voluptatibus", "ipsa");
                                put("omnis", "voluptate");
                                put("cum", "perferendis");
                            }};
                            size = "doloremque";
                            time = "reprehenderit";
                        }};;
                        source = new Peer() {{
                            ip = "ut";
                            labels = new java.util.HashMap<String, String>() {{
                                put("dicta", "corporis");
                                put("dolore", "iusto");
                                put("dicta", "harum");
                                put("enim", "accusamus");
                            }};
                            port = "commodi";
                            principal = "repudiandae";
                            regionCode = "quae";
                        }};;
                    }};;
                    flags = "ipsum";
                    resources = new org.openapis.openapi.models.shared.ResourceInfo[]{{
                        add(new ResourceInfo() {{
                            container = "molestias";
                            location = "excepturi";
                            name = "Joel Lang";
                            permission = "quasi";
                            type = "repudiandae";
                        }}),
                        add(new ResourceInfo() {{
                            container = "sint";
                            location = "veritatis";
                            name = "Miss Randall Hamill";
                            permission = "explicabo";
                            type = "deserunt";
                        }}),
                        add(new ResourceInfo() {{
                            container = "distinctio";
                            location = "quibusdam";
                            name = "Pauline Deckow";
                            permission = "quos";
                            type = "perferendis";
                        }}),
                    }};
                    serviceConfigId = "magni";
                }};;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "fugit";
                key = "dolorum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "facilis";
                uploadProtocol = "tempore";
            }};            

            ServicecontrolServicesCheckResponse res = sdk.services.servicecontrolServicesCheck(req, new ServicecontrolServicesCheckSecurity() {{
                option1 = new ServicecontrolServicesCheckSecurityOption1("labore", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->