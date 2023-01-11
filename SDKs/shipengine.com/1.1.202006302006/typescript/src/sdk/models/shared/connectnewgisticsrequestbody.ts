import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectNewgisticsRequestBody
/** 
 * A Newgistics account information request body
**/
export class ConnectNewgisticsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=induction_site" })
  inductionSite: string;

  @SpeakeasyMetadata({ data: "json, name=mailer_id" })
  mailerId?: number;

  @SpeakeasyMetadata({ data: "json, name=merchant_id" })
  merchantId?: number;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;
}
