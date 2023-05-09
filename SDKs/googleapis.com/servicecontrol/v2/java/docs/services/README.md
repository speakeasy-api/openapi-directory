# services

### Available Operations

* [servicecontrolServicesCheck](#servicecontrolservicescheck) - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* [servicecontrolServicesReport](#servicecontrolservicesreport) - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

## servicecontrolServicesCheck

Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

### Example Usage

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

            ServicecontrolServicesCheckRequest req = new ServicecontrolServicesCheckRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                checkRequest = new CheckRequest() {{
                    attributes = new AttributeContext() {{
                        api = new Api() {{
                            operation = "eligendi";
                            protocol = "sint";
                            service = "aliquid";
                            version = "provident";
                        }};;
                        destination = new Peer() {{
                            ip = "necessitatibus";
                            labels = new java.util.HashMap<String, String>() {{
                                put("officia", "dolor");
                                put("debitis", "a");
                                put("dolorum", "in");
                            }};
                            port = "in";
                            principal = "illum";
                            regionCode = "maiores";
                        }};;
                        extensions = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("magnam", "cumque");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("ea", "aliquid");
                                put("laborum", "accusamus");
                                put("non", "occaecati");
                                put("enim", "accusamus");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("quidem", "provident");
                                put("nam", "id");
                                put("blanditiis", "deleniti");
                                put("sapiente", "amet");
                            }}),
                        }};
                        origin = new Peer() {{
                            ip = "deserunt";
                            labels = new java.util.HashMap<String, String>() {{
                                put("vel", "natus");
                                put("omnis", "molestiae");
                            }};
                            port = "perferendis";
                            principal = "nihil";
                            regionCode = "magnam";
                        }};;
                        request = new Request() {{
                            auth = new Auth() {{
                                accessLevels = new String[]{{
                                    add("id"),
                                    add("labore"),
                                    add("labore"),
                                }};
                                audiences = new String[]{{
                                    add("natus"),
                                    add("nobis"),
                                }};
                                claims = new java.util.HashMap<String, Object>() {{
                                    put("vero", "aspernatur");
                                    put("architecto", "magnam");
                                }};
                                presenter = "et";
                                principal = "excepturi";
                            }};;
                            headers = new java.util.HashMap<String, String>() {{
                                put("provident", "quos");
                                put("sint", "accusantium");
                            }};
                            host = "mollitia";
                            id = "fa563e25-16fe-44c8-b711-e5b7fd2ed028";
                            method = "natus";
                            path = "magni";
                            protocol = "sunt";
                            query = "quo";
                            reason = "illum";
                            scheme = "pariatur";
                            size = "maxime";
                            time = "ea";
                        }};;
                        resource = new Resource() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("odit", "ea");
                                put("accusantium", "ab");
                                put("maiores", "quidem");
                            }};
                            createTime = "ipsam";
                            deleteTime = "voluptate";
                            displayName = "autem";
                            etag = "nam";
                            labels = new java.util.HashMap<String, String>() {{
                                put("pariatur", "nemo");
                            }};
                            location = "voluptatibus";
                            name = "Miss Ginger Feeney";
                            service = "hic";
                            type = "libero";
                            uid = "nobis";
                            updateTime = "dolores";
                        }};;
                        response = new Response() {{
                            backendLatency = "quis";
                            code = "totam";
                            headers = new java.util.HashMap<String, String>() {{
                                put("eaque", "quis");
                                put("nesciunt", "eos");
                            }};
                            size = "perferendis";
                            time = "dolores";
                        }};;
                        source = new Peer() {{
                            ip = "minus";
                            labels = new java.util.HashMap<String, String>() {{
                                put("dolor", "vero");
                                put("nostrum", "hic");
                            }};
                            port = "recusandae";
                            principal = "omnis";
                            regionCode = "facilis";
                        }};;
                    }};;
                    flags = "perspiciatis";
                    resources = new org.openapis.openapi.models.shared.ResourceInfo[]{{
                        add(new ResourceInfo() {{
                            container = "porro";
                            location = "consequuntur";
                            name = "Jeremiah Beatty";
                            permission = "adipisci";
                            type = "asperiores";
                        }}),
                    }};
                    serviceConfigId = "earum";
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "deleniti";
                key = "pariatur";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "libero";
                uploadProtocol = "delectus";
            }};            

            ServicecontrolServicesCheckResponse res = sdk.services.servicecontrolServicesCheck(req, new ServicecontrolServicesCheckSecurity() {{
                option1 = new ServicecontrolServicesCheckSecurityOption1("quaerat", "quos") {{
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

## servicecontrolServicesReport

Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicecontrolServicesReportRequest;
import org.openapis.openapi.models.operations.ServicecontrolServicesReportResponse;
import org.openapis.openapi.models.operations.ServicecontrolServicesReportSecurity;
import org.openapis.openapi.models.operations.ServicecontrolServicesReportSecurityOption1;
import org.openapis.openapi.models.operations.ServicecontrolServicesReportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Api;
import org.openapis.openapi.models.shared.AttributeContext;
import org.openapis.openapi.models.shared.Auth;
import org.openapis.openapi.models.shared.Peer;
import org.openapis.openapi.models.shared.ReportRequest;
import org.openapis.openapi.models.shared.Request;
import org.openapis.openapi.models.shared.Resource;
import org.openapis.openapi.models.shared.Response;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicecontrolServicesReportRequest req = new ServicecontrolServicesReportRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                reportRequest = new ReportRequest() {{
                    operations = new org.openapis.openapi.models.shared.AttributeContext[]{{
                        add(new AttributeContext() {{
                            api = new Api() {{
                                operation = "dolor";
                                protocol = "qui";
                                service = "ipsum";
                                version = "hic";
                            }};
                            destination = new Peer() {{
                                ip = "excepturi";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("voluptate", "dignissimos");
                                    put("reiciendis", "amet");
                                    put("dolorum", "numquam");
                                }};
                                port = "veritatis";
                                principal = "ipsa";
                                regionCode = "ipsa";
                            }};
                            extensions = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("quaerat", "accusamus");
                                    put("quidem", "voluptatibus");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("natus", "eos");
                                    put("atque", "sit");
                                }}),
                            }};
                            origin = new Peer() {{
                                ip = "fugiat";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("soluta", "dolorum");
                                }};
                                port = "iusto";
                                principal = "voluptate";
                                regionCode = "dolorum";
                            }};
                            request = new Request() {{
                                auth = new Auth() {{
                                    accessLevels = new String[]{{
                                        add("omnis"),
                                        add("necessitatibus"),
                                        add("distinctio"),
                                    }};
                                    audiences = new String[]{{
                                        add("nihil"),
                                        add("ipsum"),
                                        add("voluptate"),
                                        add("id"),
                                    }};
                                    claims = new java.util.HashMap<String, Object>() {{
                                        put("eius", "aspernatur");
                                        put("perferendis", "amet");
                                        put("optio", "accusamus");
                                        put("ad", "saepe");
                                    }};
                                    presenter = "suscipit";
                                    principal = "deserunt";
                                }};
                                headers = new java.util.HashMap<String, String>() {{
                                    put("minima", "repellendus");
                                    put("totam", "similique");
                                    put("alias", "at");
                                }};
                                host = "quaerat";
                                id = "46ce2af7-a73c-4f3b-a453-f870b326b5a7";
                                method = "ipsum";
                                path = "incidunt";
                                protocol = "qui";
                                query = "cupiditate";
                                reason = "maxime";
                                scheme = "pariatur";
                                size = "soluta";
                                time = "dicta";
                            }};
                            resource = new Resource() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("totam", "incidunt");
                                    put("aspernatur", "dolores");
                                    put("distinctio", "facilis");
                                }};
                                createTime = "aliquid";
                                deleteTime = "quam";
                                displayName = "molestias";
                                etag = "temporibus";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("neque", "fugit");
                                }};
                                location = "magni";
                                name = "Ashley Hermiston";
                                service = "voluptatem";
                                type = "cumque";
                                uid = "soluta";
                                updateTime = "nobis";
                            }};
                            response = new Response() {{
                                backendLatency = "et";
                                code = "saepe";
                                headers = new java.util.HashMap<String, String>() {{
                                    put("veritatis", "nobis");
                                }};
                                size = "quos";
                                time = "tempore";
                            }};
                            source = new Peer() {{
                                ip = "cupiditate";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("delectus", "dolorem");
                                }};
                                port = "dolore";
                                principal = "labore";
                                regionCode = "adipisci";
                            }};
                        }}),
                    }};
                    serviceConfigId = "dolorum";
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "aut";
                fields = "quas";
                key = "itaque";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "repellendus";
                uploadProtocol = "porro";
            }};            

            ServicecontrolServicesReportResponse res = sdk.services.servicecontrolServicesReport(req, new ServicecontrolServicesReportSecurity() {{
                option1 = new ServicecontrolServicesReportSecurityOption1("doloribus", "ut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
