import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccountInput } from "./googleanalyticsadminv1betaaccount";
/**
 * Request message for ProvisionAccountTicket RPC.
 */
export declare class GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput extends SpeakeasyBase {
    /**
     * A resource message representing a Google Analytics account.
     */
    account?: GoogleAnalyticsAdminV1betaAccountInput;
    /**
     * Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI.
     */
    redirectUri?: string;
}
