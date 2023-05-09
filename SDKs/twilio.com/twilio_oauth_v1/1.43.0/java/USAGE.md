<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceCodeCreateDeviceCodeRequest;
import org.openapis.openapi.models.operations.CreateDeviceCodeResponse;
import org.openapis.openapi.models.operations.CreateDeviceCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeviceCodeCreateDeviceCodeRequest req = new CreateDeviceCodeCreateDeviceCodeRequest("corrupti",                 new String[]{{
                                add("distinctio"),
                                add("quibusdam"),
                                add("unde"),
                            }}) {{
                audiences = new String[]{{
                    add("corrupti"),
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
            }};            

            CreateDeviceCodeResponse res = sdk.createDeviceCode(req, new CreateDeviceCodeSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.oauthV1DeviceCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->