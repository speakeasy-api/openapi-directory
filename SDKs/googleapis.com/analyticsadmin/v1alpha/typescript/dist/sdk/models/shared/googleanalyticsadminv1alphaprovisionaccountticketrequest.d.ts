import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccountInput } from "./googleanalyticsadminv1alphaaccount";
/**
 * Request message for ProvisionAccountTicket RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput extends SpeakeasyBase {
    /**
     * A resource message representing a Google Analytics account.
     */
    account?: GoogleAnalyticsAdminV1alphaAccountInput;
    /**
     * Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI.
     */
    redirectUri?: string;
}
