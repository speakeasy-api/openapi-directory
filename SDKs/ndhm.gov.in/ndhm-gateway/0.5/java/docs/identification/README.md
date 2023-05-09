# identification

### Available Operations

* [postV05PatientsFindJson](#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [postV05PatientsFindRaw](#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [postV05PatientsOnFindJson](#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [postV05PatientsOnFindRaw](#postv05patientsonfindraw) - Identification result for a consent-manager user-id

## postV05PatientsFindJson

This API is meant for identify to patient given her consent-manager-user-id


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

            PostV05PatientsFindJsonRequest req = new PostV05PatientsFindJsonRequest("explicabo",                 new PatientIdentificationRequest(                new PatientIdentificationRequestQuery(                new PatientIdentificationRequestQueryPatient() {{
                                                                id = "hinapatel79@ndhm";
                                                            }};,                 new PatientIdentificationRequestQueryRequester() {{
                                                                id = "100005";
                                                                type = PatientIdentificationRequestQueryRequesterTypeEnum.HIP;
                                                            }};);, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-08-24T10:03:12.351Z"));, "velit");            

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

This API is meant for identify to patient given her consent-manager-user-id


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

            PostV05PatientsFindRawRequest req = new PostV05PatientsFindRawRequest("earum", "praesentium".getBytes(), "error");            

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

            PostV05PatientsOnFindJsonRequest req = new PostV05PatientsOnFindJsonRequest("non",                 new PatientIdentificationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("1aebc0b8-0a69-424d-bb2e-cfcc8f895010");, OffsetDateTime.parse("2021-12-22T09:30:36.023Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "possimus";
                                }};;
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

            PostV05PatientsOnFindRawRequest req = new PostV05PatientsOnFindRawRequest("neque", "pariatur".getBytes());            

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
