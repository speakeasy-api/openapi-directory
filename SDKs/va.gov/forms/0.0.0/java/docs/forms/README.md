# forms

### Available Operations

* [findFormByFormName](#findformbyformname) - Find form by form name
* [findForms](#findforms) - Returns all VA Forms and their last revision date

## findFormByFormName

Returns a single form and the full revision history

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindFormByFormNameRequest;
import org.openapis.openapi.models.operations.FindFormByFormNameResponse;
import org.openapis.openapi.models.operations.FindFormByFormNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindFormByFormNameRequest req = new FindFormByFormNameRequest("distinctio");            

            FindFormByFormNameResponse res = sdk.forms.findFormByFormName(req, new FindFormByFormNameSecurity("quibusdam") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.findFormByFormName200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findForms

Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindFormsRequest;
import org.openapis.openapi.models.operations.FindFormsResponse;
import org.openapis.openapi.models.operations.FindFormsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindFormsRequest req = new FindFormsRequest() {{
                query = "unde";
            }};            

            FindFormsResponse res = sdk.forms.findForms(req, new FindFormsSecurity("nulla") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.findForms200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
