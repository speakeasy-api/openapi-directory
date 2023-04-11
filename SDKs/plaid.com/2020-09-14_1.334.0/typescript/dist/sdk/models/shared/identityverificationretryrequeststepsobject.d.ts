import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Instructions for the `custom` retry strategy specifying which steps should be required or skipped.
 *
 * @remarks
 *
 *
 * Note:
 *
 *
 * This field must be provided when the retry strategy is `custom` and must be omitted otherwise.
 *
 * Custom retries override settings in your Plaid Template. For example, if your Plaid Template has `verify_sms` disabled, a custom retry with `verify_sms` enabled will still require the step.
 *
 * The `selfie_check` step is currently not supported on the sandbox server. Sandbox requests will silently disable the `selfie_check` step when provided.
 */
export declare class IdentityVerificationRetryRequestStepsObject extends SpeakeasyBase {
    /**
     * A boolean field specifying whether the new session should require or skip the `documentary_verification` step.
     */
    documentaryVerification: boolean;
    /**
     * A boolean field specifying whether the new session should require or skip the `kyc_check` step.
     */
    kycCheck: boolean;
    /**
     * A boolean field specifying whether the new session should require or skip the `selfie_check` step.
     */
    selfieCheck: boolean;
    /**
     * A boolean field specifying whether the new session should require or skip the `verify_sms` step.
     */
    verifySms: boolean;
}
