# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            AuthAccountPasswordRequestUsingPOSTRequest req = new AuthAccountPasswordRequestUsingPOSTRequest(                new AuthWithPasswordRequest("corrupti", "9bd9d8d6-9a67-44e0-b467-cc8796ed151a");) {{
                acceptLanguage = "perferendis";
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [authentication](docs/authentication/README.md)

* [authAccountPasswordRequestUsingPOST](docs/authentication/README.md#authaccountpasswordrequestusingpost) - Authentication with PASSWORD based auth transaction.
* [authWithMobileTokenUsingPOST](docs/authentication/README.md#authwithmobiletokenusingpost) - Authenticate using verified Mobile Number and user data
* [authenticateUserUsingPOST](docs/authentication/README.md#authenticateuserusingpost) - Authenticate request to generate Mobile OTP using Health ID number / Health ID
* [authenticateWithPasswordUsingPOST](docs/authentication/README.md#authenticatewithpasswordusingpost) - Authenticate using Health ID number / Health ID and password
* [certUsingGET](docs/authentication/README.md#certusingget) - Auth token public key.
* [confirmWithAadhaarBioUsingPOST](docs/authentication/README.md#confirmwithaadhaarbiousingpost) - Authentication with Aadhaar Biometric based auth transaction.
* [confirmWithAadhaarOtpUsingPOST](docs/authentication/README.md#confirmwithaadhaarotpusingpost) - Authentication with Aadhaar OTP based auth transaction.
* [confirmWithDemographicsUsingPOST](docs/authentication/README.md#confirmwithdemographicsusingpost) - Authenticate using demographic data of user.
* [confirmWithMobileUsingPOST](docs/authentication/README.md#confirmwithmobileusingpost) - Authentication with Mobile OTP based auth transaction.
* [initiateAuthUsingPOST](docs/authentication/README.md#initiateauthusingpost) - Initiate authentication process for given Health ID
* [resendAuthMobileOTPUsingPOST](docs/authentication/README.md#resendauthmobileotpusingpost) - Resend Aadhaar/Mobile OTP for Authentication Transaction.

### [forgotHealthIdNumber](docs/forgothealthidnumber/README.md)

* [generateAadharOTPUsingPOST1](docs/forgothealthidnumber/README.md#generateaadharotpusingpost1) - Generate Aadhaar OTP on registrered mobile number
* [generateMobileOTPUsingPOST](docs/forgothealthidnumber/README.md#generatemobileotpusingpost) - Generate Mobile OTP to start registration
* [retrievalHealthIdByAadharUsingPOST](docs/forgothealthidnumber/README.md#retrievalhealthidbyaadharusingpost) - Verify aadhar OTP sent as part of forgetHealth id.
* [retrievalHealthIdByMobileUsingPOST](docs/forgothealthidnumber/README.md#retrievalhealthidbymobileusingpost) - Verify Mobile OTP sent as  part of forgetHealth id.

### [healthFacility](docs/healthfacility/README.md)

* [authenticateHealthFacilityUsingPOST](docs/healthfacility/README.md#authenticatehealthfacilityusingpost) - Generate token for heath facility id.
* [changePasswordUsingPOST](docs/healthfacility/README.md#changepasswordusingpost) - Change password for heath facility id.
* [createAadhaarAccountUsingPOST1](docs/healthfacility/README.md#createaadhaaraccountusingpost1) - Generate Health ID card SVG
* [generateFacilityOTPUsingPOST](docs/healthfacility/README.md#generatefacilityotpusingpost) - Generate health hacility OTP on registrered mobile number
* [generatePasswordUsingPOST](docs/healthfacility/README.md#generatepasswordusingpost) - Generates password for heath facility id.
* [generateSvgCardUsingGET1](docs/healthfacility/README.md#generatesvgcardusingget1) - generateSvgCard
* [resetPasswordUsingPOST](docs/healthfacility/README.md#resetpasswordusingpost) - Reset password for heath facility id.

### [integratedPrograms](docs/integratedprograms/README.md)

* [createHealthIdByDemoAuthUsingPOST](docs/integratedprograms/README.md#createhealthidbydemoauthusingpost) - Create health id using Aadhaar Demo Auth.
* [createHealthIdByMobileUsingPOST](docs/integratedprograms/README.md#createhealthidbymobileusingpost) - Create health id using mobile Authentication.
* [delinkHidBenefitUsingPOST](docs/integratedprograms/README.md#delinkhidbenefitusingpost) - De-Linked with hid.
* [findByAadharUsingPOST](docs/integratedprograms/README.md#findbyaadharusingpost) - Search health id number using aadhar or aadhar token.
* [findByHealthIdUsingPOST](docs/integratedprograms/README.md#findbyhealthidusingpost) - Search benefit using health id number.
* [generateAadharOTPUsingPOST2](docs/integratedprograms/README.md#generateaadharotpusingpost2) - Generate Aadhaar OTP on registrered mobile number
* [generateMobileOtpUsingPOST](docs/integratedprograms/README.md#generatemobileotpusingpost) - Generate mobile OTP on registrered mobile number
* [linkHidBenefitUsingPOST](docs/integratedprograms/README.md#linkhidbenefitusingpost) - Linked with hid.
* [notifyBenefitUsingPOST](docs/integratedprograms/README.md#notifybenefitusingpost) - Create health id using notify Benefit.
* [updateAccountInformationUsingPOST1](docs/integratedprograms/README.md#updateaccountinformationusingpost1) - Update account information
* [updateMobileInformationUsingPOST](docs/integratedprograms/README.md#updatemobileinformationusingpost) - Update mobile number for account.
* [updateStatusUsingPOST](docs/integratedprograms/README.md#updatestatususingpost) - Update health id status .
* [verifyAadharOtpUsingPOST](docs/integratedprograms/README.md#verifyaadharotpusingpost) - Create health id using Aadhaar Number Otp.
* [verifyBioUsingPOST](docs/integratedprograms/README.md#verifybiousingpost) - Create health id using Biometric Authentication.

### [profile](docs/profile/README.md)

* [changePasswordViaAadharUsingPOST](docs/profile/README.md#changepasswordviaaadharusingpost) - Change password via Aadhar for heath id.
* [changePasswordViaMobileUsingPOST](docs/profile/README.md#changepasswordviamobileusingpost) - Change password via mobile for heath id.
* [changePasswordViaUsingPOST](docs/profile/README.md#changepasswordviausingpost) - Change password via password for heath id.
* [deleteAccountUsingDELETE](docs/profile/README.md#deleteaccountusingdelete) - Delete account
* [generateAadharOTPUsingGET](docs/profile/README.md#generateaadharotpusingget) - Generate Aadhaar OTP on registrered mobile number.
* [generateCardUsingGET](docs/profile/README.md#generatecardusingget) - Generate Health ID card in PDF format
* [generateMobileOTPUsingGET](docs/profile/README.md#generatemobileotpusingget) - Generate Mobile OTP to start registration.
* [generatePngCardUsingGET](docs/profile/README.md#generatepngcardusingget) - Generate Health ID card PNG
* [generateSvgCardUsingGET](docs/profile/README.md#generatesvgcardusingget) - Generate Health ID card SVG
* [generatereKycAadharOTPUsingPOST](docs/profile/README.md#generaterekycaadharotpusingpost) - Generate Aadhaar OTP on registrered for link account with aadhar number
* [getAccountInformationUsingGET](docs/profile/README.md#getaccountinformationusingget) - Get account information.
* [getBenefitsUsingGET](docs/profile/README.md#getbenefitsusingget) - Get List of Benefits associated with HealthID.
* [getQrCodeUsingGET](docs/profile/README.md#getqrcodeusingget) - Get Quick Response code in PNG format for this account.
* [updateAccountInformationUsingPOST](docs/profile/README.md#updateaccountinformationusingpost) - Update account information
* [validateTokenUsingPOST](docs/profile/README.md#validatetokenusingpost) - Validate auth token
* [verifyAadharOTPOnlyUsingPOST1](docs/profile/README.md#verifyaadharotponlyusingpost1) - Verify Aadhaar OTP to complete KYC/re-KYC verification.

### [registrationWithAadhaar](docs/registrationwithaadhaar/README.md)

* [createAadhaarAccountUsingPOST](docs/registrationwithaadhaar/README.md#createaadhaaraccountusingpost) - Create Health ID using pre-verified Aadhaar & Mobile.
* [generateAadharOTPUsingPOST](docs/registrationwithaadhaar/README.md#generateaadharotpusingpost) - Generate Aadhaar OTP on registrered mobile number
* [generateMobileOTPForTxnUsingPOST](docs/registrationwithaadhaar/README.md#generatemobileotpfortxnusingpost) - Generate Mobile OTP for verification.
* [getHealthIdNumbersByAadharUsingPOST](docs/registrationwithaadhaar/README.md#gethealthidnumbersbyaadharusingpost) - Search health id number using aadhar.
* [resendAadharOTPUsingPOST](docs/registrationwithaadhaar/README.md#resendaadharotpusingpost) - Resend Aadhaar OTP on registrered mobile number to create Health ID.
* [verifyAadharBioUsingPOST](docs/registrationwithaadhaar/README.md#verifyaadharbiousingpost) - Verify Aadhaar using biometrics.
* [verifyAadharOTPOnlyUsingPOST](docs/registrationwithaadhaar/README.md#verifyaadharotponlyusingpost) - Verify Aadhaar OTP and continue for mobile verification.
* [verifyAadharOTPUsingPOST](docs/registrationwithaadhaar/README.md#verifyaadharotpusingpost) - Verify Aadhaar OTP on registrered mobile number to create Health ID.
* [verifyMobileOTPForTxnUsingPOST](docs/registrationwithaadhaar/README.md#verifymobileotpfortxnusingpost) - Verify Mobile OTP in an existing transaction.

### [registrationWithMobileNumber](docs/registrationwithmobilenumber/README.md)

* [generateMobileOTPUsingPOST1](docs/registrationwithmobilenumber/README.md#generatemobileotpusingpost1) - Generate Mobile OTP to start registration
* [resentOtpUsingPOST](docs/registrationwithmobilenumber/README.md#resentotpusingpost) - Resend Mobile OTP for Health ID registration
* [verifyMobileOTPUsingPOST](docs/registrationwithmobilenumber/README.md#verifymobileotpusingpost) - Verify Mobile OTP sent as part of registration transaction.
* [verifyUserViaMobileUsingPOST](docs/registrationwithmobilenumber/README.md#verifyuserviamobileusingpost) - Create Health ID with verified mobile token

### [search](docs/search/README.md)

* [searchUserByAccountUsingPOST](docs/search/README.md#searchuserbyaccountusingpost) - Search a user by Health ID Number.
* [searchUserByMobileUsingPOST](docs/search/README.md#searchuserbymobileusingpost) - Search users with a mobile number.
* [searchUserByUseridUsingPOST](docs/search/README.md#searchuserbyuseridusingpost) - Search a user by Health IDs.

### [tags](docs/tags/README.md)

* [addTagUsingPOST](docs/tags/README.md#addtagusingpost) - Add tag against HealthId.
* [deleteTagUsingDELETE](docs/tags/README.md#deletetagusingdelete) - Delete tag against HealthId.
* [getTagsUsingGET](docs/tags/README.md#gettagsusingget) - Get list of Tags against HealthID.

### [utility](docs/utility/README.md)

* [getDistrictsInStateUsingGET](docs/utility/README.md#getdistrictsinstateusingget) - Get a list of districts in a given  State as per LGD.
* [getStatesUsingGET](docs/utility/README.md#getstatesusingget) - Get a list of states as per LGD.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
