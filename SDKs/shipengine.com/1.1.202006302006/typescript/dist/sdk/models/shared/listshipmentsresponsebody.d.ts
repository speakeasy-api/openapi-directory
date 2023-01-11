import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";
import { CustomsItem } from "./customsitem";
import { WeightUnitEnum } from "./weightunitenum";
import { AdvancedShipmentOptions } from "./advancedshipmentoptions";
import { ShipmentItem } from "./shipmentitem";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
import { Package } from "./package";
import { Address } from "./address";
import { Tag } from "./tag";
/**
 * Helpful links to other pages of results
**/
export declare class ListShipmentsResponseBodyPaginationLink extends SpeakeasyBase {
    first: Link;
    last: Link;
    next: OptionalLink;
    prev: OptionalLink;
}
/**
 * Options for international shipments, such as customs declarations.
**/
export declare class ListShipmentsResponseBodyPartialShipmentInternationalShipmentOptions extends SpeakeasyBase {
    contents: Record<string, any>;
    customsItems?: CustomsItem[];
    nonDelivery: Record<string, any>;
}
/**
 * The weight of a package
**/
export declare class ListShipmentsResponseBodyPartialShipmentWeight extends SpeakeasyBase {
    unit: WeightUnitEnum;
    value: number;
}
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
**/
export declare class ListShipmentsResponseBodyPartialShipment extends SpeakeasyBase {
    advancedOptions: AdvancedShipmentOptions;
    carrierId: string;
    confirmation: Record<string, any>;
    createdAt: Record<string, any>;
    customs: ListShipmentsResponseBodyPartialShipmentInternationalShipmentOptions;
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
    totalWeight: ListShipmentsResponseBodyPartialShipmentWeight;
    warehouseId: Record<string, any>;
}
/**
 * A list shipment response body
**/
export declare class ListShipmentsResponseBody extends SpeakeasyBase {
    links: ListShipmentsResponseBodyPaginationLink;
    page: number;
    pages: number;
    shipments: ListShipmentsResponseBodyPartialShipment[];
    total: number;
}
