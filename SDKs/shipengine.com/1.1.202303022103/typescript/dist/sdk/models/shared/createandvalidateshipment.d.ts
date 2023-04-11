import { SpeakeasyBase } from "../../../internal/utils";
import { AddressValidationResult } from "./addressvalidationresult";
import { AdvancedShipmentOptions } from "./advancedshipmentoptions";
import { CustomsItem } from "./customsitem";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
import { Package } from "./package";
import { ShipmentItem } from "./shipmentitem";
import { ShippingAddress } from "./shippingaddress";
import { Tag } from "./tag";
import { TaxIdentifier } from "./taxidentifier";
import { WeightUnitEnum } from "./weightunitenum";
/**
 * The possible delivery confirmation values
 */
export declare enum CreateAndValidateShipmentDeliveryConfirmationEnum {
    None = "none",
    Delivery = "delivery",
    Signature = "signature",
    AdultSignature = "adult_signature",
    DirectSignature = "direct_signature",
    DeliveryMailed = "delivery_mailed",
    VerbalConfirmation = "verbal_confirmation"
}
/**
 * The possible package contents values
 */
export declare enum CreateAndValidateShipmentInternationalShipmentOptionsPackageContentsEnum {
    Merchandise = "merchandise",
    Documents = "documents",
    Gift = "gift",
    ReturnedGoods = "returned_goods",
    Sample = "sample"
}
/**
 * The possible non delivery values
 */
export declare enum CreateAndValidateShipmentInternationalShipmentOptionsNonDeliveryEnum {
    ReturnToSender = "return_to_sender",
    TreatAsAbandoned = "treat_as_abandoned"
}
/**
 * Options for international shipments, such as customs declarations.
 */
export declare class CreateAndValidateShipmentInternationalShipmentOptions extends SpeakeasyBase {
    /**
     * The type of contents in this shipment.  This may impact import duties or customs treatment.
     */
    contents: CreateAndValidateShipmentInternationalShipmentOptionsPackageContentsEnum;
    /**
     * Customs declarations for each item in the shipment.
     */
    customsItems?: CustomsItem[];
    /**
     * Indicates what to do if a package is unable to be delivered.
     */
    nonDelivery: CreateAndValidateShipmentInternationalShipmentOptionsNonDeliveryEnum;
}
/**
 * The possible insurance provider values
 */
export declare enum CreateAndValidateShipmentInsuranceProviderEnum {
    None = "none",
    Shipsurance = "shipsurance",
    Carrier = "carrier",
    ThirdParty = "third_party"
}
/**
 * Indicates if the package will be picked up or dropped off by the carrier
 */
export declare enum CreateAndValidateShipmentOriginTypeEnum {
    Pickup = "pickup",
    DropOff = "drop_off"
}
/**
 * The possible shipment status values
 */
export declare enum CreateAndValidateShipmentShipmentStatusEnum {
    Pending = "pending",
    Processing = "processing",
    LabelPurchased = "label_purchased",
    Cancelled = "cancelled"
}
/**
 * The weight of a package
 */
export declare class CreateAndValidateShipmentWeight extends SpeakeasyBase {
    unit: WeightUnitEnum;
    /**
     * The weight, in the specified unit
     */
    value: number;
}
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
 * @remarks
 *
 */
export declare class CreateAndValidateShipment extends SpeakeasyBase {
    /**
     * The address validation
     */
    addressValidation?: AddressValidationResult;
    /**
     * Advanced shipment options.  These are entirely optional.
     */
    advancedOptions?: AdvancedShipmentOptions;
    /**
     * The carrier account that is billed for the shipping charges
     */
    carrierId?: string;
    /**
     * The type of delivery confirmation that is required for this shipment.
     */
    confirmation?: CreateAndValidateShipmentDeliveryConfirmationEnum;
    /**
     * The date and time that the shipment was created in ShipEngine.
     */
    createdAt?: Date;
    /**
     * Customs information.  This is usually only needed for international shipments.
     *
     * @remarks
     *
     */
    customs?: CreateAndValidateShipmentInternationalShipmentOptions;
    /**
     * An array of errors that occurred while creating shipment.
     */
    errors?: string[];
    /**
     * ID that the Order Source assigned
     */
    externalOrderId?: string;
    /**
     * A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.
     *
     * @remarks
     *
     * > **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.
     *
     */
    externalShipmentId?: string;
    /**
     * The insurance provider to use for any insured packages in the shipment.
     *
     * @remarks
     *
     */
    insuranceProvider?: CreateAndValidateShipmentInsuranceProviderEnum;
    /**
     * Describe the packages included in this shipment as related to potential metadata that was imported from
     *
     * @remarks
     * external order sources
     *
     */
    items?: ShipmentItem[];
    /**
     * The date and time that the shipment was created or last modified.
     */
    modifiedAt?: Date;
    orderSourceCode?: OrderSourceNameEnum;
    /**
     * Indicates if the package will be picked up or dropped off by the carrier
     */
    originType?: CreateAndValidateShipmentOriginTypeEnum;
    /**
     * The packages in the shipment.
     *
     * @remarks
     *
     * > **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.
     *
     */
    packages?: Package[];
    /**
     * The return address for this shipment.  Defaults to the `ship_from` address.
     *
     * @remarks
     *
     */
    returnTo?: ShippingAddress;
    /**
     * The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
     *
     * @remarks
     *
     */
    serviceCode?: string;
    /**
     * The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
     *
     * @remarks
     *
     */
    shipDate?: Date;
    /**
     * The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.
     *
     * @remarks
     *
     */
    shipFrom?: ShippingAddress;
    /**
     * The recipient's mailing address
     */
    shipTo?: ShippingAddress;
    /**
     * A string that uniquely identifies the shipment
     */
    shipmentId?: string;
    /**
     * A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.
     *
     * @remarks
     *
     * > **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.
     *
     */
    shipmentNumber?: string;
    /**
     * The current status of the shipment
     */
    shipmentStatus?: CreateAndValidateShipmentShipmentStatusEnum;
    /**
     * Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
     *
     * @remarks
     *
     */
    tags?: Tag[];
    taxIdentifiers?: TaxIdentifier[];
    /**
     * The combined weight of all packages in the shipment
     */
    totalWeight?: CreateAndValidateShipmentWeight;
    /**
     * The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
     *
     * @remarks
     *
     */
    warehouseId?: string;
}
