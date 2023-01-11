# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `servicecontrolServicesCheck` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `servicecontrolServicesReport` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
