import { SpeakeasyBase } from "../../../internal/utils";
import { AncillaryServiceEndorsementEnum } from "./ancillaryserviceendorsementenum";
import { FedexPickupTypeEnum } from "./fedexpickuptypeenum";
import { SmartPostHubEnum } from "./smartposthubenum";
/**
 * A Fedex account settings request body
 */
export declare class FedexSettingsResponseBody extends SpeakeasyBase {
    isPrimaryAccount?: boolean;
    letterheadImage?: string;
    /**
     * Account nickname
     */
    nickname?: string;
    pickupType?: FedexPickupTypeEnum;
    signatureImage?: string;
    smartPostEndorsement?: AncillaryServiceEndorsementEnum;
    smartPostHub?: SmartPostHubEnum;
}
