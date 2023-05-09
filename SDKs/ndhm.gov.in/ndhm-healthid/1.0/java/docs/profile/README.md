# profile

## Overview

Health ID Profile APIs (requires authenticated user token)

### Available Operations

* [changePasswordViaAadharUsingPOST](#changepasswordviaaadharusingpost) - Change password via Aadhar for heath id.
* [changePasswordViaMobileUsingPOST](#changepasswordviamobileusingpost) - Change password via mobile for heath id.
* [changePasswordViaUsingPOST](#changepasswordviausingpost) - Change password via password for heath id.
* [deleteAccountUsingDELETE](#deleteaccountusingdelete) - Delete account
* [generateAadharOTPUsingGET](#generateaadharotpusingget) - Generate Aadhaar OTP on registrered mobile number.
* [generateCardUsingGET](#generatecardusingget) - Generate Health ID card in PDF format
* [generateMobileOTPUsingGET](#generatemobileotpusingget) - Generate Mobile OTP to start registration.
* [generatePngCardUsingGET](#generatepngcardusingget) - Generate Health ID card PNG
* [generateSvgCardUsingGET](#generatesvgcardusingget) - Generate Health ID card SVG
* [generatereKycAadharOTPUsingPOST](#generaterekycaadharotpusingpost) - Generate Aadhaar OTP on registrered for link account with aadhar number
* [getAccountInformationUsingGET](#getaccountinformationusingget) - Get account information.
* [getBenefitsUsingGET](#getbenefitsusingget) - Get List of Benefits associated with HealthID.
* [getQrCodeUsingGET](#getqrcodeusingget) - Get Quick Response code in PNG format for this account.
* [updateAccountInformationUsingPOST](#updateaccountinformationusingpost) - Update account information
* [validateTokenUsingPOST](#validatetokenusingpost) - Validate auth token
* [verifyAadharOTPOnlyUsingPOST1](#verifyaadharotponlyusingpost1) - Verify Aadhaar OTP to complete KYC/re-KYC verification.

## changePasswordViaAadharUsingPOST

Change password via Aadhar for heath id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePasswordViaAadharUsingPOSTRequest;
import org.openapis.openapi.models.operations.ChangePasswordViaAadharUsingPOSTResponse;
import org.openapis.openapi.models.operations.ChangePasswordViaAadharUsingPOSTSecurity;
import org.openapis.openapi.models.shared.HidOtpRequestPaylaod;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePasswordViaAadharUsingPOSTRequest req = new ChangePasswordViaAadharUsingPOSTRequest(                new HidOtpRequestPaylaod() {{
                                newPassword = "provident";
                                otp = "minima";
                                txnId = "repellendus";
                            }};, "totam") {{
                acceptLanguage = "similique";
            }};            

            ChangePasswordViaAadharUsingPOSTResponse res = sdk.profile.changePasswordViaAadharUsingPOST(req, new ChangePasswordViaAadharUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.changePasswordViaAadharUsingPOST200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changePasswordViaMobileUsingPOST

Change password via mobile for heath id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePasswordViaMobileUsingPOSTRequest;
import org.openapis.openapi.models.operations.ChangePasswordViaMobileUsingPOSTResponse;
import org.openapis.openapi.models.operations.ChangePasswordViaMobileUsingPOSTSecurity;
import org.openapis.openapi.models.shared.HidOtpRequestPaylaod;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePasswordViaMobileUsingPOSTRequest req = new ChangePasswordViaMobileUsingPOSTRequest(                new HidOtpRequestPaylaod() {{
                                newPassword = "alias";
                                otp = "at";
                                txnId = "quaerat";
                            }};, "tempora") {{
                acceptLanguage = "vel";
            }};            

            ChangePasswordViaMobileUsingPOSTResponse res = sdk.profile.changePasswordViaMobileUsingPOST(req, new ChangePasswordViaMobileUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.changePasswordViaMobileUsingPOST200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changePasswordViaUsingPOST

Change password via password for heath id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePasswordViaUsingPOSTRequest;
import org.openapis.openapi.models.operations.ChangePasswordViaUsingPOSTResponse;
import org.openapis.openapi.models.operations.ChangePasswordViaUsingPOSTSecurity;
import org.openapis.openapi.models.shared.HidChangePasswordRequestPayload;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePasswordViaUsingPOSTRequest req = new ChangePasswordViaUsingPOSTRequest(                new HidChangePasswordRequestPayload() {{
                                newPassword = "quod";
                                oldPassword = "officiis";
                            }};, "qui") {{
                acceptLanguage = "dolorum";
            }};            

            ChangePasswordViaUsingPOSTResponse res = sdk.profile.changePasswordViaUsingPOST(req, new ChangePasswordViaUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.changePasswordViaUsingPOST200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccountUsingDELETE

Delete account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DELETEAccountUsingDELETERequest;
import org.openapis.openapi.models.operations.DELETEAccountUsingDELETEResponse;
import org.openapis.openapi.models.operations.DELETEAccountUsingDELETESecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DELETEAccountUsingDELETERequest req = new DELETEAccountUsingDELETERequest("a") {{
                acceptLanguage = "esse";
            }};            

            DELETEAccountUsingDELETEResponse res = sdk.profile.deleteAccountUsingDELETE(req, new DELETEAccountUsingDELETESecurity() {{
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

## generateAadharOTPUsingGET

Generate Aadhaar OTP on registrered mobile number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateAadharOTPUsingGETRequest;
import org.openapis.openapi.models.operations.GenerateAadharOTPUsingGETResponse;
import org.openapis.openapi.models.operations.GenerateAadharOTPUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateAadharOTPUsingGETRequest req = new GenerateAadharOTPUsingGETRequest("harum") {{
                acceptLanguage = "iusto";
            }};            

            GenerateAadharOTPUsingGETResponse res = sdk.profile.generateAadharOTPUsingGET(req, new GenerateAadharOTPUsingGETSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.generateAadharOTPUsingGET200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateCardUsingGET

Generate Health ID card in PDF format

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateCardUsingGETRequest;
import org.openapis.openapi.models.operations.GenerateCardUsingGETResponse;
import org.openapis.openapi.models.operations.GenerateCardUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateCardUsingGETRequest req = new GenerateCardUsingGETRequest("ipsum") {{
                acceptLanguage = "quisquam";
            }};            

            GenerateCardUsingGETResponse res = sdk.profile.generateCardUsingGET(req, new GenerateCardUsingGETSecurity() {{
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

## generateMobileOTPUsingGET

Generate Mobile OTP to start registration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateMobileOTPUsingGETRequest;
import org.openapis.openapi.models.operations.GenerateMobileOTPUsingGETResponse;
import org.openapis.openapi.models.operations.GenerateMobileOTPUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateMobileOTPUsingGETRequest req = new GenerateMobileOTPUsingGETRequest("tenetur") {{
                acceptLanguage = "amet";
            }};            

            GenerateMobileOTPUsingGETResponse res = sdk.profile.generateMobileOTPUsingGET(req, new GenerateMobileOTPUsingGETSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.generateMobileOTPUsingGET200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generatePngCardUsingGET

Generate Health ID card PNG

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeneratePngCardUsingGETRequest;
import org.openapis.openapi.models.operations.GeneratePngCardUsingGETResponse;
import org.openapis.openapi.models.operations.GeneratePngCardUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GeneratePngCardUsingGETRequest req = new GeneratePngCardUsingGETRequest("tempore") {{
                acceptLanguage = "accusamus";
            }};            

            GeneratePngCardUsingGETResponse res = sdk.profile.generatePngCardUsingGET(req, new GeneratePngCardUsingGETSecurity() {{
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

## generateSvgCardUsingGET

Generate Health ID card SVG

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateSvgCardUsingGETRequest;
import org.openapis.openapi.models.operations.GenerateSvgCardUsingGETResponse;
import org.openapis.openapi.models.operations.GenerateSvgCardUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateSvgCardUsingGETRequest req = new GenerateSvgCardUsingGETRequest("numquam") {{
                acceptLanguage = "enim";
            }};            

            GenerateSvgCardUsingGETResponse res = sdk.profile.generateSvgCardUsingGET(req, new GenerateSvgCardUsingGETSecurity() {{
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

## generatereKycAadharOTPUsingPOST

Generate Aadhaar OTP on registrered for link account with aadhar number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeneratereKycAadharOTPUsingPOSTRequest;
import org.openapis.openapi.models.operations.GeneratereKycAadharOTPUsingPOSTResponse;
import org.openapis.openapi.models.operations.GeneratereKycAadharOTPUsingPOSTSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GeneratereKycAadharOTPUsingPOSTRequest req = new GeneratereKycAadharOTPUsingPOSTRequest("dolorem") {{
                acceptLanguage = "sapiente";
            }};            

            GeneratereKycAadharOTPUsingPOSTResponse res = sdk.profile.generatereKycAadharOTPUsingPOST(req, new GeneratereKycAadharOTPUsingPOSTSecurity() {{
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

## getAccountInformationUsingGET

Get account information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAccountInformationUsingGETRequest;
import org.openapis.openapi.models.operations.GETAccountInformationUsingGETResponse;
import org.openapis.openapi.models.operations.GETAccountInformationUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAccountInformationUsingGETRequest req = new GETAccountInformationUsingGETRequest("totam") {{
                acceptLanguage = "nihil";
            }};            

            GETAccountInformationUsingGETResponse res = sdk.profile.getAccountInformationUsingGET(req, new GETAccountInformationUsingGETSecurity() {{
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

## getBenefitsUsingGET

Get List of Benefits associated with HealthID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETBenefitsUsingGETRequest;
import org.openapis.openapi.models.operations.GETBenefitsUsingGETResponse;
import org.openapis.openapi.models.operations.GETBenefitsUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETBenefitsUsingGETRequest req = new GETBenefitsUsingGETRequest("sit") {{
                acceptLanguage = "expedita";
            }};            

            GETBenefitsUsingGETResponse res = sdk.profile.getBenefitsUsingGET(req, new GETBenefitsUsingGETSecurity() {{
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

## getQrCodeUsingGET

Get Quick Response code in PNG format for this account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETQrCodeUsingGETRequest;
import org.openapis.openapi.models.operations.GETQrCodeUsingGETResponse;
import org.openapis.openapi.models.operations.GETQrCodeUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETQrCodeUsingGETRequest req = new GETQrCodeUsingGETRequest("neque") {{
                acceptLanguage = "sed";
            }};            

            GETQrCodeUsingGETResponse res = sdk.profile.getQrCodeUsingGET(req, new GETQrCodeUsingGETSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.getQrCodeUsingGET200WildcardByteString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccountInformationUsingPOST

Update account information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountInformationUsingPOSTRequest;
import org.openapis.openapi.models.operations.UpdateAccountInformationUsingPOSTResponse;
import org.openapis.openapi.models.operations.UpdateAccountInformationUsingPOSTSecurity;
import org.openapis.openapi.models.shared.UpdateAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAccountInformationUsingPOSTRequest req = new UpdateAccountInformationUsingPOSTRequest(                new UpdateAccountRequest() {{
                                address = "7364 Drew Divide";
                                dayOfBirth = "cupiditate";
                                districtCode = "maxime";
                                email = "Ned_Carroll27@hotmail.com";
                                firstName = "Brendon";
                                healthId = "dolores";
                                lastName = "Raynor";
                                middleName = "facilis";
                                monthOfBirth = "aliquid";
                                password = "quam";
                                pincode = 565421;
                                profilePhoto = "temporibus";
                                stateCode = "qui";
                                subdistrictCode = "neque";
                                townCode = "fugit";
                                villageCode = "magni";
                                wardCode = "odio";
                                yearOfBirth = "sunt";
                            }};, "ullam") {{
                acceptLanguage = "nam";
            }};            

            UpdateAccountInformationUsingPOSTResponse res = sdk.profile.updateAccountInformationUsingPOST(req, new UpdateAccountInformationUsingPOSTSecurity() {{
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

## validateTokenUsingPOST

Validate auth token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateTokenUsingPOSTRequest;
import org.openapis.openapi.models.operations.ValidateTokenUsingPOSTResponse;
import org.openapis.openapi.models.operations.ValidateTokenUsingPOSTSecurity;
import org.openapis.openapi.models.shared.ValidateTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValidateTokenUsingPOSTRequest req = new ValidateTokenUsingPOSTRequest(                new ValidateTokenRequest() {{
                                authToken = "hic";
                            }};) {{
                acceptLanguage = "voluptatem";
            }};            

            ValidateTokenUsingPOSTResponse res = sdk.profile.validateTokenUsingPOST(req, new ValidateTokenUsingPOSTSecurity() {{
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

## verifyAadharOTPOnlyUsingPOST1

Verify Aadhaar OTP to complete KYC/re-KYC verification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyAadharOTPOnlyUsingPOST1Request;
import org.openapis.openapi.models.operations.VerifyAadharOTPOnlyUsingPOST1Response;
import org.openapis.openapi.models.operations.VerifyAadharOTPOnlyUsingPOST1Security;
import org.openapis.openapi.models.shared.VerifyAadhaarOtp;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyAadharOTPOnlyUsingPOST1Request req = new VerifyAadharOTPOnlyUsingPOST1Request(                new VerifyAadhaarOtp() {{
                                otp = "cumque";
                                restrictions = "soluta";
                                txnId = "nobis";
                            }};, "et") {{
                acceptLanguage = "saepe";
            }};            

            VerifyAadharOTPOnlyUsingPOST1Response res = sdk.profile.verifyAadharOTPOnlyUsingPOST1(req, new VerifyAadharOTPOnlyUsingPOST1Security() {{
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
