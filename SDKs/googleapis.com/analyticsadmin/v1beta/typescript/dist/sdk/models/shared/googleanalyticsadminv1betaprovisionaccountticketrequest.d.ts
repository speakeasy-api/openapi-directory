import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccountInput } from "./googleanalyticsadminv1betaaccount";
/**
 * Request message for ProvisionAccountTicket RPC.
**/
export declare class GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput extends SpeakeasyBase {
    account?: GoogleAnalyticsAdminV1betaAccountInput;
    redirectUri?: string;
}
