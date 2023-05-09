# servers

## Overview

Servers are virtual machines that can be provisioned.

### Available Operations

* [deleteServersId](#deleteserversid) - Delete a Server
* [getServers](#getservers) - Get all Servers
* [getServersId](#getserversid) - Get a Server
* [getServersIdMetrics](#getserversidmetrics) - Get Metrics for a Server
* [postServers](#postservers) - Create a Server
* [putServersId](#putserversid) - Update a Server

## deleteServersId

Deletes a Server. This immediately removes the Server from your account, and it is no longer accessible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServersIdRequest;
import org.openapis.openapi.models.operations.DeleteServersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServersIdRequest req = new DeleteServersIdRequest(731694L);            

            DeleteServersIdResponse res = sdk.servers.deleteServersId(req);

            if (res.deleteServersId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServers

Returns all existing Server objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServersRequest;
import org.openapis.openapi.models.operations.GetServersResponse;
import org.openapis.openapi.models.operations.GetServersSortEnum;
import org.openapis.openapi.models.operations.GetServersStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServersRequest req = new GetServersRequest() {{
                labelSelector = "cupiditate";
                name = "Dixie Durgan";
                sort = GetServersSortEnum.ID_DESC;
                status = GetServersStatusEnum.REBUILDING;
            }};            

            GetServersResponse res = sdk.servers.getServers(req);

            if (res.getServers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServersId

Returns a specific Server object. The Server must exist inside the Project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServersIdRequest;
import org.openapis.openapi.models.operations.GetServersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServersIdRequest req = new GetServersIdRequest(100294L);            

            GetServersIdResponse res = sdk.servers.getServersId(req);

            if (res.getServersId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServersIdMetrics

Get Metrics for specified Server.

You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.

Depending on the type you will get different time series data

| Type    | Timeseries              | Unit      | Description                                          |
|---------|-------------------------|-----------|------------------------------------------------------|
| cpu     | cpu                     | percent   | Percent CPU usage                                    |
| disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |
|         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |
|         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |
|         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |
| network | network.0.pps.in        | packets/s | Public Network interface packets per second received |
|         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |
|         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |
|         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |

Metrics are available for the last 30 days only.

If you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.

We limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServersIdMetricsRequest;
import org.openapis.openapi.models.operations.GetServersIdMetricsResponse;
import org.openapis.openapi.models.operations.GetServersIdMetricsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServersIdMetricsRequest req = new GetServersIdMetricsRequest("quae", 16429L, "quas", GetServersIdMetricsTypeEnum.NETWORK) {{
                step = "consequatur";
            }};            

            GetServersIdMetricsResponse res = sdk.servers.getServersIdMetrics(req);

            if (res.getServersIdMetrics200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServers

Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersCreateServerRequest;
import org.openapis.openapi.models.operations.PostServersCreateServerRequestFirewalls;
import org.openapis.openapi.models.operations.PostServersCreateServerRequestPublicNet;
import org.openapis.openapi.models.operations.PostServersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersCreateServerRequest req = new PostServersCreateServerRequest("ubuntu-20.04", "my-server", "cx11") {{
                automount = false;
                datacenter = "nbg1-dc3";
                firewalls = new org.openapis.openapi.models.operations.PostServersCreateServerRequestFirewalls[]{{
                    add(new PostServersCreateServerRequestFirewalls() {{
                        firewall = 833038L;
                    }}),
                    add(new PostServersCreateServerRequestFirewalls() {{
                        firewall = 785153L;
                    }}),
                    add(new PostServersCreateServerRequestFirewalls() {{
                        firewall = 984330L;
                    }}),
                }};
                labels = new java.util.HashMap<String, Object>() {{
                    put("facilis", "cupiditate");
                    put("qui", "quae");
                }};
                location = "nbg1";
                networks = new Long[]{{
                    add(485628L),
                    add(580447L),
                    add(977496L),
                }};
                placementGroup = 1L;
                publicNet = new PostServersCreateServerRequestPublicNet() {{
                    enableIpv4 = false;
                    enableIpv6 = false;
                    ipv4 = 787542L;
                    ipv6 = 876506L;
                }};;
                sshKeys = new String[]{{
                    add("quis"),
                    add("ipsum"),
                    add("delectus"),
                }};
                startAfterCreate = true;
                userData = "#cloud-config
            runcmd:
            - [touch, /root/cloud-init-worked]
            ";
                volumes = new Long[]{{
                    add(231701L),
                    add(878870L),
                }};
            }};            

            PostServersResponse res = sdk.servers.postServers(req);

            if (res.createServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putServersId

Updates a Server. You can update a Server’s name and a Server’s labels.
Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
Also note that when updating labels, the Server’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutServersIdRequest;
import org.openapis.openapi.models.operations.PutServersIdResponse;
import org.openapis.openapi.models.operations.PutServersIdUpdateServerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutServersIdRequest req = new PutServersIdRequest(949319L) {{
                requestBody = new PutServersIdUpdateServerRequest() {{
                    labels = new java.util.HashMap<String, Object>() {{
                        put("hic", "distinctio");
                        put("quod", "odio");
                    }};
                    name = "my-server";
                }};;
            }};            

            PutServersIdResponse res = sdk.servers.putServersId(req);

            if (res.putServersId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
