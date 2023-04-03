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

import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTSecurity;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTRequest;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTResponse;
import org.openapis.openapi.models.shared.AuthWithPasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthAccountPasswordRequestUsingPOSTRequest req = new AuthAccountPasswordRequestUsingPOSTRequest() {{
                acceptLanguage = "corrupti";
                authWithPasswordRequest = new AuthWithPasswordRequest() {{
                    password = "provident";
                    txnId = "bd9d8d69-a674-4e0f-867c-c8796ed151a0";
                }};
            }}            

            AuthAccountPasswordRequestUsingPOSTResponse res = sdk.authentication.authAccountPasswordRequestUsingPOST(req, new AuthAccountPasswordRequestUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### authentication

* `authAccountPasswordRequestUsingPOST` - Authentication with PASSWORD based auth transaction.
* `authWithMobileTokenUsingPOST` - Authenticate using verified Mobile Number and user data
* `authenticateUserUsingPOST` - Authenticate request to generate Mobile OTP using Health ID number / Health ID
* `authenticateWithPasswordUsingPOST` - Authenticate using Health ID number / Health ID and password
* `certUsingGET` - Auth token public key.
* `confirmWithAadhaarBioUsingPOST` - Authentication with Aadhaar Biometric based auth transaction.
* `confirmWithAadhaarOtpUsingPOST` - Authentication with Aadhaar OTP based auth transaction.
* `confirmWithDemographicsUsingPOST` - Authenticate using demographic data of user.
* `confirmWithMobileUsingPOST` - Authentication with Mobile OTP based auth transaction.
* `initiateAuthUsingPOST` - Initiate authentication process for given Health ID
* `resendAuthMobileOTPUsingPOST` - Resend Aadhaar/Mobile OTP for Authentication Transaction.

### forgotHealthIdNumber

* `generateAadharOTPUsingPOST1` - Generate Aadhaar OTP on registrered mobile number
* `generateMobileOTPUsingPOST` - Generate Mobile OTP to start registration
* `retrievalHealthIdByAadharUsingPOST` - Verify aadhar OTP sent as part of forgetHealth id.
* `retrievalHealthIdByMobileUsingPOST` - Verify Mobile OTP sent as  part of forgetHealth id.

### healthFacility

* `authenticateHealthFacilityUsingPOST` - Generate token for heath facility id.
* `changePasswordUsingPOST` - Change password for heath facility id.
* `createAadhaarAccountUsingPOST1` - Generate Health ID card SVG
* `generateFacilityOTPUsingPOST` - Generate health hacility OTP on registrered mobile number
* `generatePasswordUsingPOST` - Generates password for heath facility id.
* `generateSvgCardUsingGET1` - generateSvgCard
* `resetPasswordUsingPOST` - Reset password for heath facility id.

### integratedPrograms

* `createHealthIdByDemoAuthUsingPOST` - Create health id using Aadhaar Demo Auth.
* `createHealthIdByMobileUsingPOST` - Create health id using mobile Authentication.
* `delinkHidBenefitUsingPOST` - De-Linked with hid.
* `findByAadharUsingPOST` - Search health id number using aadhar or aadhar token.
* `findByHealthIdUsingPOST` - Search benefit using health id number.
* `generateAadharOTPUsingPOST2` - Generate Aadhaar OTP on registrered mobile number
* `generateMobileOtpUsingPOST` - Generate mobile OTP on registrered mobile number
* `linkHidBenefitUsingPOST` - Linked with hid.
* `notifyBenefitUsingPOST` - Create health id using notify Benefit.
* `updateAccountInformationUsingPOST1` - Update account information
* `updateMobileInformationUsingPOST` - Update mobile number for account.
* `updateStatusUsingPOST` - Update health id status .
* `verifyAadharOtpUsingPOST` - Create health id using Aadhaar Number Otp.
* `verifyBioUsingPOST` - Create health id using Biometric Authentication.

### profile

* `changePasswordViaAadharUsingPOST` - Change password via Aadhar for heath id.
* `changePasswordViaMobileUsingPOST` - Change password via mobile for heath id.
* `changePasswordViaUsingPOST` - Change password via password for heath id.
* `deleteAccountUsingDELETE` - Delete account
* `generateAadharOTPUsingGET` - Generate Aadhaar OTP on registrered mobile number.
* `generateCardUsingGET` - Generate Health ID card in PDF format
* `generateMobileOTPUsingGET` - Generate Mobile OTP to start registration.
* `generatePngCardUsingGET` - Generate Health ID card PNG
* `generateSvgCardUsingGET` - Generate Health ID card SVG
* `generatereKycAadharOTPUsingPOST` - Generate Aadhaar OTP on registrered for link account with aadhar number
* `getAccountInformationUsingGET` - Get account information.
* `getBenefitsUsingGET` - Get List of Benefits associated with HealthID.
* `getQrCodeUsingGET` - Get Quick Response code in PNG format for this account.
* `updateAccountInformationUsingPOST` - Update account information
* `validateTokenUsingPOST` - Validate auth token
* `verifyAadharOTPOnlyUsingPOST1` - Verify Aadhaar OTP to complete KYC/re-KYC verification.

### registrationWithAadhaar

* `createAadhaarAccountUsingPOST` - Create Health ID using pre-verified Aadhaar & Mobile.
* `generateAadharOTPUsingPOST` - Generate Aadhaar OTP on registrered mobile number
* `generateMobileOTPForTxnUsingPOST` - Generate Mobile OTP for verification.
* `getHealthIdNumbersByAadharUsingPOST` - Search health id number using aadhar.
* `resendAadharOTPUsingPOST` - Resend Aadhaar OTP on registrered mobile number to create Health ID.
* `verifyAadharBioUsingPOST` - Verify Aadhaar using biometrics.
* `verifyAadharOTPOnlyUsingPOST` - Verify Aadhaar OTP and continue for mobile verification.
* `verifyAadharOTPUsingPOST` - Verify Aadhaar OTP on registrered mobile number to create Health ID.
* `verifyMobileOTPForTxnUsingPOST` - Verify Mobile OTP in an existing transaction.

### registrationWithMobileNumber

* `generateMobileOTPUsingPOST1` - Generate Mobile OTP to start registration
* `resentOtpUsingPOST` - Resend Mobile OTP for Health ID registration
* `verifyMobileOTPUsingPOST` - Verify Mobile OTP sent as part of registration transaction.
* `verifyUserViaMobileUsingPOST` - Create Health ID with verified mobile token

### search

* `searchUserByAccountUsingPOST` - Search a user by Health ID Number.
* `searchUserByMobileUsingPOST` - Search users with a mobile number.
* `searchUserByUseridUsingPOST` - Search a user by Health IDs.

### tags

* `addTagUsingPOST` - Add tag against HealthId.
* `deleteTagUsingDELETE` - Delete tag against HealthId.
* `getTagsUsingGET` - Get list of Tags against HealthID.

### utility

* `getDistrictsInStateUsingGET` - Get a list of districts in a given  State as per LGD.
* `getStatesUsingGET` - Get a list of states as per LGD.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
