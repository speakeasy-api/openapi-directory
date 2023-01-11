import { SpeakeasyBase } from "../../../internal/utils";
import { CustomsItemInput } from "./customsitem";
import { AdvancedShipmentOptions } from "./advancedshipmentoptions";
import { ShipmentItem } from "./shipmentitem";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
import { PackageInput } from "./package";
import { Address } from "./address";
import { LabelChargeEventEnum } from "./labelchargeeventenum";
/**
 * Options for international shipments, such as customs declarations.
**/
export declare class CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput extends SpeakeasyBase {
    contents: Record<string, any>;
    customsItems?: CustomsItemInput[];
    nonDelivery: Record<string, any>;
}
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
**/
export declare class CreateLabelRequestBodyPartialShipmentInput extends SpeakeasyBase {
    advancedOptions: AdvancedShipmentOptions;
    carrierId: string;
    confirmation: Record<string, any>;
    customs: CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput;
    externalOrderId?: string;
    externalShipmentId?: string;
    insuranceProvider: Record<string, any>;
    items?: ShipmentItem[];
    orderSourceCode?: OrderSourceNameEnum;
    packages: PackageInput[];
    returnTo: Address;
    serviceCode: string;
    shipDate: Date;
    shipFrom: Address;
    shipTo: Address;
    warehouseId: Record<string, any>;
}
/**
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 *
**/
export declare class CreateLabelRequestBodyInput extends SpeakeasyBase {
    chargeEvent?: LabelChargeEventEnum;
    isReturnLabel?: boolean;
    labelDownloadType?: Record<string, any>;
    labelFormat?: Record<string, any>;
    labelImageId?: Record<string, any>;
    labelLayout?: Record<string, any>;
    outboundLabelId?: Record<string, any>;
    rmaNumber?: string;
    shipment: CreateLabelRequestBodyPartialShipmentInput;
    testLabel?: boolean;
    validateAddress?: Record<string, any>;
}
