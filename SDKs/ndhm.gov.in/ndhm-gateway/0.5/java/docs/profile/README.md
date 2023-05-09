# profile

### Available Operations

* [postV05PatientsProfileOnShareJson](#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [postV05PatientsProfileOnShareRaw](#postv05patientsprofileonshareraw) - Response to patient's share profile request
* [postV05PatientsProfileShareJson](#postv05patientsprofilesharejson) - Share patient profile details
* [postV05PatientsProfileShareRaw](#postv05patientsprofileshareraw) - Share patient profile details

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

            PostV05PatientsProfileOnShareJsonRequest req = new PostV05PatientsProfileOnShareJsonRequest("quod",                 new ShareProfileResult(                new ShareProfileAcknowledgement("<username>@<suffix>", ShareProfileAcknowledgementStatusEnum.FAILURE);, "5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("535a6fae-54eb-4f60-8321-f023b75d2367");, OffsetDateTime.parse("2020-03-19T01:37:09.736Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "est";
                                }};;
                            }};, "accusantium");            

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

            PostV05PatientsProfileOnShareRawRequest req = new PostV05PatientsProfileOnShareRawRequest("quod", "minus".getBytes(), "quos");            

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

## postV05PatientsProfileShareJson

Request for sharing patient's profile details to HIP


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsProfileShareJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsProfileShareJsonResponse;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientAddress;
import org.openapis.openapi.models.shared.PatientGenderEnum;
import org.openapis.openapi.models.shared.ShareProfileRequest;
import org.openapis.openapi.models.shared.ShareProfileRequestPatient;
import org.openapis.openapi.models.shared.ShareProfileRequestPatientUserDemographics;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsProfileShareJsonRequest req = new PostV05PatientsProfileShareJsonRequest("possimus",                 new ShareProfileRequest(                new ShareProfileRequestPatient(                new ShareProfileRequestPatientUserDemographics(PatientGenderEnum.U, "<username>@<suffix>", "1111-1111-1111-11", "Jane Doe", 2000L) {{
                                                                address = new PatientAddress() {{
                                                                    district = "odio";
                                                                    line = "provident";
                                                                    pincode = "sapiente";
                                                                    state = "aperiam";
                                                                }};;
                                                                dayOfBirth = 627717L;
                                                                identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                                                    add(new Identifier() {{
                                                                        type = IdentifierTypeEnum.NDHM_HEALTH_NUMBER;
                                                                        value = "+919800083232";
                                                                    }}),
                                                                }};
                                                                monthOfBirth = 404774L;
                                                            }};) {{
                                                hipCode = "12345 (CounterId)";
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2021-03-13T14:26:08.551Z"));, "alias");            

            PostV05PatientsProfileShareJsonResponse res = sdk.profile.postV05PatientsProfileShareJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsProfileShareRaw

Request for sharing patient's profile details to HIP


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsProfileShareRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsProfileShareRawResponse;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientAddress;
import org.openapis.openapi.models.shared.PatientGenderEnum;
import org.openapis.openapi.models.shared.ShareProfileRequest;
import org.openapis.openapi.models.shared.ShareProfileRequestPatient;
import org.openapis.openapi.models.shared.ShareProfileRequestPatientUserDemographics;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsProfileShareRawRequest req = new PostV05PatientsProfileShareRawRequest("impedit", "sequi".getBytes(), "commodi");            

            PostV05PatientsProfileShareRawResponse res = sdk.profile.postV05PatientsProfileShareRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
