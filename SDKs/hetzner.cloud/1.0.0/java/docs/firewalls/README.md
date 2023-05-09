# firewalls

## Overview

Firewalls can limit the network access to or from your resources.

* When applying a firewall with no `in` rule all inbound traffic will be dropped. The default for `in` is `DROP`.
* When applying a firewall with no `out` rule all outbound traffic will be accepted. The default for `out` is `ACCEPT`.


### Available Operations

* [deleteFirewallsId](#deletefirewallsid) - Delete a Firewall
* [getFirewalls](#getfirewalls) - Get all Firewalls
* [getFirewallsId](#getfirewallsid) - Get a Firewall
* [postFirewalls](#postfirewalls) - Create a Firewall
* [putFirewallsId](#putfirewallsid) - Update a Firewall

## deleteFirewallsId

Deletes a Firewall.

#### Call specific error codes

| Code                 | Description                               |
|--------------------- |-------------------------------------------|
| `resource_in_use`    | Firewall must not be in use to be deleted |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFirewallsIdRequest;
import org.openapis.openapi.models.operations.DeleteFirewallsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFirewallsIdRequest req = new DeleteFirewallsIdRequest(138183L);            

            DeleteFirewallsIdResponse res = sdk.firewalls.deleteFirewallsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFirewalls

Returns all Firewall objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFirewallsRequest;
import org.openapis.openapi.models.operations.GetFirewallsResponse;
import org.openapis.openapi.models.operations.GetFirewallsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFirewallsRequest req = new GetFirewallsRequest() {{
                labelSelector = "quo";
                name = "Mandy Hills";
                sort = GetFirewallsSortEnum.ID;
            }};            

            GetFirewallsResponse res = sdk.firewalls.getFirewalls(req);

            if (res.firewallsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFirewallsId

Gets a specific Firewall object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFirewallsIdRequest;
import org.openapis.openapi.models.operations.GetFirewallsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFirewallsIdRequest req = new GetFirewallsIdRequest(97101L);            

            GetFirewallsIdResponse res = sdk.firewalls.getFirewallsId(req);

            if (res.firewallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFirewalls

Creates a new Firewall.

#### Call specific error codes

| Code                          | Description                                                   |
|------------------------------ |-------------------------------------------------------------- |
| `server_already_added`        | Server added more than one time to resource                   |
| `incompatible_network_type`   | The Network type is incompatible for the given resource       |
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFirewallsCreateFirewallRequest;
import org.openapis.openapi.models.operations.PostFirewallsCreateFirewallRequestApplyTo;
import org.openapis.openapi.models.operations.PostFirewallsCreateFirewallRequestApplyToLabelSelector;
import org.openapis.openapi.models.operations.PostFirewallsCreateFirewallRequestApplyToServer;
import org.openapis.openapi.models.operations.PostFirewallsCreateFirewallRequestApplyToTypeEnum;
import org.openapis.openapi.models.operations.PostFirewallsCreateFirewallRequestRule;
import org.openapis.openapi.models.operations.PostFirewallsCreateFirewallRequestRuleDirectionEnum;
import org.openapis.openapi.models.operations.PostFirewallsCreateFirewallRequestRuleProtocolEnum;
import org.openapis.openapi.models.operations.PostFirewallsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFirewallsCreateFirewallRequest req = new PostFirewallsCreateFirewallRequest("Corporate Intranet Protection") {{
                applyTo = new org.openapis.openapi.models.operations.PostFirewallsCreateFirewallRequestApplyTo[]{{
                    add(new PostFirewallsCreateFirewallRequestApplyTo(PostFirewallsCreateFirewallRequestApplyToTypeEnum.LABEL_SELECTOR) {{
                        labelSelector = new PostFirewallsCreateFirewallRequestApplyToLabelSelector("laborum") {{
                            selector = "temporibus";
                        }};
                        server = new PostFirewallsCreateFirewallRequestApplyToServer(971945L) {{
                            id = 96098L;
                        }};
                        type = PostFirewallsCreateFirewallRequestApplyToTypeEnum.LABEL_SELECTOR;
                    }}),
                    add(new PostFirewallsCreateFirewallRequestApplyTo(PostFirewallsCreateFirewallRequestApplyToTypeEnum.SERVER) {{
                        labelSelector = new PostFirewallsCreateFirewallRequestApplyToLabelSelector("praesentium") {{
                            selector = "nihil";
                        }};
                        server = new PostFirewallsCreateFirewallRequestApplyToServer(55714L) {{
                            id = 976762L;
                        }};
                        type = PostFirewallsCreateFirewallRequestApplyToTypeEnum.LABEL_SELECTOR;
                    }}),
                    add(new PostFirewallsCreateFirewallRequestApplyTo(PostFirewallsCreateFirewallRequestApplyToTypeEnum.LABEL_SELECTOR) {{
                        labelSelector = new PostFirewallsCreateFirewallRequestApplyToLabelSelector("perferendis") {{
                            selector = "cum";
                        }};
                        server = new PostFirewallsCreateFirewallRequestApplyToServer(441711L) {{
                            id = 39187L;
                        }};
                        type = PostFirewallsCreateFirewallRequestApplyToTypeEnum.SERVER;
                    }}),
                }};
                labels = new java.util.HashMap<String, Object>() {{
                    put("corporis", "dolore");
                }};
                rules = new org.openapis.openapi.models.operations.PostFirewallsCreateFirewallRequestRule[]{{
                    add(new PostFirewallsCreateFirewallRequestRule(PostFirewallsCreateFirewallRequestRuleDirectionEnum.OUT, PostFirewallsCreateFirewallRequestRuleProtocolEnum.ICMP) {{
                        description = "dicta";
                        destinationIps = new String[]{{
                            add("enim"),
                            add("accusamus"),
                            add("commodi"),
                        }};
                        direction = PostFirewallsCreateFirewallRequestRuleDirectionEnum.OUT;
                        port = "80";
                        protocol = PostFirewallsCreateFirewallRequestRuleProtocolEnum.TCP;
                        sourceIps = new String[]{{
                            add("quidem"),
                        }};
                    }}),
                    add(new PostFirewallsCreateFirewallRequestRule(PostFirewallsCreateFirewallRequestRuleDirectionEnum.IN, PostFirewallsCreateFirewallRequestRuleProtocolEnum.TCP) {{
                        description = "pariatur";
                        destinationIps = new String[]{{
                            add("praesentium"),
                            add("rem"),
                        }};
                        direction = PostFirewallsCreateFirewallRequestRuleDirectionEnum.OUT;
                        port = "80";
                        protocol = PostFirewallsCreateFirewallRequestRuleProtocolEnum.TCP;
                        sourceIps = new String[]{{
                            add("sint"),
                            add("veritatis"),
                            add("itaque"),
                            add("incidunt"),
                        }};
                    }}),
                }};
            }};            

            PostFirewallsResponse res = sdk.firewalls.postFirewalls(req);

            if (res.createFirewallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putFirewallsId

Updates the Firewall.

Note that when updating labels, the Firewall's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Firewall object changes during the request, the response will be a “conflict” error.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFirewallsIdRequest;
import org.openapis.openapi.models.operations.PutFirewallsIdResponse;
import org.openapis.openapi.models.operations.PutFirewallsIdUpdateFirewallRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutFirewallsIdRequest req = new PutFirewallsIdRequest(667411L) {{
                requestBody = new PutFirewallsIdUpdateFirewallRequest() {{
                    labels = new java.util.HashMap<String, Object>() {{
                        put("explicabo", "deserunt");
                        put("distinctio", "quibusdam");
                        put("labore", "modi");
                        put("qui", "aliquid");
                    }};
                    name = "new-name";
                }};;
            }};            

            PutFirewallsIdResponse res = sdk.firewalls.putFirewallsId(req);

            if (res.firewallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
