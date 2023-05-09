# identification

### Available Operations

* [postV05PatientsOnFindJson](#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [postV05PatientsOnFindRaw](#postv05patientsonfindraw) - Identification result for a consent-manager user-id

## postV05PatientsOnFindJson

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsOnFindJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsOnFindJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientIdentificationResponse;
import org.openapis.openapi.models.shared.PatientIdentificationResponsePatient;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsOnFindJsonRequest req = new PostV05PatientsOnFindJsonRequest("odio",                 new PatientIdentificationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("96f2a70c-6882-482a-a482-562f222e9817");, OffsetDateTime.parse("2020-05-10T03:57:05.694Z")) {{
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "esse");;
                                patient = new PatientIdentificationResponsePatient("hinapatel79@ndhm", "Hina Patel");;
                            }};);            

            PostV05PatientsOnFindJsonResponse res = sdk.identification.postV05PatientsOnFindJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsOnFindRaw

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsOnFindRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsOnFindRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientIdentificationResponse;
import org.openapis.openapi.models.shared.PatientIdentificationResponsePatient;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsOnFindRawRequest req = new PostV05PatientsOnFindRawRequest("quod", "nam".getBytes());            

            PostV05PatientsOnFindRawResponse res = sdk.identification.postV05PatientsOnFindRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
