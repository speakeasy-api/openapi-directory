# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### services

* `servicecontrolServicesCheck` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `servicecontrolServicesReport` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
