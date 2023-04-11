import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedShipmentOptions } from "./advancedshipmentoptions";
import { CustomsItemInput } from "./customsitem";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
import { PackageInput } from "./package";
import { ShipmentItem } from "./shipmentitem";
import { ShippingAddress } from "./shippingaddress";
import { TaxIdentifier } from "./taxidentifier";
/**
 * The possible delivery confirmation values
 */
export declare enum UpdateShipmentRequestBodyDeliveryConfirmationEnum {
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
export declare enum UpdateShipmentRequestBodyInternationalShipmentOptionsPackageContentsEnum {
    Merchandise = "merchandise",
    Documents = "documents",
    Gift = "gift",
    ReturnedGoods = "returned_goods",
    Sample = "sample"
}
/**
 * The possible non delivery values
 */
export declare enum UpdateShipmentRequestBodyInternationalShipmentOptionsNonDeliveryEnum {
    ReturnToSender = "return_to_sender",
    TreatAsAbandoned = "treat_as_abandoned"
}
/**
 * Options for international shipments, such as customs declarations.
 */
export declare class UpdateShipmentRequestBodyInternationalShipmentOptionsInput extends SpeakeasyBase {
    /**
     * The type of contents in this shipment.  This may impact import duties or customs treatment.
     */
    contents: UpdateShipmentRequestBodyInternationalShipmentOptionsPackageContentsEnum;
    /**
     * Customs declarations for each item in the shipment.
     */
    customsItems?: CustomsItemInput[];
    /**
     * Indicates what to do if a package is unable to be delivered.
     */
    nonDelivery: UpdateShipmentRequestBodyInternationalShipmentOptionsNonDeliveryEnum;
}
/**
 * The possible insurance provider values
 */
export declare enum UpdateShipmentRequestBodyInsuranceProviderEnum {
    None = "none",
    Shipsurance = "shipsurance",
    Carrier = "carrier",
    ThirdParty = "third_party"
}
/**
 * Indicates if the package will be picked up or dropped off by the carrier
 */
export declare enum UpdateShipmentRequestBodyOriginTypeEnum {
    Pickup = "pickup",
    DropOff = "drop_off"
}
/**
 * The possible validate address values
 */
export declare enum UpdateShipmentRequestBodyValidateAddressEnum {
    NoValidation = "no_validation",
    ValidateOnly = "validate_only",
    ValidateAndClean = "validate_and_clean"
}
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
 * @remarks
 *
 */
export declare class UpdateShipmentRequestBodyInput extends SpeakeasyBase {
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
    confirmation?: UpdateShipmentRequestBodyDeliveryConfirmationEnum;
    /**
     * Customs information.  This is usually only needed for international shipments.
     *
     * @remarks
     *
     */
    customs?: UpdateShipmentRequestBodyInternationalShipmentOptionsInput;
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
    insuranceProvider?: UpdateShipmentRequestBodyInsuranceProviderEnum;
    /**
     * Describe the packages included in this shipment as related to potential metadata that was imported from
     *
     * @remarks
     * external order sources
     *
     */
    items?: ShipmentItem[];
    orderSourceCode?: OrderSourceNameEnum;
    /**
     * Indicates if the package will be picked up or dropped off by the carrier
     */
    originType?: UpdateShipmentRequestBodyOriginTypeEnum;
    /**
     * The packages in the shipment.
     *
     * @remarks
     *
     * > **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.
     *
     */
    packages?: PackageInput[];
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
    shipFrom: ShippingAddress;
    /**
     * The recipient's mailing address
     */
    shipTo: ShippingAddress;
    /**
     * A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.
     *
     * @remarks
     *
     * > **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.
     *
     */
    shipmentNumber?: string;
    taxIdentifiers?: TaxIdentifier[];
    validateAddress?: UpdateShipmentRequestBodyValidateAddressEnum;
    /**
     * The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
     *
     * @remarks
     *
     */
    warehouseId?: string;
}
