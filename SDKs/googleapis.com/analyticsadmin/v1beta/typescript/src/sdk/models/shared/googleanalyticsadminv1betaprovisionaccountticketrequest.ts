import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccountInput } from "./googleanalyticsadminv1betaaccount";



// GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput
/** 
 * Request message for ProvisionAccountTicket RPC.
**/
export class GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: GoogleAnalyticsAdminV1betaAccountInput;

  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;
}
