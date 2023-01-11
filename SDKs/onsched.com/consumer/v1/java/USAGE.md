<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DeleteConsumerV1AppointmentsIdRequest req = new DeleteConsumerV1AppointmentsIdRequest() {{
                pathParams = new DeleteConsumerV1AppointmentsIdPathParams() {{
                    id = "sit";
                }};
            }};

            DeleteConsumerV1AppointmentsIdResponse res = sdk.appointments.deleteConsumerV1AppointmentsId(req);

            if (res.appointmentViewModel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->