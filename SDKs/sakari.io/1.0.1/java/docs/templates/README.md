# templates

## Overview

Define reusable message or web templates

### Available Operations

* [templatesCreate](#templatescreate) - Create template
* [templatesFetch](#templatesfetch) - Fetch template by ID
* [templatesFetchAll](#templatesfetchall) - Fetch templates
* [templatesRemove](#templatesremove) - Deletes a template
* [templatesUpdate](#templatesupdate) - Updates a template

## templatesCreate

Create template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TemplatesCreateRequest;
import org.openapis.openapi.models.operations.TemplatesCreateResponse;
import org.openapis.openapi.models.operations.TemplatesCreateSecurity;
import org.openapis.openapi.models.shared.TemplateRequest;
import org.openapis.openapi.models.shared.TemplateRequestTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TemplatesCreateRequest req = new TemplatesCreateRequest("odit") {{
                templateRequest = new TemplateRequest() {{
                    name = "Joyce Kertzmann";
                    template = "Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes";
                    type = TemplateRequestTypeEnum.SMS;
                }};;
            }};            

            TemplatesCreateResponse res = sdk.templates.templatesCreate(req, new TemplatesCreateSecurity("eius") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.templatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## templatesFetch

Fetch template by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TemplatesFetchRequest;
import org.openapis.openapi.models.operations.TemplatesFetchResponse;
import org.openapis.openapi.models.operations.TemplatesFetchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TemplatesFetchRequest req = new TemplatesFetchRequest("maxime", "deleniti");            

            TemplatesFetchResponse res = sdk.templates.templatesFetch(req, new TemplatesFetchSecurity("facilis") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.templateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## templatesFetchAll

Fetch templates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TemplatesFetchAllRequest;
import org.openapis.openapi.models.operations.TemplatesFetchAllResponse;
import org.openapis.openapi.models.operations.TemplatesFetchAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TemplatesFetchAllRequest req = new TemplatesFetchAllRequest("in") {{
                limit = 100226L;
                name = "Elvira Herman";
                offset = 998848L;
            }};            

            TemplatesFetchAllResponse res = sdk.templates.templatesFetchAll(req, new TemplatesFetchAllSecurity("quibusdam") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.templatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## templatesRemove

Deletes a template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TemplatesRemoveRequest;
import org.openapis.openapi.models.operations.TemplatesRemoveResponse;
import org.openapis.openapi.models.operations.TemplatesRemoveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TemplatesRemoveRequest req = new TemplatesRemoveRequest("sed", "saepe");            

            TemplatesRemoveResponse res = sdk.templates.templatesRemove(req, new TemplatesRemoveSecurity("pariatur") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.templatesRemove200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## templatesUpdate

Updates a template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TemplatesUpdateRequest;
import org.openapis.openapi.models.operations.TemplatesUpdateResponse;
import org.openapis.openapi.models.operations.TemplatesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TemplatesUpdateRequest req = new TemplatesUpdateRequest("accusantium", "consequuntur");            

            TemplatesUpdateResponse res = sdk.templates.templatesUpdate(req, new TemplatesUpdateSecurity("praesentium") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.templateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
