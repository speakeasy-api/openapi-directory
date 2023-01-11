import { SpeakeasyBase } from "../../../internal/utils";
import { CustomsItemInput } from "./customsitem";
import { CustomsItem } from "./customsitem";
import { WeightUnitEnum } from "./weightunitenum";
import { AdvancedShipmentOptions } from "./advancedshipmentoptions";
import { ShipmentItem } from "./shipmentitem";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
import { PackageInput } from "./package";
import { Address } from "./address";
import { Package } from "./package";
import { Tag } from "./tag";
/**
 * Options for international shipments, such as customs declarations.
**/
export declare class PartialShipmentInternationalShipmentOptionsInput extends SpeakeasyBase {
    contents: Record<string, any>;
    customsItems?: CustomsItemInput[];
    nonDelivery: Record<string, any>;
}
/**
 * Options for international shipments, such as customs declarations.
**/
export declare class PartialShipmentInternationalShipmentOptions extends SpeakeasyBase {
    contents: Record<string, any>;
    customsItems?: CustomsItem[];
    nonDelivery: Record<string, any>;
}
/**
 * The weight of a package
**/
export declare class PartialShipmentWeight extends SpeakeasyBase {
    unit: WeightUnitEnum;
    value: number;
}
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
**/
export declare class PartialShipmentInput extends SpeakeasyBase {
    advancedOptions?: AdvancedShipmentOptions;
    carrierId?: string;
    confirmation?: Record<string, any>;
    customs?: PartialShipmentInternationalShipmentOptionsInput;
    externalOrderId?: string;
    externalShipmentId?: string;
    insuranceProvider?: Record<string, any>;
    items?: ShipmentItem[];
    orderSourceCode?: OrderSourceNameEnum;
    packages?: PackageInput[];
    returnTo?: Address;
    serviceCode?: string;
    shipDate?: Date;
    shipFrom?: Address;
    shipTo?: Address;
    warehouseId?: Record<string, any>;
}
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
**/
export declare class PartialShipment extends SpeakeasyBase {
    advancedOptions?: AdvancedShipmentOptions;
    carrierId?: string;
    confirmation?: Record<string, any>;
    createdAt?: Record<string, any>;
    customs?: PartialShipmentInternationalShipmentOptions;
    externalOrderId?: string;
    externalShipmentId?: string;
    insuranceProvider?: Record<string, any>;
    items?: ShipmentItem[];
    modifiedAt?: Record<string, any>;
    orderSourceCode?: OrderSourceNameEnum;
    packages?: Package[];
    returnTo?: Address;
    serviceCode?: string;
    shipDate?: Date;
    shipFrom?: Address;
    shipTo?: Address;
    shipmentId?: Record<string, any>;
    shipmentStatus?: Record<string, any>;
    tags?: Tag[];
    totalWeight?: PartialShipmentWeight;
    warehouseId?: Record<string, any>;
}
