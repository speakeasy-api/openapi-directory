# profile

### Available Operations

* [postV05PatientsProfileOnShareJson](#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [postV05PatientsProfileOnShareRaw](#postv05patientsprofileonshareraw) - Response to patient's share profile request

## postV05PatientsProfileOnShareJson

Result of patient share profile request at HIP end.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsProfileOnShareJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsProfileOnShareJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.RequestReference;
import org.openapis.openapi.models.shared.ShareProfileAcknowledgement;
import org.openapis.openapi.models.shared.ShareProfileAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.ShareProfileResult;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsProfileOnShareJsonRequest req = new PostV05PatientsProfileOnShareJsonRequest("porro",                 new ShareProfileResult(                new ShareProfileAcknowledgement("<username>@<suffix>", ShareProfileAcknowledgementStatusEnum.FAILURE);, "5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("f7c70a45-626d-4436-813f-16d9f5fce6c5");, OffsetDateTime.parse("2022-08-08T04:23:21.555Z")) {{
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "magnam");;
                            }};);            

            PostV05PatientsProfileOnShareJsonResponse res = sdk.profile.postV05PatientsProfileOnShareJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsProfileOnShareRaw

Result of patient share profile request at HIP end.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsProfileOnShareRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsProfileOnShareRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.RequestReference;
import org.openapis.openapi.models.shared.ShareProfileAcknowledgement;
import org.openapis.openapi.models.shared.ShareProfileAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.ShareProfileResult;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsProfileOnShareRawRequest req = new PostV05PatientsProfileOnShareRawRequest("ea", "quo".getBytes());            

            PostV05PatientsProfileOnShareRawResponse res = sdk.profile.postV05PatientsProfileOnShareRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
