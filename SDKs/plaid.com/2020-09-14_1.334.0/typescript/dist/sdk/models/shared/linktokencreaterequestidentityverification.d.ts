import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies option for initializing Link for use with the Identity Verification product.
 */
export declare class LinkTokenCreateRequestIdentityVerification extends SpeakeasyBase {
    consent?: boolean;
    /**
     * A flag specifying whether the end user has already agreed to a privacy policy specifying that their data will be shared with Plaid for verification purposes.
     *
     * @remarks
     *
     * If `gave_consent` is set to `true`, the `accept_tos` step will be marked as `skipped` and the end user's session will start at the next step requirement.
     */
    gaveConsent?: boolean;
    /**
     * ID of the associated Identity Verification template.
     */
    templateId: string;
}
