# profile

### Available Operations

* [postV05PatientsProfileShareJson](#postv05patientsprofilesharejson) - Share patient profile details
* [postV05PatientsProfileShareRaw](#postv05patientsprofileshareraw) - Share patient profile details

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

            PostV05PatientsProfileShareJsonRequest req = new PostV05PatientsProfileShareJsonRequest("porro",                 new ShareProfileRequest(                new ShareProfileRequestPatient(                new ShareProfileRequestPatientUserDemographics(PatientGenderEnum.U, "<username>@<suffix>", "1111-1111-1111-11", "Jane Doe", 2000L) {{
                                                                address = new PatientAddress() {{
                                                                    district = "labore";
                                                                    line = "ab";
                                                                    pincode = "adipisci";
                                                                    state = "fuga";
                                                                }};;
                                                                dayOfBirth = 662505L;
                                                                identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                                                    add(new Identifier(IdentifierTypeEnum.NDHM_HEALTH_NUMBER, "+919800083232") {{
                                                                        type = IdentifierTypeEnum.MOBILE;
                                                                        value = "+919800083232";
                                                                    }}),
                                                                    add(new Identifier(IdentifierTypeEnum.HEALTH_ID, "+919800083232") {{
                                                                        type = IdentifierTypeEnum.NDHM_HEALTH_NUMBER;
                                                                        value = "+919800083232";
                                                                    }}),
                                                                }};
                                                                monthOfBirth = 517309L;
                                                            }};) {{
                                                hipCode = "12345 (CounterId)";
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2021-09-23T14:56:28.537Z"));, "ducimus");            

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

            PostV05PatientsProfileShareRawRequest req = new PostV05PatientsProfileShareRawRequest("quos", "vel".getBytes(), "labore");            

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
