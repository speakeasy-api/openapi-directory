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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `servicecontrolServicesCheck` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `servicecontrolServicesReport` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
