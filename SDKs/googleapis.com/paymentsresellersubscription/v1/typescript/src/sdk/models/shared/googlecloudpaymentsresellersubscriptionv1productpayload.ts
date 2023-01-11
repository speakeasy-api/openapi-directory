import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload } from "./googlecloudpaymentsresellersubscriptionv1googleonepayload";
import { GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload } from "./googlecloudpaymentsresellersubscriptionv1youtubepayload";



// GoogleCloudPaymentsResellerSubscriptionV1ProductPayload
/** 
 * Specifies product specific payload.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1ProductPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleOnePayload" })
  googleOnePayload?: GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload;

  @SpeakeasyMetadata({ data: "json, name=youtubePayload" })
  youtubePayload?: GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload;
}
