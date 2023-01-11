import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectAmazonBuyShippingRequestBody
/** 
 * An Amazon account information request body
**/
export class ConnectAmazonBuyShippingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=merchant_seller_id" })
  merchantSellerId: string;

  @SpeakeasyMetadata({ data: "json, name=mws_auth_token" })
  mwsAuthToken: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;
}
