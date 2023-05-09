# templates

## Overview

Everything about Otoroshi entities templates

### Available Operations

* [initiateApiKey](#initiateapikey) - Get a template of an Otoroshi Api Key
* [initiateService](#initiateservice) - Get a template of an Otoroshi service descriptor
* [initiateServiceGroup](#initiateservicegroup) - Get a template of an Otoroshi service group

## initiateApiKey

Get a template of an Otoroshi Api Key. The generated entity is not persisted

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitiateApiKeyResponse;
import org.openapis.openapi.models.operations.InitiateApiKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InitiateApiKeyResponse res = sdk.templates.initiateApiKey(new InitiateApiKeySecurity("enim", "labore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## initiateService

Get a template of an Otoroshi service descriptor. The generated entity is not persisted

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitiateServiceResponse;
import org.openapis.openapi.models.operations.InitiateServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InitiateServiceResponse res = sdk.templates.initiateService(new InitiateServiceSecurity("sapiente", "saepe") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## initiateServiceGroup

Get a template of an Otoroshi service group. The generated entity is not persisted

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitiateServiceGroupResponse;
import org.openapis.openapi.models.operations.InitiateServiceGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InitiateServiceGroupResponse res = sdk.templates.initiateServiceGroup(new InitiateServiceGroupSecurity("delectus", "officia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
