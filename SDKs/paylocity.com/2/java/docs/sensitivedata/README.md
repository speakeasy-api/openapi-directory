# sensitiveData

### Available Operations

* [addOrUpdateSensitiveData](#addorupdatesensitivedata) - Add/update sensitive data
* [getSensitiveData](#getsensitivedata) - Get sensitive data

## addOrUpdateSensitiveData

Sends new or updated employee sensitive data information directly to Web Pay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddOrUpdateSensitiveDataRequest;
import org.openapis.openapi.models.operations.AddOrUpdateSensitiveDataResponse;
import org.openapis.openapi.models.operations.AddOrUpdateSensitiveDataSecurity;
import org.openapis.openapi.models.shared.SensitiveData;
import org.openapis.openapi.models.shared.SensitiveDataDisability;
import org.openapis.openapi.models.shared.SensitiveDataDisabilityDisabilityClassifications;
import org.openapis.openapi.models.shared.SensitiveDataEthnicity;
import org.openapis.openapi.models.shared.SensitiveDataEthnicityEthnicRacialIdentities;
import org.openapis.openapi.models.shared.SensitiveDataGender;
import org.openapis.openapi.models.shared.SensitiveDataVeteran;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrUpdateSensitiveDataRequest req = new AddOrUpdateSensitiveDataRequest("ipsam", "consequuntur",                 new SensitiveData() {{
                                disability = new SensitiveDataDisability() {{
                                    disability = "ipsa";
                                    disabilityClassifications = new org.openapis.openapi.models.shared.SensitiveDataDisabilityDisabilityClassifications[]{{
                                        add(new SensitiveDataDisabilityDisabilityClassifications() {{
                                            classification = "eveniet";
                                        }}),
                                        add(new SensitiveDataDisabilityDisabilityClassifications() {{
                                            classification = "impedit";
                                        }}),
                                        add(new SensitiveDataDisabilityDisabilityClassifications() {{
                                            classification = "officiis";
                                        }}),
                                    }};
                                    hasDisability = "esse";
                                }};;
                                ethnicity = new SensitiveDataEthnicity() {{
                                    ethnicRacialIdentities = new org.openapis.openapi.models.shared.SensitiveDataEthnicityEthnicRacialIdentities[]{{
                                        add(new SensitiveDataEthnicityEthnicRacialIdentities() {{
                                            description = "sed";
                                        }}),
                                        add(new SensitiveDataEthnicityEthnicRacialIdentities() {{
                                            description = "veniam";
                                        }}),
                                        add(new SensitiveDataEthnicityEthnicRacialIdentities() {{
                                            description = "nesciunt";
                                        }}),
                                        add(new SensitiveDataEthnicityEthnicRacialIdentities() {{
                                            description = "expedita";
                                        }}),
                                    }};
                                    ethnicity = "eum";
                                }};;
                                gender = new SensitiveDataGender() {{
                                    displayPronouns = false;
                                    genderIdentityDescription = "vel";
                                    identifyAsLegalGender = "voluptatum";
                                    legalGender = "magnam";
                                    pronouns = "exercitationem";
                                    sexualOrientation = "ab";
                                }};;
                                veteran = new SensitiveDataVeteran() {{
                                    isVeteran = "porro";
                                    veteran = "autem";
                                }};;
                            }};);            

            AddOrUpdateSensitiveDataResponse res = sdk.sensitiveData.addOrUpdateSensitiveData(req, new AddOrUpdateSensitiveDataSecurity("nobis") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSensitiveData

Gets employee sensitive data information directly from Web Pay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSensitiveDataRequest;
import org.openapis.openapi.models.operations.GetSensitiveDataResponse;
import org.openapis.openapi.models.operations.GetSensitiveDataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSensitiveDataRequest req = new GetSensitiveDataRequest("laboriosam", "recusandae");            

            GetSensitiveDataResponse res = sdk.sensitiveData.getSensitiveData(req, new GetSensitiveDataSecurity("consequuntur") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sensitiveData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
