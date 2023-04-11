import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration, GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput } from "./googlecloudintegrationsv1alphasuspensionapprovalexpiration";
/**
 * Configurations for approving the Suspension.
 */
export declare class GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput extends SpeakeasyBase {
    /**
     * Information to provide for recipients.
     */
    customMessage?: string;
    /**
     * Email addresses to send approval request to.
     */
    emailAddresses?: string[];
    /**
     * Expiration configs for the approval request.
     */
    expiration?: GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput;
}
/**
 * Configurations for approving the Suspension.
 */
export declare class GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig extends SpeakeasyBase {
    /**
     * Information to provide for recipients.
     */
    customMessage?: string;
    /**
     * Email addresses to send approval request to.
     */
    emailAddresses?: string[];
    /**
     * Expiration configs for the approval request.
     */
    expiration?: GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration;
}
