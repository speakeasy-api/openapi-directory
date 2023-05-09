# social

## Overview

Social media and pseudonyms

### Available Operations

* [phoneCode](#phonecode) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
* [phoneCodeBatch](#phonecodebatch) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
* [phoneCodeGeo](#phonecodegeo) - [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
* [phoneCodeGeoBatch](#phonecodegeobatch) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
* [phoneCodeGeoFeedbackLoop](#phonecodegeofeedbackloop) - [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

## phoneCode

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PhoneCodeRequest;
import org.openapis.openapi.models.operations.PhoneCodeResponse;
import org.openapis.openapi.models.operations.PhoneCodeSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PhoneCodeRequest req = new PhoneCodeRequest("adipisci", "eveniet", "ipsa");            

            PhoneCodeResponse res = sdk.social.phoneCode(req, new PhoneCodeSecurity("laboriosam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNamePhoneCodedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## phoneCodeBatch

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PhoneCodeBatchResponse;
import org.openapis.openapi.models.operations.PhoneCodeBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNamePhoneNumberIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNamePhoneNumberIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNamePhoneNumberIn req = new BatchFirstLastNamePhoneNumberIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "459bebba-d02f-4258-abcf-152558daa95b";
                        name = "Ricardo Sawayn I";
                    }}),
                }};
                personalNamesWithPhoneNumbers = new org.openapis.openapi.models.shared.FirstLastNamePhoneNumberIn[]{{
                    add(new FirstLastNamePhoneNumberIn() {{
                        firstName = "Emery";
                        id = "6c354aa4-32b4-47e1-b63c-5208c23e9802";
                        lastName = "Skiles";
                        phoneNumber = "quas";
                    }}),
                    add(new FirstLastNamePhoneNumberIn() {{
                        firstName = "Cielo";
                        id = "f0d45eb4-a8b6-474e-a5cf-c18edc7f787e";
                        lastName = "Ferry";
                        phoneNumber = "magni";
                    }}),
                }};
            }};            

            PhoneCodeBatchResponse res = sdk.social.phoneCodeBatch(req, new PhoneCodeBatchSecurity("recusandae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchFirstLastNamePhoneCodedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## phoneCodeGeo

[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PhoneCodeGeoRequest;
import org.openapis.openapi.models.operations.PhoneCodeGeoResponse;
import org.openapis.openapi.models.operations.PhoneCodeGeoSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PhoneCodeGeoRequest req = new PhoneCodeGeoRequest("voluptatem", "eius", "rerum", "nesciunt");            

            PhoneCodeGeoResponse res = sdk.social.phoneCodeGeo(req, new PhoneCodeGeoSecurity("pariatur") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNamePhoneCodedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## phoneCodeGeoBatch

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PhoneCodeGeoBatchResponse;
import org.openapis.openapi.models.operations.PhoneCodeGeoBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNamePhoneNumberGeoIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNamePhoneNumberGeoIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNamePhoneNumberGeoIn req = new BatchFirstLastNamePhoneNumberGeoIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "ed0c5670-ef42-4bd3-89f1-cc503f6c39bc";
                        name = "John Oberbrunner";
                    }}),
                }};
                personalNamesWithPhoneNumbers = new org.openapis.openapi.models.shared.FirstLastNamePhoneNumberGeoIn[]{{
                    add(new FirstLastNamePhoneNumberGeoIn() {{
                        countryIso2 = "accusantium";
                        countryIso2Alt = "voluptatibus";
                        firstName = "Kris";
                        id = "57f38518-9ad7-4ef8-87aa-e03f33ca79fb";
                        lastName = "McKenzie";
                        phoneNumber = "fugiat";
                    }}),
                    add(new FirstLastNamePhoneNumberGeoIn() {{
                        countryIso2 = "recusandae";
                        countryIso2Alt = "non";
                        firstName = "Adolfo";
                        id = "32ba26fd-368b-4a92-96bc-b415835c7364";
                        lastName = "Braun";
                        phoneNumber = "dignissimos";
                    }}),
                    add(new FirstLastNamePhoneNumberGeoIn() {{
                        countryIso2 = "quia";
                        countryIso2Alt = "ratione";
                        firstName = "Asha";
                        id = "33edc046-bc51-463b-bca4-9227c42c22c5";
                        lastName = "Hills";
                        phoneNumber = "sequi";
                    }}),
                }};
            }};            

            PhoneCodeGeoBatchResponse res = sdk.social.phoneCodeGeoBatch(req, new PhoneCodeGeoBatchSecurity("quaerat") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchFirstLastNamePhoneCodedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## phoneCodeGeoFeedbackLoop

[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PhoneCodeGeoFeedbackLoopRequest;
import org.openapis.openapi.models.operations.PhoneCodeGeoFeedbackLoopResponse;
import org.openapis.openapi.models.operations.PhoneCodeGeoFeedbackLoopSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PhoneCodeGeoFeedbackLoopRequest req = new PhoneCodeGeoFeedbackLoopRequest("accusantium", "incidunt", "cupiditate", "minima", "quo");            

            PhoneCodeGeoFeedbackLoopResponse res = sdk.social.phoneCodeGeoFeedbackLoop(req, new PhoneCodeGeoFeedbackLoopSecurity("quis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNamePhoneCodedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
