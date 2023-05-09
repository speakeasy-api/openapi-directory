# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createBinding](#createbinding)
* [createCredential](#createcredential)
* [createNotification](#createnotification)
* [createService](#createservice)
* [deleteBinding](#deletebinding)
* [deleteCredential](#deletecredential)
* [deleteService](#deleteservice)
* [fetchBinding](#fetchbinding)
* [fetchCredential](#fetchcredential)
* [fetchService](#fetchservice)
* [listBinding](#listbinding)
* [listCredential](#listcredential)
* [listService](#listservice)
* [updateCredential](#updatecredential)
* [updateService](#updateservice)

## createBinding

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBindingCreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingResponse;
import org.openapis.openapi.models.operations.CreateBindingSecurity;
import org.openapis.openapi.models.shared.BindingEnumBindingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBindingRequest req = new CreateBindingRequest("debitis") {{
                requestBody = new CreateBindingCreateBindingRequest("ipsa", BindingEnumBindingTypeEnum.ALEXA, "tempora") {{
                    credentialSid = "suscipit";
                    endpoint = "molestiae";
                    notificationProtocolVersion = "minus";
                    tag = new String[]{{
                        add("voluptatum"),
                        add("iusto"),
                        add("excepturi"),
                        add("nisi"),
                    }};
                }};;
            }};            

            CreateBindingResponse res = sdk.sdk.createBinding(req, new CreateBindingSecurity("recusandae", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1ServiceBinding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCredential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCredentialCreateCredentialRequest;
import org.openapis.openapi.models.operations.CreateCredentialResponse;
import org.openapis.openapi.models.operations.CreateCredentialSecurity;
import org.openapis.openapi.models.shared.CredentialEnumPushServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialCreateCredentialRequest req = new CreateCredentialCreateCredentialRequest(CredentialEnumPushServiceEnum.GCM) {{
                apiKey = "quis";
                certificate = "veritatis";
                friendlyName = "deserunt";
                privateKey = "perferendis";
                sandbox = false;
                secret = "ipsam";
            }};            

            CreateCredentialResponse res = sdk.sdk.createCredential(req, new CreateCredentialSecurity("repellendus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1Credential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNotification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNotificationCreateNotificationRequest;
import org.openapis.openapi.models.operations.CreateNotificationRequest;
import org.openapis.openapi.models.operations.CreateNotificationResponse;
import org.openapis.openapi.models.operations.CreateNotificationSecurity;
import org.openapis.openapi.models.shared.NotificationEnumPriorityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateNotificationRequest req = new CreateNotificationRequest("quo") {{
                requestBody = new CreateNotificationCreateNotificationRequest() {{
                    action = "odit";
                    alexa = "at";
                    apn = "at";
                    body = "maiores";
                    data = "molestiae";
                    deliveryCallbackUrl = "quod";
                    facebookMessenger = "quod";
                    fcm = "esse";
                    gcm = "totam";
                    identity = new String[]{{
                        add("dolorum"),
                        add("dicta"),
                        add("nam"),
                        add("officia"),
                    }};
                    priority = NotificationEnumPriorityEnum.LOW;
                    segment = new String[]{{
                        add("deleniti"),
                    }};
                    sms = "hic";
                    sound = "optio";
                    tag = new String[]{{
                        add("beatae"),
                        add("commodi"),
                        add("molestiae"),
                    }};
                    title = "Mrs.";
                    toBinding = new String[]{{
                        add("impedit"),
                    }};
                    ttl = 736918L;
                }};;
            }};            

            CreateNotificationResponse res = sdk.sdk.createNotification(req, new CreateNotificationSecurity("esse", "ipsum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1ServiceNotification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceCreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceCreateServiceRequest req = new CreateServiceCreateServiceRequest() {{
                alexaSkillId = "excepturi";
                apnCredentialSid = "aspernatur";
                defaultAlexaNotificationProtocolVersion = "perferendis";
                defaultApnNotificationProtocolVersion = "ad";
                defaultFcmNotificationProtocolVersion = "natus";
                defaultGcmNotificationProtocolVersion = "sed";
                deliveryCallbackEnabled = false;
                deliveryCallbackUrl = "iste";
                facebookMessengerPageId = "dolor";
                fcmCredentialSid = "natus";
                friendlyName = "laboriosam";
                gcmCredentialSid = "hic";
                logEnabled = false;
                messagingServiceSid = "saepe";
            }};            

            CreateServiceResponse res = sdk.sdk.createService(req, new CreateServiceSecurity("fuga", "in") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBinding

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBindingRequest;
import org.openapis.openapi.models.operations.DeleteBindingResponse;
import org.openapis.openapi.models.operations.DeleteBindingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBindingRequest req = new DeleteBindingRequest("corporis", "iste");            

            DeleteBindingResponse res = sdk.sdk.deleteBinding(req, new DeleteBindingSecurity("iure", "saepe") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCredential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCredentialRequest;
import org.openapis.openapi.models.operations.DeleteCredentialResponse;
import org.openapis.openapi.models.operations.DeleteCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCredentialRequest req = new DeleteCredentialRequest("quidem");            

            DeleteCredentialResponse res = sdk.sdk.deleteCredential(req, new DeleteCredentialSecurity("architecto", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.operations.DeleteServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest("reiciendis");            

            DeleteServiceResponse res = sdk.sdk.deleteService(req, new DeleteServiceSecurity("est", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchBinding

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBindingRequest;
import org.openapis.openapi.models.operations.FetchBindingResponse;
import org.openapis.openapi.models.operations.FetchBindingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBindingRequest req = new FetchBindingRequest("laborum", "dolores");            

            FetchBindingResponse res = sdk.sdk.fetchBinding(req, new FetchBindingSecurity("dolorem", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1ServiceBinding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCredential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCredentialRequest;
import org.openapis.openapi.models.operations.FetchCredentialResponse;
import org.openapis.openapi.models.operations.FetchCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCredentialRequest req = new FetchCredentialRequest("explicabo");            

            FetchCredentialResponse res = sdk.sdk.fetchCredential(req, new FetchCredentialSecurity("nobis", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1Credential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceRequest;
import org.openapis.openapi.models.operations.FetchServiceResponse;
import org.openapis.openapi.models.operations.FetchServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceRequest req = new FetchServiceRequest("omnis");            

            FetchServiceResponse res = sdk.sdk.fetchService(req, new FetchServiceSecurity("nemo", "minima") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBinding

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBindingRequest;
import org.openapis.openapi.models.operations.ListBindingResponse;
import org.openapis.openapi.models.operations.ListBindingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBindingRequest req = new ListBindingRequest("excepturi") {{
                endDate = LocalDate.parse("2022-07-24");
                identity = new String[]{{
                    add("doloribus"),
                    add("sapiente"),
                    add("architecto"),
                }};
                page = 652790L;
                pageSize = 208876L;
                pageToken = "culpa";
                startDate = LocalDate.parse("2022-01-02");
                tag = new String[]{{
                    add("occaecati"),
                    add("numquam"),
                    add("commodi"),
                }};
            }};            

            ListBindingResponse res = sdk.sdk.listBinding(req, new ListBindingSecurity("quam", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listBindingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCredential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCredentialRequest;
import org.openapis.openapi.models.operations.ListCredentialResponse;
import org.openapis.openapi.models.operations.ListCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCredentialRequest req = new ListCredentialRequest() {{
                page = 244425L;
                pageSize = 623510L;
                pageToken = "quia";
            }};            

            ListCredentialResponse res = sdk.sdk.listCredential(req, new ListCredentialSecurity("quis", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCredentialResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceRequest;
import org.openapis.openapi.models.operations.ListServiceResponse;
import org.openapis.openapi.models.operations.ListServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceRequest req = new ListServiceRequest() {{
                friendlyName = "laborum";
                page = 656330L;
                pageSize = 317202L;
                pageToken = "odit";
            }};            

            ListServiceResponse res = sdk.sdk.listService(req, new ListServiceSecurity("quo", "sequi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCredential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCredentialRequest;
import org.openapis.openapi.models.operations.UpdateCredentialResponse;
import org.openapis.openapi.models.operations.UpdateCredentialSecurity;
import org.openapis.openapi.models.operations.UpdateCredentialUpdateCredentialRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCredentialRequest req = new UpdateCredentialRequest("tenetur") {{
                requestBody = new UpdateCredentialUpdateCredentialRequest() {{
                    apiKey = "ipsam";
                    certificate = "id";
                    friendlyName = "possimus";
                    privateKey = "aut";
                    sandbox = false;
                    secret = "quasi";
                }};;
            }};            

            UpdateCredentialResponse res = sdk.sdk.updateCredential(req, new UpdateCredentialSecurity("error", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1Credential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceSecurity;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest("laborum") {{
                requestBody = new UpdateServiceUpdateServiceRequest() {{
                    alexaSkillId = "quasi";
                    apnCredentialSid = "reiciendis";
                    defaultAlexaNotificationProtocolVersion = "voluptatibus";
                    defaultApnNotificationProtocolVersion = "vero";
                    defaultFcmNotificationProtocolVersion = "nihil";
                    defaultGcmNotificationProtocolVersion = "praesentium";
                    deliveryCallbackEnabled = false;
                    deliveryCallbackUrl = "voluptatibus";
                    facebookMessengerPageId = "ipsa";
                    fcmCredentialSid = "omnis";
                    friendlyName = "voluptate";
                    gcmCredentialSid = "cum";
                    logEnabled = false;
                    messagingServiceSid = "perferendis";
                }};;
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req, new UpdateServiceSecurity("doloremque", "reprehenderit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
