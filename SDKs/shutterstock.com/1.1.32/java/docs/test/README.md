# test

### Available Operations

* [echo](#echo) - Echo text
* [validate](#validate) - Validate input

## echo

Echo text

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EchoRequest;
import org.openapis.openapi.models.operations.EchoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EchoRequest req = new EchoRequest() {{
                text = "ipsa";
            }};            

            EchoResponse res = sdk.test.echo(req);

            if (res.testEcho != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validate

Validate input

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateRequest;
import org.openapis.openapi.models.operations.ValidateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValidateRequest req = new ValidateRequest(751033L) {{
                tag = new String[]{{
                    add("quia"),
                    add("dicta"),
                    add("vel"),
                    add("perspiciatis"),
                }};
                userAgent = "debitis";
            }};            

            ValidateResponse res = sdk.test.validate(req);

            if (res.testValidate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
