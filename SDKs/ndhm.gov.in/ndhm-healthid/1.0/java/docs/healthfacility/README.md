# healthFacility

## Overview

Create Health facility ID APIs

### Available Operations

* [authenticateHealthFacilityUsingPOST](#authenticatehealthfacilityusingpost) - Generate token for heath facility id.
* [changePasswordUsingPOST](#changepasswordusingpost) - Change password for heath facility id.
* [createAadhaarAccountUsingPOST1](#createaadhaaraccountusingpost1) - Generate Health ID card SVG
* [generateFacilityOTPUsingPOST](#generatefacilityotpusingpost) - Generate health hacility OTP on registrered mobile number
* [generatePasswordUsingPOST](#generatepasswordusingpost) - Generates password for heath facility id.
* [generateSvgCardUsingGET1](#generatesvgcardusingget1) - generateSvgCard
* [resetPasswordUsingPOST](#resetpasswordusingpost) - Reset password for heath facility id.

## authenticateHealthFacilityUsingPOST

Generate token for heath facility id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthenticateHealthFacilityUsingPOSTRequest;
import org.openapis.openapi.models.operations.AuthenticateHealthFacilityUsingPOSTResponse;
import org.openapis.openapi.models.operations.AuthenticateHealthFacilityUsingPOSTSecurity;
import org.openapis.openapi.models.shared.HealthFacilityAuthenticationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthenticateHealthFacilityUsingPOSTRequest req = new AuthenticateHealthFacilityUsingPOSTRequest(                new HealthFacilityAuthenticationRequest() {{
                                hfrUid = "aspernatur";
                                password = "architecto";
                            }};) {{
                acceptLanguage = "magnam";
            }};            

            AuthenticateHealthFacilityUsingPOSTResponse res = sdk.healthFacility.authenticateHealthFacilityUsingPOST(req, new AuthenticateHealthFacilityUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.authenticateHealthFacilityUsingPOST200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changePasswordUsingPOST

Change password for heath facility id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePasswordUsingPOSTRequest;
import org.openapis.openapi.models.operations.ChangePasswordUsingPOSTResponse;
import org.openapis.openapi.models.operations.ChangePasswordUsingPOSTSecurity;
import org.openapis.openapi.models.shared.HealthFacilityChangedPasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePasswordUsingPOSTRequest req = new ChangePasswordUsingPOSTRequest(                new HealthFacilityChangedPasswordRequest() {{
                                hfrUid = "et";
                                newPassword = "excepturi";
                                oldPassword = "ullam";
                            }};) {{
                acceptLanguage = "provident";
            }};            

            ChangePasswordUsingPOSTResponse res = sdk.healthFacility.changePasswordUsingPOST(req, new ChangePasswordUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.changePasswordUsingPOST200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAadhaarAccountUsingPOST1

Generate Health ID card SVG

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAadhaarAccountUsingPOST1Request;
import org.openapis.openapi.models.operations.CreateAadhaarAccountUsingPOST1Response;
import org.openapis.openapi.models.operations.CreateAadhaarAccountUsingPOST1Security;
import org.openapis.openapi.models.shared.CreateAccountWithPreVerifiedAadhaar;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAadhaarAccountUsingPOST1Request req = new CreateAadhaarAccountUsingPOST1Request(                new CreateAccountWithPreVerifiedAadhaar() {{
                                email = "Kiley_Bartoletti@yahoo.com";
                                firstName = "Mack";
                                healthId = "ad";
                                lastName = "Kemmer";
                                middleName = "dolor";
                                password = "necessitatibus";
                                profilePhoto = "odit";
                                txnId = "nemo";
                            }};) {{
                acceptLanguage = "quasi";
            }};            

            CreateAadhaarAccountUsingPOST1Response res = sdk.healthFacility.createAadhaarAccountUsingPOST1(req, new CreateAadhaarAccountUsingPOST1Security() {{
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

## generateFacilityOTPUsingPOST

Generate health facility OTP on registrered mobile number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateFacilityOTPUsingPOSTRequest;
import org.openapis.openapi.models.operations.GenerateFacilityOTPUsingPOSTResponse;
import org.openapis.openapi.models.operations.GenerateFacilityOTPUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AadharOtpGenerateRequestPayLoad;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateFacilityOTPUsingPOSTRequest req = new GenerateFacilityOTPUsingPOSTRequest(                new AadharOtpGenerateRequestPayLoad() {{
                                aadhaar = "iure";
                            }};, "doloribus") {{
                acceptLanguage = "debitis";
            }};            

            GenerateFacilityOTPUsingPOSTResponse res = sdk.healthFacility.generateFacilityOTPUsingPOST(req, new GenerateFacilityOTPUsingPOSTSecurity() {{
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

## generatePasswordUsingPOST

Generates password for heath facility id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeneratePasswordUsingPOSTRequest;
import org.openapis.openapi.models.operations.GeneratePasswordUsingPOSTResponse;
import org.openapis.openapi.models.operations.GeneratePasswordUsingPOSTSecurity;
import org.openapis.openapi.models.shared.HealthFacilityPasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GeneratePasswordUsingPOSTRequest req = new GeneratePasswordUsingPOSTRequest(                new HealthFacilityPasswordRequest() {{
                                hfrUid = "eius";
                            }};) {{
                acceptLanguage = "maxime";
            }};            

            GeneratePasswordUsingPOSTResponse res = sdk.healthFacility.generatePasswordUsingPOST(req, new GeneratePasswordUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.generatePasswordUsingPOST200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateSvgCardUsingGET1

generateSvgCard

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateSvgCardUsingGET1Request;
import org.openapis.openapi.models.operations.GenerateSvgCardUsingGET1Response;
import org.openapis.openapi.models.operations.GenerateSvgCardUsingGET1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateSvgCardUsingGET1Request req = new GenerateSvgCardUsingGET1Request("deleniti", "facilis") {{
                acceptLanguage = "in";
            }};            

            GenerateSvgCardUsingGET1Response res = sdk.healthFacility.generateSvgCardUsingGET1(req, new GenerateSvgCardUsingGET1Security() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.generateSvgCardUsingGET1200WildcardByteString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetPasswordUsingPOST

Reset password for heath facility id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetPasswordUsingPOSTRequest;
import org.openapis.openapi.models.operations.ResetPasswordUsingPOSTResponse;
import org.openapis.openapi.models.operations.ResetPasswordUsingPOSTSecurity;
import org.openapis.openapi.models.shared.HealthFacilityPasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetPasswordUsingPOSTRequest req = new ResetPasswordUsingPOSTRequest(                new HealthFacilityPasswordRequest() {{
                                hfrUid = "architecto";
                            }};) {{
                acceptLanguage = "architecto";
            }};            

            ResetPasswordUsingPOSTResponse res = sdk.healthFacility.resetPasswordUsingPOST(req, new ResetPasswordUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.resetPasswordUsingPOST200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
