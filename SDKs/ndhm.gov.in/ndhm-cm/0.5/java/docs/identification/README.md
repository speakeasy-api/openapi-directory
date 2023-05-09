# identification

### Available Operations

* [postV05PatientsFindJson](#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [postV05PatientsFindRaw](#postv05patientsfindraw) - Identify a patient by her consent-manager user-id

## postV05PatientsFindJson

This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsFindJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsFindJsonResponse;
import org.openapis.openapi.models.shared.PatientIdentificationRequest;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQuery;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryPatient;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryRequester;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryRequesterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsFindJsonRequest req = new PostV05PatientsFindJsonRequest("ipsum",                 new PatientIdentificationRequest(                new PatientIdentificationRequestQuery(                new PatientIdentificationRequestQueryPatient("hinapatel79@ndhm");,                 new PatientIdentificationRequestQueryRequester("100005", PatientIdentificationRequestQueryRequesterTypeEnum.HIP););, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-04-24T18:16:06.669Z")););            

            PostV05PatientsFindJsonResponse res = sdk.identification.postV05PatientsFindJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsFindRaw

This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsFindRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsFindRawResponse;
import org.openapis.openapi.models.shared.PatientIdentificationRequest;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQuery;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryPatient;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryRequester;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryRequesterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsFindRawRequest req = new PostV05PatientsFindRawRequest("tempore", "accusamus".getBytes());            

            PostV05PatientsFindRawResponse res = sdk.identification.postV05PatientsFindRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
