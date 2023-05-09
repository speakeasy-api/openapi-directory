# webhooks

### Available Operations

* [createNetworkWebhooksHttpServer](#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [createNetworkWebhooksPayloadTemplate](#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [createNetworkWebhooksWebhookTest](#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [deleteNetworkWebhooksHttpServer](#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [deleteNetworkWebhooksPayloadTemplate](#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [getNetworkWebhooksHttpServer](#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [getNetworkWebhooksHttpServers](#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [getNetworkWebhooksPayloadTemplate](#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [getNetworkWebhooksPayloadTemplates](#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [getNetworkWebhooksWebhookTest](#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [getOrganizationWebhooksAlertTypes](#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts
* [getOrganizationWebhooksLogs](#getorganizationwebhookslogs) - Return the log of webhook POSTs sent
* [updateNetworkWebhooksHttpServer](#updatenetworkwebhookshttpserver) - Update an HTTP server
* [updateNetworkWebhooksPayloadTemplate](#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network

## createNetworkWebhooksHttpServer

Add an HTTP server to a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWebhooksHttpServerRequest req = new CreateNetworkWebhooksHttpServerRequest(                new CreateNetworkWebhooksHttpServerRequestBody("atque", "est") {{
                                payloadTemplate = new CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate() {{
                                    name = "Alvin Willms";
                                    payloadTemplateId = "voluptatem";
                                }};;
                                sharedSecret = "atque";
                            }};, "dolor");            

            CreateNetworkWebhooksHttpServerResponse res = sdk.webhooks.createNetworkWebhooksHttpServer(req);

            if (res.createNetworkWebhooksHttpServer201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkWebhooksPayloadTemplate

Create a webhook payload template for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWebhooksPayloadTemplateRequest req = new CreateNetworkWebhooksPayloadTemplateRequest(                new CreateNetworkWebhooksPayloadTemplateRequestBody("vitae") {{
                                body = "minima";
                                bodyFile = "temporibus";
                                headers = new org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders[]{{
                                    add(new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                                        name = "Vicki McClure";
                                        template = "libero";
                                    }}),
                                    add(new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                                        name = "Miss Kristi Lesch";
                                        template = "distinctio";
                                    }}),
                                    add(new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                                        name = "Kim Bernier II";
                                        template = "tenetur";
                                    }}),
                                    add(new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                                        name = "Laverne Satterfield";
                                        template = "veritatis";
                                    }}),
                                }};
                                headersFile = "vitae";
                            }};, "aliquam");            

            CreateNetworkWebhooksPayloadTemplateResponse res = sdk.webhooks.createNetworkWebhooksPayloadTemplate(req);

            if (res.createNetworkWebhooksPayloadTemplate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkWebhooksWebhookTest

Send a test webhook for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksWebhookTestRequest;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksWebhookTestRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksWebhookTestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWebhooksWebhookTestRequest req = new CreateNetworkWebhooksWebhookTestRequest(                new CreateNetworkWebhooksWebhookTestRequestBody("velit") {{
                                alertTypeId = "recusandae";
                                payloadTemplateId = "incidunt";
                                payloadTemplateName = "officiis";
                                sharedSecret = "beatae";
                            }};, "accusantium");            

            CreateNetworkWebhooksWebhookTestResponse res = sdk.webhooks.createNetworkWebhooksWebhookTest(req);

            if (res.createNetworkWebhooksWebhookTest201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkWebhooksHttpServer

Delete an HTTP server from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWebhooksHttpServerRequest req = new DeleteNetworkWebhooksHttpServerRequest("recusandae", "nisi");            

            DeleteNetworkWebhooksHttpServerResponse res = sdk.webhooks.deleteNetworkWebhooksHttpServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkWebhooksPayloadTemplate

Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWebhooksPayloadTemplateRequest req = new DeleteNetworkWebhooksPayloadTemplateRequest("porro", "delectus");            

            DeleteNetworkWebhooksPayloadTemplateResponse res = sdk.webhooks.deleteNetworkWebhooksPayloadTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksHttpServer

Return an HTTP server for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksHttpServerRequest req = new GetNetworkWebhooksHttpServerRequest("quas", "vero");            

            GetNetworkWebhooksHttpServerResponse res = sdk.webhooks.getNetworkWebhooksHttpServer(req);

            if (res.getNetworkWebhooksHttpServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksHttpServers

List the HTTP servers for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServersRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksHttpServersRequest req = new GetNetworkWebhooksHttpServersRequest("ab");            

            GetNetworkWebhooksHttpServersResponse res = sdk.webhooks.getNetworkWebhooksHttpServers(req);

            if (res.getNetworkWebhooksHttpServers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksPayloadTemplate

Get the webhook payload template for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksPayloadTemplateRequest req = new GetNetworkWebhooksPayloadTemplateRequest("provident", "dignissimos");            

            GetNetworkWebhooksPayloadTemplateResponse res = sdk.webhooks.getNetworkWebhooksPayloadTemplate(req);

            if (res.getNetworkWebhooksPayloadTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksPayloadTemplates

List the webhook payload templates for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplatesRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksPayloadTemplatesRequest req = new GetNetworkWebhooksPayloadTemplatesRequest("corrupti");            

            GetNetworkWebhooksPayloadTemplatesResponse res = sdk.webhooks.getNetworkWebhooksPayloadTemplates(req);

            if (res.getNetworkWebhooksPayloadTemplates200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksWebhookTest

Return the status of a webhook test for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksWebhookTestRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksWebhookTestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksWebhookTestRequest req = new GetNetworkWebhooksWebhookTestRequest("vitae", "sint");            

            GetNetworkWebhooksWebhookTestResponse res = sdk.webhooks.getNetworkWebhooksWebhookTest(req);

            if (res.getNetworkWebhooksWebhookTest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationWebhooksAlertTypes

Return a list of alert types to be used with managing webhook alerts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksAlertTypesProductTypeEnum;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksAlertTypesRequest;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksAlertTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationWebhooksAlertTypesRequest req = new GetOrganizationWebhooksAlertTypesRequest("illum") {{
                productType = GetOrganizationWebhooksAlertTypesProductTypeEnum.CAMERA;
            }};            

            GetOrganizationWebhooksAlertTypesResponse res = sdk.webhooks.getOrganizationWebhooksAlertTypes(req);

            if (res.getOrganizationWebhooksAlertTypes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationWebhooksLogs

Return the log of webhook POSTs sent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksLogsRequest;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationWebhooksLogsRequest req = new GetOrganizationWebhooksLogsRequest("eum") {{
                endingBefore = "tenetur";
                perPage = 401869L;
                startingAfter = "quam";
                t0 = "odit";
                t1 = "eligendi";
                timespan = 2835.49;
                url = "sed";
            }};            

            GetOrganizationWebhooksLogsResponse res = sdk.webhooks.getOrganizationWebhooksLogs(req);

            if (res.getOrganizationWebhooksLogs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWebhooksHttpServer

Update an HTTP server. To change a URL, create a new HTTP server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWebhooksHttpServerRequest req = new UpdateNetworkWebhooksHttpServerRequest("voluptas", "enim") {{
                requestBody = new UpdateNetworkWebhooksHttpServerRequestBody() {{
                    name = "Frank Kirlin";
                    payloadTemplate = new UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate() {{
                        payloadTemplateId = "laboriosam";
                    }};;
                    sharedSecret = "cupiditate";
                }};;
            }};            

            UpdateNetworkWebhooksHttpServerResponse res = sdk.webhooks.updateNetworkWebhooksHttpServer(req);

            if (res.updateNetworkWebhooksHttpServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWebhooksPayloadTemplate

Update a webhook payload template for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWebhooksPayloadTemplateRequest req = new UpdateNetworkWebhooksPayloadTemplateRequest("odio", "alias") {{
                requestBody = new UpdateNetworkWebhooksPayloadTemplateRequestBody() {{
                    body = "officia";
                    bodyFile = "aliquid";
                    headers = new org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders[]{{
                        add(new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                            name = "Curtis Gleichner";
                            template = "eos";
                        }}),
                        add(new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                            name = "Miss Stewart Wolf";
                            template = "soluta";
                        }}),
                        add(new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                            name = "Elijah Schinner";
                            template = "voluptatum";
                        }}),
                    }};
                    headersFile = "soluta";
                    name = "Muriel O'Connell";
                }};;
            }};            

            UpdateNetworkWebhooksPayloadTemplateResponse res = sdk.webhooks.updateNetworkWebhooksPayloadTemplate(req);

            if (res.updateNetworkWebhooksPayloadTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
