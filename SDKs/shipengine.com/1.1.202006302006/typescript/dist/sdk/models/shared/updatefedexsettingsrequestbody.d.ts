import { SpeakeasyBase } from "../../../internal/utils";
import { FedexPickupTypeEnum } from "./fedexpickuptypeenum";
import { AncillaryServiceEndorsementEnum } from "./ancillaryserviceendorsementenum";
import { SmartPostHubEnum } from "./smartposthubenum";
/**
 * A Fedex account settings request body
**/
export declare class UpdateFedexSettingsRequestBody extends SpeakeasyBase {
    isPrimaryAccount?: boolean;
    nickname?: string;
    pickupType?: FedexPickupTypeEnum;
    smartPostEndorsement?: AncillaryServiceEndorsementEnum;
    smartPostHub?: SmartPostHubEnum;
}
