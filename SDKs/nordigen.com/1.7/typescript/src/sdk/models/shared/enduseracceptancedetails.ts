import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnduserAcceptanceDetails
/** 
 * Represents end-user details.
**/
export class EnduserAcceptanceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_address, form, name=ip_address;, multipart_form, name=ip_address" })
  ipAddress: string;

  @SpeakeasyMetadata({ data: "json, name=user_agent, form, name=user_agent;, multipart_form, name=user_agent" })
  userAgent: string;
}
