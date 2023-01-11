import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload
/** 
 * Payload specific to Youtube products.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partnerEligibilityIds" })
  partnerEligibilityIds?: string[];
}
