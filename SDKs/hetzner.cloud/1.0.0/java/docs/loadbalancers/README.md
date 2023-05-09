# loadBalancers

### Available Operations

* [deleteLoadBalancersId](#deleteloadbalancersid) - Delete a Load Balancer
* [getLoadBalancers](#getloadbalancers) - Get all Load Balancers
* [getLoadBalancersId](#getloadbalancersid) - Get a Load Balancer
* [getLoadBalancersIdMetrics](#getloadbalancersidmetrics) - Get Metrics for a LoadBalancer
* [postLoadBalancers](#postloadbalancers) - Create a Load Balancer
* [putLoadBalancersId](#putloadbalancersid) - Update a Load Balancer

## deleteLoadBalancersId

Deletes a Load Balancer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLoadBalancersIdRequest;
import org.openapis.openapi.models.operations.DeleteLoadBalancersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLoadBalancersIdRequest req = new DeleteLoadBalancersIdRequest(469249L);            

            DeleteLoadBalancersIdResponse res = sdk.loadBalancers.deleteLoadBalancersId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoadBalancers

Gets all existing Load Balancers that you have available.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancersRequest;
import org.openapis.openapi.models.operations.GetLoadBalancersResponse;
import org.openapis.openapi.models.operations.GetLoadBalancersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLoadBalancersRequest req = new GetLoadBalancersRequest() {{
                labelSelector = "repellat";
                name = "Louis Turner Sr.";
                sort = GetLoadBalancersSortEnum.NAME_ASC;
            }};            

            GetLoadBalancersResponse res = sdk.loadBalancers.getLoadBalancers(req);

            if (res.getLoadBalancers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoadBalancersId

Gets a specific Load Balancer object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancersIdRequest;
import org.openapis.openapi.models.operations.GetLoadBalancersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLoadBalancersIdRequest req = new GetLoadBalancersIdRequest(615560L);            

            GetLoadBalancersIdResponse res = sdk.loadBalancers.getLoadBalancersId(req);

            if (res.getLoadBalancersId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoadBalancersIdMetrics

You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.

Depending on the type you will get different time series data:

|Type | Timeseries | Unit | Description |
|---- |------------|------|-------------|
| open_connections | open_connections | number | Open connections |
| connections_per_second | connections_per_second | connections/s | Connections per second |
| requests_per_second | requests_per_second | requests/s | Requests per second |
| bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
|| bandwidth.out | bytes/s | Egress bandwidth |

Metrics are available for the last 30 days only.

If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.

We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancersIdMetricsRequest;
import org.openapis.openapi.models.operations.GetLoadBalancersIdMetricsResponse;
import org.openapis.openapi.models.operations.GetLoadBalancersIdMetricsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLoadBalancersIdMetricsRequest req = new GetLoadBalancersIdMetricsRequest("magni", 123820L, "quo", GetLoadBalancersIdMetricsTypeEnum.BANDWIDTH) {{
                step = "pariatur";
            }};            

            GetLoadBalancersIdMetricsResponse res = sdk.loadBalancers.getLoadBalancersIdMetrics(req);

            if (res.getLoadBalancersIdMetrics200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancers

Creates a Load Balancer.

#### Call specific error codes

| Code                                    | Description                                                                                           |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------|
| `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
| `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
| `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
| `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
| `source_port_already_used`              | The source port you are trying to add is already in use                                               |
| `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLabels;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHTTP;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatusStatusEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetIP;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetLabelSelector;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTarget;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetLoadBalancerTargetServer;
import org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersCreateLoadBalancerRequest req = new PostLoadBalancersCreateLoadBalancerRequest(                new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum.LEAST_CONNECTIONS);, "lb11", "Web Frontend") {{
                labels = new PostLoadBalancersCreateLoadBalancerRequestLabels() {{
                    labelkey = "value";
                }};;
                location = "ea";
                network = 123L;
                networkZone = "eu-central";
                publicInterface = true;
                services = new org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService[]{{
                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService(80L,                 new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck(15L, 4711L, PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum.HTTP, 3L, 10L) {{
                                        http = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp("example.com", "/") {{
                                            response = "{"status": "ok"}";
                                            statusCodes = new String[]{{
                                                add("quidem"),
                                                add("ipsam"),
                                                add("voluptate"),
                                                add("autem"),
                                            }};
                                            tls = false;
                                        }};;
                                    }};, 443L, PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum.HTTPS, false) {{
                        destinationPort = 80L;
                        healthCheck = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck(15L, 4711L, PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum.HTTP, 3L, 10L) {{
                            http = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp("example.com", "/") {{
                                domain = "example.com";
                                path = "/";
                                response = "{"status": "ok"}";
                                statusCodes = new String[]{{
                                    add("ea"),
                                }};
                                tls = false;
                            }};
                            interval = 15L;
                            port = 4711L;
                            protocol = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum.HTTP;
                            retries = 3L;
                            timeout = 10L;
                        }};
                        http = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHTTP() {{
                            certificates = new Long[]{{
                                add(69167L),
                            }};
                            cookieLifetime = 300L;
                            cookieName = "HCLBSTICKY";
                            redirectHttp = true;
                            stickySessions = true;
                        }};
                        listenPort = 443L;
                        protocol = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum.HTTPS;
                        proxyprotocol = false;
                    }}),
                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService(80L,                 new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck(15L, 4711L, PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum.HTTP, 3L, 10L) {{
                                        http = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp("example.com", "/") {{
                                            response = "{"status": "ok"}";
                                            statusCodes = new String[]{{
                                                add("corporis"),
                                                add("hic"),
                                                add("libero"),
                                                add("nobis"),
                                            }};
                                            tls = false;
                                        }};;
                                    }};, 443L, PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum.HTTPS, false) {{
                        destinationPort = 80L;
                        healthCheck = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck(15L, 4711L, PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum.HTTP, 3L, 10L) {{
                            http = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp("example.com", "/") {{
                                domain = "example.com";
                                path = "/";
                                response = "{"status": "ok"}";
                                statusCodes = new String[]{{
                                    add("eaque"),
                                    add("pariatur"),
                                    add("nemo"),
                                }};
                                tls = false;
                            }};
                            interval = 15L;
                            port = 4711L;
                            protocol = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum.HTTP;
                            retries = 3L;
                            timeout = 10L;
                        }};
                        http = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHTTP() {{
                            certificates = new Long[]{{
                                add(16627L),
                                add(855804L),
                                add(230742L),
                                add(11714L),
                            }};
                            cookieLifetime = 300L;
                            cookieName = "HCLBSTICKY";
                            redirectHttp = true;
                            stickySessions = true;
                        }};
                        listenPort = 443L;
                        protocol = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum.HTTPS;
                        proxyprotocol = false;
                    }}),
                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService(80L,                 new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck(15L, 4711L, PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum.HTTP, 3L, 10L) {{
                                        http = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp("example.com", "/") {{
                                            response = "{"status": "ok"}";
                                            statusCodes = new String[]{{
                                                add("eos"),
                                            }};
                                            tls = false;
                                        }};;
                                    }};, 443L, PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum.HTTPS, false) {{
                        destinationPort = 80L;
                        healthCheck = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck(15L, 4711L, PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum.HTTP, 3L, 10L) {{
                            http = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp("example.com", "/") {{
                                domain = "example.com";
                                path = "/";
                                response = "{"status": "ok"}";
                                statusCodes = new String[]{{
                                    add("quis"),
                                }};
                                tls = false;
                            }};
                            interval = 15L;
                            port = 4711L;
                            protocol = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum.HTTP;
                            retries = 3L;
                            timeout = 10L;
                        }};
                        http = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHTTP() {{
                            certificates = new Long[]{{
                                add(489549L),
                                add(54338L),
                                add(338985L),
                            }};
                            cookieLifetime = 300L;
                            cookieName = "HCLBSTICKY";
                            redirectHttp = true;
                            stickySessions = true;
                        }};
                        listenPort = 443L;
                        protocol = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum.HTTPS;
                        proxyprotocol = false;
                    }}),
                }};
                targets = new org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget[]{{
                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum.IP) {{
                        healthStatus = new org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus[]{{
                            add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus() {{
                                listenPort = 443L;
                                status = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatusStatusEnum.HEALTHY;
                            }}),
                        }};
                        ip = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetIP("203.0.113.1") {{
                            ip = "203.0.113.1";
                        }};
                        labelSelector = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetLabelSelector("env=prod") {{
                            selector = "env=prod";
                        }};
                        server = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer(80L) {{
                            id = 80L;
                        }};
                        targets = new org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTarget[]{{
                            add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTarget() {{
                                healthStatus = new org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus[]{{
                                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus() {{
                                        listenPort = 443L;
                                        status = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum.HEALTHY;
                                    }}),
                                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus() {{
                                        listenPort = 443L;
                                        status = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum.HEALTHY;
                                    }}),
                                }};
                                server = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetLoadBalancerTargetServer(80L) {{
                                    id = 80L;
                                }};
                                type = "server";
                                usePrivateIp = false;
                            }}),
                            add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTarget() {{
                                healthStatus = new org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus[]{{
                                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus() {{
                                        listenPort = 443L;
                                        status = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum.HEALTHY;
                                    }}),
                                }};
                                server = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetLoadBalancerTargetServer(80L) {{
                                    id = 80L;
                                }};
                                type = "server";
                                usePrivateIp = false;
                            }}),
                            add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTarget() {{
                                healthStatus = new org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus[]{{
                                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus() {{
                                        listenPort = 443L;
                                        status = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum.HEALTHY;
                                    }}),
                                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus() {{
                                        listenPort = 443L;
                                        status = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum.HEALTHY;
                                    }}),
                                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus() {{
                                        listenPort = 443L;
                                        status = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum.HEALTHY;
                                    }}),
                                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus() {{
                                        listenPort = 443L;
                                        status = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum.HEALTHY;
                                    }}),
                                }};
                                server = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetLoadBalancerTargetServer(80L) {{
                                    id = 80L;
                                }};
                                type = "server";
                                usePrivateIp = false;
                            }}),
                            add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTarget() {{
                                healthStatus = new org.openapis.openapi.models.operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus[]{{
                                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus() {{
                                        listenPort = 443L;
                                        status = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum.HEALTHY;
                                    }}),
                                    add(new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus() {{
                                        listenPort = 443L;
                                        status = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum.HEALTHY;
                                    }}),
                                }};
                                server = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetLoadBalancerTargetServer(80L) {{
                                    id = 80L;
                                }};
                                type = "server";
                                usePrivateIp = false;
                            }}),
                        }};
                        type = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum.IP;
                        usePrivateIp = false;
                    }}),
                }};
            }};            

            PostLoadBalancersResponse res = sdk.loadBalancers.postLoadBalancers(req);

            if (res.postLoadBalancers201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putLoadBalancersId

Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.

Note that when updating labels, the Load Balancer’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLoadBalancersIdRequest;
import org.openapis.openapi.models.operations.PutLoadBalancersIdRequestBody;
import org.openapis.openapi.models.operations.PutLoadBalancersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutLoadBalancersIdRequest req = new PutLoadBalancersIdRequest(608253L) {{
                requestBody = new PutLoadBalancersIdRequestBody() {{
                    labels = new java.util.HashMap<String, Object>() {{
                        put("perspiciatis", "voluptatem");
                        put("porro", "consequuntur");
                        put("blanditiis", "error");
                    }};
                    name = "new-name";
                }};;
            }};            

            PutLoadBalancersIdResponse res = sdk.loadBalancers.putLoadBalancersId(req);

            if (res.putLoadBalancersId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
