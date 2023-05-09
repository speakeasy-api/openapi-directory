# authentication

## Overview

Health ID Authentication APIs

### Available Operations

* [authAccountPasswordRequestUsingPOST](#authaccountpasswordrequestusingpost) - Authentication with PASSWORD based auth transaction.
* [authWithMobileTokenUsingPOST](#authwithmobiletokenusingpost) - Authenticate using verified Mobile Number and user data
* [authenticateUserUsingPOST](#authenticateuserusingpost) - Authenticate request to generate Mobile OTP using Health ID number / Health ID
* [authenticateWithPasswordUsingPOST](#authenticatewithpasswordusingpost) - Authenticate using Health ID number / Health ID and password
* [certUsingGET](#certusingget) - Auth token public key.
* [confirmWithAadhaarBioUsingPOST](#confirmwithaadhaarbiousingpost) - Authentication with Aadhaar Biometric based auth transaction.
* [confirmWithAadhaarOtpUsingPOST](#confirmwithaadhaarotpusingpost) - Authentication with Aadhaar OTP based auth transaction.
* [confirmWithDemographicsUsingPOST](#confirmwithdemographicsusingpost) - Authenticate using demographic data of user.
* [confirmWithMobileUsingPOST](#confirmwithmobileusingpost) - Authentication with Mobile OTP based auth transaction.
* [initiateAuthUsingPOST](#initiateauthusingpost) - Initiate authentication process for given Health ID
* [resendAuthMobileOTPUsingPOST](#resendauthmobileotpusingpost) - Resend Aadhaar/Mobile OTP for Authentication Transaction.

## authAccountPasswordRequestUsingPOST

Authentication with PASSWORD based auth transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTRequest;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTResponse;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AuthWithPasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthAccountPasswordRequestUsingPOSTRequest req = new AuthAccountPasswordRequestUsingPOSTRequest(                new AuthWithPasswordRequest("ipsam", "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7");) {{
                acceptLanguage = "ipsum";
            }};            

            AuthAccountPasswordRequestUsingPOSTResponse res = sdk.authentication.authAccountPasswordRequestUsingPOST(req, new AuthAccountPasswordRequestUsingPOSTSecurity() {{
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

## authWithMobileTokenUsingPOST

Authenticate using verified Mobile Number and user data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthWithMobileTokenUsingPOSTRequest;
import org.openapis.openapi.models.operations.AuthWithMobileTokenUsingPOSTResponse;
import org.openapis.openapi.models.operations.AuthWithMobileTokenUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AuthWithMobileTxnAndUserData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthWithMobileTokenUsingPOSTRequest req = new AuthWithMobileTokenUsingPOSTRequest(                new AuthWithMobileTxnAndUserData("excepturi") {{
                                gender = "female";
                                healthId = "perferendis";
                                name = "Faye Cormier";
                                token = "natus";
                                yearOfBirth = "laboriosam";
                            }};) {{
                acceptLanguage = "hic";
            }};            

            AuthWithMobileTokenUsingPOSTResponse res = sdk.authentication.authWithMobileTokenUsingPOST(req, new AuthWithMobileTokenUsingPOSTSecurity() {{
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

## authenticateUserUsingPOST

Authenticate request to generate Mobile OTP using Health ID number / Health ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthenticateUserUsingPOSTRequest;
import org.openapis.openapi.models.operations.AuthenticateUserUsingPOSTResponse;
import org.openapis.openapi.models.operations.AuthenticateUserUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AuthMobileOTPRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthenticateUserUsingPOSTRequest req = new AuthenticateUserUsingPOSTRequest(                new AuthMobileOTPRequest() {{
                                healthid = "saepe";
                            }};) {{
                acceptLanguage = "fuga";
            }};            

            AuthenticateUserUsingPOSTResponse res = sdk.authentication.authenticateUserUsingPOST(req, new AuthenticateUserUsingPOSTSecurity() {{
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

## authenticateWithPasswordUsingPOST

Authenticate using Health ID number / Health ID and password

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthenticateWithPasswordUsingPOSTRequest;
import org.openapis.openapi.models.operations.AuthenticateWithPasswordUsingPOSTResponse;
import org.openapis.openapi.models.operations.AuthenticateWithPasswordUsingPOSTSecurity;
import org.openapis.openapi.models.shared.JwtRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthenticateWithPasswordUsingPOSTRequest req = new AuthenticateWithPasswordUsingPOSTRequest(                new JwtRequest() {{
                                healthId = "in";
                                password = "corporis";
                            }};) {{
                acceptLanguage = "iste";
            }};            

            AuthenticateWithPasswordUsingPOSTResponse res = sdk.authentication.authenticateWithPasswordUsingPOST(req, new AuthenticateWithPasswordUsingPOSTSecurity() {{
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

## certUsingGET

Auth token public key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertUsingGETRequest;
import org.openapis.openapi.models.operations.CertUsingGETResponse;
import org.openapis.openapi.models.operations.CertUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertUsingGETRequest req = new CertUsingGETRequest() {{
                acceptLanguage = "iure";
            }};            

            CertUsingGETResponse res = sdk.authentication.certUsingGET(req, new CertUsingGETSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.certUsingGET200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmWithAadhaarBioUsingPOST

Authentication with Aadhaar Biometric based auth transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmWithAadhaarBioUsingPOSTRequest;
import org.openapis.openapi.models.operations.ConfirmWithAadhaarBioUsingPOSTResponse;
import org.openapis.openapi.models.operations.ConfirmWithAadhaarBioUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AuthAccountAadhaarBioRequest;
import org.openapis.openapi.models.shared.AuthAccountAadhaarBioRequestAuthTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmWithAadhaarBioUsingPOSTRequest req = new ConfirmWithAadhaarBioUsingPOSTRequest(                new AuthAccountAadhaarBioRequest() {{
                                authType = AuthAccountAadhaarBioRequestAuthTypeEnum.OTP;
                                bioType = "quidem";
                                pid = "architecto";
                                txnId = "0faaa235-2c59-4559-87af-f1a3a2fa9467";
                            }};) {{
                acceptLanguage = "molestiae";
            }};            

            ConfirmWithAadhaarBioUsingPOSTResponse res = sdk.authentication.confirmWithAadhaarBioUsingPOST(req, new ConfirmWithAadhaarBioUsingPOSTSecurity() {{
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

## confirmWithAadhaarOtpUsingPOST

Authentication with Aadhaar OTP based auth transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmWithAadhaarOtpUsingPOSTRequest;
import org.openapis.openapi.models.operations.ConfirmWithAadhaarOtpUsingPOSTResponse;
import org.openapis.openapi.models.operations.ConfirmWithAadhaarOtpUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AuthAccountAadhaarOTPRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmWithAadhaarOtpUsingPOSTRequest req = new ConfirmWithAadhaarOtpUsingPOSTRequest(                new AuthAccountAadhaarOTPRequest("velit", "9251aa52-c3f5-4ad0-99da-1ffe78f097b0");) {{
                acceptLanguage = "doloremque";
            }};            

            ConfirmWithAadhaarOtpUsingPOSTResponse res = sdk.authentication.confirmWithAadhaarOtpUsingPOST(req, new ConfirmWithAadhaarOtpUsingPOSTSecurity() {{
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

## confirmWithDemographicsUsingPOST

Authenticate using demographic data of user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmWithDemographicsUsingPOSTRequest;
import org.openapis.openapi.models.operations.ConfirmWithDemographicsUsingPOSTResponse;
import org.openapis.openapi.models.operations.ConfirmWithDemographicsUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AuthAccountWithDemographicsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmWithDemographicsUsingPOSTRequest req = new ConfirmWithDemographicsUsingPOSTRequest(                new AuthAccountWithDemographicsRequest("74f15471-b5e6-4e13-b99d-488e1e91e450") {{
                                gender = "male";
                                name = "Benjamin O'Connell";
                                yearOfBirth = "labore";
                            }};) {{
                acceptLanguage = "modi";
            }};            

            ConfirmWithDemographicsUsingPOSTResponse res = sdk.authentication.confirmWithDemographicsUsingPOST(req, new ConfirmWithDemographicsUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.confirmWithDemographicsUsingPOST200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmWithMobileUsingPOST

Authentication with Mobile OTP based auth transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmWithMobileUsingPOSTRequest;
import org.openapis.openapi.models.operations.ConfirmWithMobileUsingPOSTResponse;
import org.openapis.openapi.models.operations.ConfirmWithMobileUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AuthAccountMobileOTPRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmWithMobileUsingPOSTRequest req = new ConfirmWithMobileUsingPOSTRequest(                new AuthAccountMobileOTPRequest() {{
                                otp = "qui";
                                txnId = "aliquid";
                            }};) {{
                acceptLanguage = "cupiditate";
            }};            

            ConfirmWithMobileUsingPOSTResponse res = sdk.authentication.confirmWithMobileUsingPOST(req, new ConfirmWithMobileUsingPOSTSecurity() {{
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

## initiateAuthUsingPOST

Initiate authentication process for given Health ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitiateAuthUsingPOSTRequest;
import org.openapis.openapi.models.operations.InitiateAuthUsingPOSTResponse;
import org.openapis.openapi.models.operations.InitiateAuthUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AuthInitRequest;
import org.openapis.openapi.models.shared.AuthInitRequestAuthMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InitiateAuthUsingPOSTRequest req = new InitiateAuthUsingPOSTRequest(                new AuthInitRequest(AuthInitRequestAuthMethodEnum.PASSWORD) {{
                                healthid = "perferendis";
                            }};) {{
                acceptLanguage = "magni";
            }};            

            InitiateAuthUsingPOSTResponse res = sdk.authentication.initiateAuthUsingPOST(req, new InitiateAuthUsingPOSTSecurity() {{
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

## resendAuthMobileOTPUsingPOST

Resend Aadhaar/Mobile OTP for Authentication Transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendAuthMobileOTPUsingPOSTRequest;
import org.openapis.openapi.models.operations.ResendAuthMobileOTPUsingPOSTResponse;
import org.openapis.openapi.models.operations.ResendAuthMobileOTPUsingPOSTSecurity;
import org.openapis.openapi.models.shared.ResendOTPRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResendAuthMobileOTPUsingPOSTRequest req = new ResendAuthMobileOTPUsingPOSTRequest(                new ResendOTPRequest("assumenda");) {{
                acceptLanguage = "ipsam";
            }};            

            ResendAuthMobileOTPUsingPOSTResponse res = sdk.authentication.resendAuthMobileOTPUsingPOST(req, new ResendAuthMobileOTPUsingPOSTSecurity() {{
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
