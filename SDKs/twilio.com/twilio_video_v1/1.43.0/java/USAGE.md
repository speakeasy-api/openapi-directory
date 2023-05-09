<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCompositionCreateCompositionRequest;
import org.openapis.openapi.models.operations.CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCompositionResponse;
import org.openapis.openapi.models.operations.CreateCompositionSecurity;
import org.openapis.openapi.models.shared.CompositionEnumFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCompositionCreateCompositionRequest req = new CreateCompositionCreateCompositionRequest("corrupti") {{
                audioSources = new String[]{{
                    add("distinctio"),
                    add("quibusdam"),
                    add("unde"),
                }};
                audioSourcesExcluded = new String[]{{
                    add("corrupti"),
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                format = CompositionEnumFormatEnum.WEBM;
                resolution = "suscipit";
                statusCallback = "http://fond-teen.com";
                statusCallbackMethod = CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum.DELETE;
                trim = false;
                videoLayout = "tempora";
            }};            

            CreateCompositionResponse res = sdk.createComposition(req, new CreateCompositionSecurity("suscipit", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1Composition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->