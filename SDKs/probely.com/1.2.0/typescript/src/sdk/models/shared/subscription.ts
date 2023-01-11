import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coupon_ids" })
  couponIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=target_ids" })
  targetIds?: string[];
}
