import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse
/** 
 * Response message for ProvisionAccountTicket RPC.
**/
export class GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountTicketId" })
  accountTicketId?: string;
}
