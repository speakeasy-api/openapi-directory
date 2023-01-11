import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FedexPickupTypeEnum } from "./fedexpickuptypeenum";
import { AncillaryServiceEndorsementEnum } from "./ancillaryserviceendorsementenum";
import { SmartPostHubEnum } from "./smartposthubenum";



// FedexSettingsResponseBody
/** 
 * A Fedex account settings request body
**/
export class FedexSettingsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_primary_account" })
  isPrimaryAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=pickup_type" })
  pickupType?: FedexPickupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=smart_post_endorsement" })
  smartPostEndorsement?: AncillaryServiceEndorsementEnum;

  @SpeakeasyMetadata({ data: "json, name=smart_post_hub" })
  smartPostHub?: SmartPostHubEnum;
}
