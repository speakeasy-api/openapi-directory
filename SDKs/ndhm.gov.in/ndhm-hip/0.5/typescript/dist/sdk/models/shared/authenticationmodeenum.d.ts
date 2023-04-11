/**
 * Subjected to CM specific capability
 *
 * @remarks
 *  1. MOBILE_OTP - for SMS OTP
 *  2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS
 *  3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number
 *  4. DEMOGRAPHICS - for auth using demographic verification.
 *
 */
export declare enum AuthenticationModeEnum {
    MobileOtp = "MOBILE_OTP",
    Direct = "DIRECT",
    Demographics = "DEMOGRAPHICS",
    AadhaarOtp = "AADHAAR_OTP"
}
