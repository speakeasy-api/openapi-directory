import { SpeakeasyBase } from "../../../internal/utils";
import { CustomsItemInput } from "./customsitem";
import { AdvancedShipmentOptions } from "./advancedshipmentoptions";
import { ShipmentItem } from "./shipmentitem";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
import { PackageInput } from "./package";
import { Address } from "./address";
/**
 * Options for international shipments, such as customs declarations.
**/
export declare class UpdateShipmentRequestBodyInternationalShipmentOptionsInput extends SpeakeasyBase {
    contents: Record<string, any>;
    customsItems?: CustomsItemInput[];
    nonDelivery: Record<string, any>;
}
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
**/
export declare class UpdateShipmentRequestBodyInput extends SpeakeasyBase {
    advancedOptions?: AdvancedShipmentOptions;
    carrierId?: string;
    confirmation?: Record<string, any>;
    customs?: UpdateShipmentRequestBodyInternationalShipmentOptionsInput;
    externalOrderId?: string;
    externalShipmentId?: string;
    insuranceProvider?: Record<string, any>;
    items?: ShipmentItem[];
    orderSourceCode?: OrderSourceNameEnum;
    packages?: PackageInput[];
    returnTo?: Address;
    serviceCode?: string;
    shipDate?: Date;
    shipFrom: Address;
    shipTo: Address;
    validateAddress?: Record<string, any>;
    warehouseId?: Record<string, any>;
}
