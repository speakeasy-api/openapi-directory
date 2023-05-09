# forgotHealthIdNumber

## Overview

APIs to Retrieve Health ID/number using mobile number or aadhar.

### Available Operations

* [generateAadharOTPUsingPOST1](#generateaadharotpusingpost1) - Generate Aadhaar OTP on registrered mobile number
* [generateMobileOTPUsingPOST](#generatemobileotpusingpost) - Generate Mobile OTP to start registration
* [retrievalHealthIdByAadharUsingPOST](#retrievalhealthidbyaadharusingpost) - Verify aadhar OTP sent as part of forgetHealth id.
* [retrievalHealthIdByMobileUsingPOST](#retrievalhealthidbymobileusingpost) - Verify Mobile OTP sent as  part of forgetHealth id.

## generateAadharOTPUsingPOST1

Generate Aadhaar OTP on registrered mobile number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateAadharOTPUsingPOST1Request;
import org.openapis.openapi.models.operations.GenerateAadharOTPUsingPOST1Response;
import org.openapis.openapi.models.operations.GenerateAadharOTPUsingPOST1Security;
import org.openapis.openapi.models.shared.AadharOtpGenerateRequestPayLoad;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateAadharOTPUsingPOST1Request req = new GenerateAadharOTPUsingPOST1Request(                new AadharOtpGenerateRequestPayLoad() {{
                                aadhaar = "alias";
                            }};) {{
                acceptLanguage = "fugit";
            }};            

            GenerateAadharOTPUsingPOST1Response res = sdk.forgotHealthIdNumber.generateAadharOTPUsingPOST1(req, new GenerateAadharOTPUsingPOST1Security() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateMobileOTPUsingPOST

Generate Mobile OTP to start registration transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateMobileOTPUsingPOSTRequest;
import org.openapis.openapi.models.operations.GenerateMobileOTPUsingPOSTResponse;
import org.openapis.openapi.models.operations.GenerateMobileOTPUsingPOSTSecurity;
import org.openapis.openapi.models.shared.GenerateMobileOTPRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateMobileOTPUsingPOSTRequest req = new GenerateMobileOTPUsingPOSTRequest(                new GenerateMobileOTPRequest() {{
                                mobile = "1-627-729-4275 x3585";
                            }};) {{
                acceptLanguage = "officia";
            }};            

            GenerateMobileOTPUsingPOSTResponse res = sdk.forgotHealthIdNumber.generateMobileOTPUsingPOST(req, new GenerateMobileOTPUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrievalHealthIdByAadharUsingPOST

Verify aadhar OTP sent as part of forgetHealth id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrievalHealthIdByAadharUsingPOSTRequest;
import org.openapis.openapi.models.operations.RetrievalHealthIdByAadharUsingPOSTResponse;
import org.openapis.openapi.models.operations.RetrievalHealthIdByAadharUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AuthAccountAadhaarOTPRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrievalHealthIdByAadharUsingPOSTRequest req = new RetrievalHealthIdByAadharUsingPOSTRequest(                new AuthAccountAadhaarOTPRequest("dolor", "efa77dfb-14cd-466a-a395-efb9ba88f3a6");) {{
                acceptLanguage = "vel";
            }};            

            RetrievalHealthIdByAadharUsingPOSTResponse res = sdk.forgotHealthIdNumber.retrievalHealthIdByAadharUsingPOST(req, new RetrievalHealthIdByAadharUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrievalHealthIdByMobileUsingPOST

Verify Mobile OTP sent as  part of forgetHealth id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrievalHealthIdByMobileUsingPOSTRequest;
import org.openapis.openapi.models.operations.RetrievalHealthIdByMobileUsingPOSTResponse;
import org.openapis.openapi.models.operations.RetrievalHealthIdByMobileUsingPOSTSecurity;
import org.openapis.openapi.models.shared.RetriveHealthIdMobilePayLoad;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrievalHealthIdByMobileUsingPOSTRequest req = new RetrievalHealthIdByMobileUsingPOSTRequest(                new RetriveHealthIdMobilePayLoad("natus") {{
                                dayOfBirth = "omnis";
                                firstName = "Jarred";
                                gender = "female";
                                lastName = "Kovacek";
                                middleName = "magnam";
                                monthOfBirth = "distinctio";
                                name = "Leroy Greenfelder";
                                otp = "nobis";
                                yearOfBirth = "eum";
                            }};) {{
                acceptLanguage = "vero";
            }};            

            RetrievalHealthIdByMobileUsingPOSTResponse res = sdk.forgotHealthIdNumber.retrievalHealthIdByMobileUsingPOST(req, new RetrievalHealthIdByMobileUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
