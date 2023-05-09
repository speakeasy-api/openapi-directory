# registrationWithMobileNumber

## Overview

APIs to create Health ID using mobile number.

### Available Operations

* [generateMobileOTPUsingPOST1](#generatemobileotpusingpost1) - Generate Mobile OTP to start registration
* [resentOtpUsingPOST](#resentotpusingpost) - Resend Mobile OTP for Health ID registration
* [verifyMobileOTPUsingPOST](#verifymobileotpusingpost) - Verify Mobile OTP sent as part of registration transaction.
* [verifyUserViaMobileUsingPOST](#verifyuserviamobileusingpost) - Create Health ID with verified mobile token

## generateMobileOTPUsingPOST1

Generate Mobile OTP to start registration transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateMobileOTPUsingPOST1Request;
import org.openapis.openapi.models.operations.GenerateMobileOTPUsingPOST1Response;
import org.openapis.openapi.models.operations.GenerateMobileOTPUsingPOST1Security;
import org.openapis.openapi.models.shared.GenerateMobileOTPRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateMobileOTPUsingPOST1Request req = new GenerateMobileOTPUsingPOST1Request(                new GenerateMobileOTPRequest() {{
                                mobile = "551.390.4859";
                            }};) {{
                acceptLanguage = "nostrum";
            }};            

            GenerateMobileOTPUsingPOST1Response res = sdk.registrationWithMobileNumber.generateMobileOTPUsingPOST1(req, new GenerateMobileOTPUsingPOST1Security() {{
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

## resentOtpUsingPOST

Resend Mobile OTP in an existing transaction in case previous OTP is not received.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResentOtpUsingPOSTRequest;
import org.openapis.openapi.models.operations.ResentOtpUsingPOSTResponse;
import org.openapis.openapi.models.operations.ResentOtpUsingPOSTSecurity;
import org.openapis.openapi.models.shared.ResendOTPRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResentOtpUsingPOSTRequest req = new ResentOtpUsingPOSTRequest(                new ResendOTPRequest("sapiente");) {{
                acceptLanguage = "quisquam";
            }};            

            ResentOtpUsingPOSTResponse res = sdk.registrationWithMobileNumber.resentOtpUsingPOST(req, new ResentOtpUsingPOSTSecurity() {{
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

## verifyMobileOTPUsingPOST

Verify Mobile OTP in current registration transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyMobileOTPUsingPOSTRequest;
import org.openapis.openapi.models.operations.VerifyMobileOTPUsingPOSTResponse;
import org.openapis.openapi.models.operations.VerifyMobileOTPUsingPOSTSecurity;
import org.openapis.openapi.models.shared.VerifyMobileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyMobileOTPUsingPOSTRequest req = new VerifyMobileOTPUsingPOSTRequest(                new VerifyMobileRequest() {{
                                otp = "saepe";
                                txnId = "ea";
                            }};) {{
                acceptLanguage = "impedit";
            }};            

            VerifyMobileOTPUsingPOSTResponse res = sdk.registrationWithMobileNumber.verifyMobileOTPUsingPOST(req, new VerifyMobileOTPUsingPOSTSecurity() {{
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

## verifyUserViaMobileUsingPOST

Create Health ID with verified mobile token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyUserViaMobileUsingPOSTRequest;
import org.openapis.openapi.models.operations.VerifyUserViaMobileUsingPOSTResponse;
import org.openapis.openapi.models.operations.VerifyUserViaMobileUsingPOSTSecurity;
import org.openapis.openapi.models.shared.CreateAccountByVerifiedMobileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyUserViaMobileUsingPOSTRequest req = new VerifyUserViaMobileUsingPOSTRequest(                new CreateAccountByVerifiedMobileRequest("corporis") {{
                                address = "30347 Tierra Courts";
                                dayOfBirth = "minima";
                                districtCode = "eaque";
                                email = "Mohammed53@hotmail.com";
                                firstName = "Olaf";
                                gender = "female";
                                healthId = "fugit";
                                lastName = "Tillman";
                                middleName = "inventore";
                                monthOfBirth = "non";
                                name = "Sonya Osinski";
                                password = "eum";
                                pincode = 420539;
                                profilePhoto = "nobis";
                                restrictions = "quas";
                                stateCode = "assumenda";
                                subdistrictCode = "nulla";
                                token = "voluptas";
                                townCode = "libero";
                                villageCode = "quasi";
                                wardCode = "tempora";
                                yearOfBirth = "numquam";
                            }};) {{
                acceptLanguage = "explicabo";
            }};            

            VerifyUserViaMobileUsingPOSTResponse res = sdk.registrationWithMobileNumber.verifyUserViaMobileUsingPOST(req, new VerifyUserViaMobileUsingPOSTSecurity() {{
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
