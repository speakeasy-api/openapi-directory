# registrationWithAadhaar

## Overview

APIs to create Health ID using Aadhaar number & mobile number.

### Available Operations

* [createAadhaarAccountUsingPOST](#createaadhaaraccountusingpost) - Create Health ID using pre-verified Aadhaar & Mobile.
* [generateAadharOTPUsingPOST](#generateaadharotpusingpost) - Generate Aadhaar OTP on registrered mobile number
* [generateMobileOTPForTxnUsingPOST](#generatemobileotpfortxnusingpost) - Generate Mobile OTP for verification.
* [getHealthIdNumbersByAadharUsingPOST](#gethealthidnumbersbyaadharusingpost) - Search health id number using aadhar.
* [resendAadharOTPUsingPOST](#resendaadharotpusingpost) - Resend Aadhaar OTP on registrered mobile number to create Health ID.
* [verifyAadharBioUsingPOST](#verifyaadharbiousingpost) - Verify Aadhaar using biometrics.
* [verifyAadharOTPOnlyUsingPOST](#verifyaadharotponlyusingpost) - Verify Aadhaar OTP and continue for mobile verification.
* [verifyAadharOTPUsingPOST](#verifyaadharotpusingpost) - Verify Aadhaar OTP on registrered mobile number to create Health ID.
* [verifyMobileOTPForTxnUsingPOST](#verifymobileotpfortxnusingpost) - Verify Mobile OTP in an existing transaction.

## createAadhaarAccountUsingPOST

Create Health ID using pre-verified Aadhaar & Mobile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAadhaarAccountUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateAadhaarAccountUsingPOSTResponse;
import org.openapis.openapi.models.operations.CreateAadhaarAccountUsingPOSTSecurity;
import org.openapis.openapi.models.shared.CreateAccountWithPreVerifiedAadhaar;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAadhaarAccountUsingPOSTRequest req = new CreateAadhaarAccountUsingPOSTRequest(                new CreateAccountWithPreVerifiedAadhaar() {{
                                email = "Arnulfo_Rohan@gmail.com";
                                firstName = "Kurt";
                                healthId = "aperiam";
                                lastName = "Willms";
                                middleName = "dolorem";
                                password = "dolore";
                                profilePhoto = "labore";
                                txnId = "adipisci";
                            }};) {{
                acceptLanguage = "dolorum";
            }};            

            CreateAadhaarAccountUsingPOSTResponse res = sdk.registrationWithAadhaar.createAadhaarAccountUsingPOST(req, new CreateAadhaarAccountUsingPOSTSecurity() {{
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

## generateAadharOTPUsingPOST

Generate Aadhaar OTP on registrered mobile number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateAadharOTPUsingPOSTRequest;
import org.openapis.openapi.models.operations.GenerateAadharOTPUsingPOSTResponse;
import org.openapis.openapi.models.operations.GenerateAadharOTPUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AadharOtpGenerateRequestPayLoad;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateAadharOTPUsingPOSTRequest req = new GenerateAadharOTPUsingPOSTRequest(                new AadharOtpGenerateRequestPayLoad() {{
                                aadhaar = "architecto";
                            }};) {{
                acceptLanguage = "quae";
            }};            

            GenerateAadharOTPUsingPOSTResponse res = sdk.registrationWithAadhaar.generateAadharOTPUsingPOST(req, new GenerateAadharOTPUsingPOSTSecurity() {{
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

## generateMobileOTPForTxnUsingPOST

Generate Mobile OTP to verify mobile number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateMobileOTPForTxnUsingPOSTRequest;
import org.openapis.openapi.models.operations.GenerateMobileOTPForTxnUsingPOSTResponse;
import org.openapis.openapi.models.operations.GenerateMobileOTPForTxnUsingPOSTSecurity;
import org.openapis.openapi.models.shared.GenerateMobileOTPForTxnRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateMobileOTPForTxnUsingPOSTRequest req = new GenerateMobileOTPForTxnUsingPOSTRequest(                new GenerateMobileOTPForTxnRequest() {{
                                mobile = "690-787-9275";
                                txnId = "qui";
                            }};) {{
                acceptLanguage = "quae";
            }};            

            GenerateMobileOTPForTxnUsingPOSTResponse res = sdk.registrationWithAadhaar.generateMobileOTPForTxnUsingPOST(req, new GenerateMobileOTPForTxnUsingPOSTSecurity() {{
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

## getHealthIdNumbersByAadharUsingPOST

Search health id number using aadhar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHealthIdNumbersByAadharUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetHealthIdNumbersByAadharUsingPOSTResponse;
import org.openapis.openapi.models.operations.GetHealthIdNumbersByAadharUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AadharNumberRequestPayload;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHealthIdNumbersByAadharUsingPOSTRequest req = new GetHealthIdNumbersByAadharUsingPOSTRequest(                new AadharNumberRequestPayload() {{
                                aadhaar = "laudantium";
                            }};) {{
                acceptLanguage = "odio";
            }};            

            GetHealthIdNumbersByAadharUsingPOSTResponse res = sdk.registrationWithAadhaar.getHealthIdNumbersByAadharUsingPOST(req, new GetHealthIdNumbersByAadharUsingPOSTSecurity() {{
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

## resendAadharOTPUsingPOST

Resend Aadhar OTP on registrered mobile number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendAadharOTPUsingPOSTRequest;
import org.openapis.openapi.models.operations.ResendAadharOTPUsingPOSTResponse;
import org.openapis.openapi.models.operations.ResendAadharOTPUsingPOSTSecurity;
import org.openapis.openapi.models.shared.ResendOTPRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResendAadharOTPUsingPOSTRequest req = new ResendAadharOTPUsingPOSTRequest(                new ResendOTPRequest("occaecati");) {{
                acceptLanguage = "voluptatibus";
            }};            

            ResendAadharOTPUsingPOSTResponse res = sdk.registrationWithAadhaar.resendAadharOTPUsingPOST(req, new ResendAadharOTPUsingPOSTSecurity() {{
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

## verifyAadharBioUsingPOST

Verify Aadhaar using biometrics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyAadharBioUsingPOSTRequest;
import org.openapis.openapi.models.operations.VerifyAadharBioUsingPOSTResponse;
import org.openapis.openapi.models.operations.VerifyAadharBioUsingPOSTSecurity;
import org.openapis.openapi.models.shared.VerifyAadhaarWithBio;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyAadharBioUsingPOSTRequest req = new VerifyAadharBioUsingPOSTRequest(                new VerifyAadhaarWithBio() {{
                                aadhaar = "quisquam";
                                bioType = "vero";
                                pid = "omnis";
                                restrictions = "quis";
                            }};) {{
                acceptLanguage = "ipsum";
            }};            

            VerifyAadharBioUsingPOSTResponse res = sdk.registrationWithAadhaar.verifyAadharBioUsingPOST(req, new VerifyAadharBioUsingPOSTSecurity() {{
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

## verifyAadharOTPOnlyUsingPOST

Verify Aadhaar OTP received on registrered mobile number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyAadharOTPOnlyUsingPOSTRequest;
import org.openapis.openapi.models.operations.VerifyAadharOTPOnlyUsingPOSTResponse;
import org.openapis.openapi.models.operations.VerifyAadharOTPOnlyUsingPOSTSecurity;
import org.openapis.openapi.models.shared.VerifyAadhaarOtp;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyAadharOTPOnlyUsingPOSTRequest req = new VerifyAadharOTPOnlyUsingPOSTRequest(                new VerifyAadhaarOtp() {{
                                otp = "delectus";
                                restrictions = "voluptate";
                                txnId = "consectetur";
                            }};) {{
                acceptLanguage = "vero";
            }};            

            VerifyAadharOTPOnlyUsingPOSTResponse res = sdk.registrationWithAadhaar.verifyAadharOTPOnlyUsingPOST(req, new VerifyAadharOTPOnlyUsingPOSTSecurity() {{
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

## verifyAadharOTPUsingPOST

Verify Aadhar OTP received on registrered mobile number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyAadharOTPUsingPOSTRequest;
import org.openapis.openapi.models.operations.VerifyAadharOTPUsingPOSTSecurity;
import org.openapis.openapi.models.operations.VerifyAadharOtpUsingPOSTResponse;
import org.openapis.openapi.models.shared.CreateAccountWithAadhaarOtp;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyAadharOTPUsingPOSTRequest req = new VerifyAadharOTPUsingPOSTRequest(                new CreateAccountWithAadhaarOtp() {{
                                email = "Jeramie_Weissnat48@hotmail.com";
                                firstName = "Lon";
                                lastName = "Quitzon";
                                middleName = "vero";
                                mobile = "488.367.0938 x179";
                                otp = "doloribus";
                                password = "iusto";
                                profilePhoto = "eligendi";
                                restrictions = "ducimus";
                                txnId = "alias";
                                username = "Luciano.Glover";
                            }};) {{
                acceptLanguage = "aspernatur";
            }};            

            VerifyAadharOtpUsingPOSTResponse res = sdk.registrationWithAadhaar.verifyAadharOTPUsingPOST(req, new VerifyAadharOTPUsingPOSTSecurity() {{
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

## verifyMobileOTPForTxnUsingPOST

Verify Mobile OTP in an existing transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyMobileOTPForTxnUsingPOSTRequest;
import org.openapis.openapi.models.operations.VerifyMobileOTPForTxnUsingPOSTResponse;
import org.openapis.openapi.models.operations.VerifyMobileOTPForTxnUsingPOSTSecurity;
import org.openapis.openapi.models.shared.VerifyMobileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyMobileOTPForTxnUsingPOSTRequest req = new VerifyMobileOTPForTxnUsingPOSTRequest(                new VerifyMobileRequest() {{
                                otp = "vel";
                                txnId = "possimus";
                            }};) {{
                acceptLanguage = "magnam";
            }};            

            VerifyMobileOTPForTxnUsingPOSTResponse res = sdk.registrationWithAadhaar.verifyMobileOTPForTxnUsingPOST(req, new VerifyMobileOTPForTxnUsingPOSTSecurity() {{
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
