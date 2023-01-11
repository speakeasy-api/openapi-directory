import { SpeakeasyBase } from "../../../internal/utils";
import { WeightUnitEnum } from "./weightunitenum";
import { CollectOnDelivery } from "./collectondelivery";
/**
 * The weight of a package
**/
export declare class AdvancedShipmentOptionsWeight extends SpeakeasyBase {
    unit: WeightUnitEnum;
    value: number;
}
/**
 * Advanced shipment options
**/
export declare class AdvancedShipmentOptions extends SpeakeasyBase {
    billToAccount?: string;
    billToCountryCode?: Record<string, any>;
    billToParty?: Record<string, any>;
    billToPostalCode?: string;
    collectOnDelivery?: CollectOnDelivery;
    containsAlcohol?: boolean;
    customField1?: string;
    customField2?: string;
    customField3?: string;
    deliveredDutyPaid?: boolean;
    dryIce?: boolean;
    dryIceWeight?: AdvancedShipmentOptionsWeight;
    freightClass?: string;
    nonMachinable?: boolean;
    saturdayDelivery?: boolean;
    useUpsGroundFreightPricing?: boolean;
}
