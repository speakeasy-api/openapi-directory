import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AncillaryServiceEndorsementEnum } from "./ancillaryserviceendorsementenum";



// ConnectDhlEcommerceRequestBody
/** 
 * A DHL Ecommerce account information request body
**/
export class ConnectDhlEcommerceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ancillary_endorsement" })
  ancillaryEndorsement?: AncillaryServiceEndorsementEnum;

  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=api_secret" })
  apiSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=distribution_center" })
  distributionCenter: string;

  @SpeakeasyMetadata({ data: "json, name=ftp_password" })
  ftpPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=ftp_username" })
  ftpUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=pickup_number" })
  pickupNumber: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
