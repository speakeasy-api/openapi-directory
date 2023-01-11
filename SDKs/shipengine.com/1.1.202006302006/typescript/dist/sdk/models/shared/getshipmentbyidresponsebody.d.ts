import { SpeakeasyBase } from "../../../internal/utils";
import { CustomsItem } from "./customsitem";
import { WeightUnitEnum } from "./weightunitenum";
import { AdvancedShipmentOptions } from "./advancedshipmentoptions";
import { ShipmentItem } from "./shipmentitem";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
import { Package } from "./package";
import { Address } from "./address";
import { Tag } from "./tag";
/**
 * Options for international shipments, such as customs declarations.
**/
export declare class GetShipmentByIdResponseBodyInternationalShipmentOptions extends SpeakeasyBase {
    contents: Record<string, any>;
    customsItems?: CustomsItem[];
    nonDelivery: Record<string, any>;
}
/**
 * The weight of a package
**/
export declare class GetShipmentByIdResponseBodyWeight extends SpeakeasyBase {
    unit: WeightUnitEnum;
    value: number;
}
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
**/
export declare class GetShipmentByIdResponseBody extends SpeakeasyBase {
    advancedOptions: AdvancedShipmentOptions;
    carrierId: string;
    confirmation: Record<string, any>;
    createdAt: Record<string, any>;
    customs: GetShipmentByIdResponseBodyInternationalShipmentOptions;
    externalOrderId?: string;
    externalShipmentId?: string;
    insuranceProvider: Record<string, any>;
    items?: ShipmentItem[];
    modifiedAt: Record<string, any>;
    orderSourceCode?: OrderSourceNameEnum;
    packages: Package[];
    returnTo: Address;
    serviceCode: string;
    shipDate: Date;
    shipFrom: Address;
    shipTo: Address;
    shipmentId: Record<string, any>;
    shipmentStatus: Record<string, any>;
    tags: Tag[];
    totalWeight: GetShipmentByIdResponseBodyWeight;
    warehouseId: Record<string, any>;
}
