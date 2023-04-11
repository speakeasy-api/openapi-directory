import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Expiration configs for the approval request.
 */
export declare class GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput extends SpeakeasyBase {
    /**
     * Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior.
     */
    liftWhenExpired?: boolean;
    /**
     * Time after the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED.
     */
    remindTime?: string;
}
/**
 * Expiration configs for the approval request.
 */
export declare class GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration extends SpeakeasyBase {
    /**
     * Output only. Time after which the suspension expires, if no action taken.
     */
    expireTime?: string;
    /**
     * Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior.
     */
    liftWhenExpired?: boolean;
    /**
     * Time after the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED.
     */
    remindTime?: string;
}
