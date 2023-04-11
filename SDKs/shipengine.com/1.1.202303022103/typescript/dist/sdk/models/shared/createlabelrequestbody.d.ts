import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedShipmentOptions } from "./advancedshipmentoptions";
import { CustomsItemInput } from "./customsitem";
import { LabelChargeEventEnum } from "./labelchargeeventenum";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
import { PackageInput } from "./package";
import { ShipmentItem } from "./shipmentitem";
import { ShippingAddress } from "./shippingaddress";
import { TaxIdentifier } from "./taxidentifier";
/**
 * The display format that the label should be shown in.
 */
export declare enum CreateLabelRequestBodyDisplaySchemeEnum {
    Label = "label",
    QrCode = "qr_code",
    LabelAndQrCode = "label_and_qr_code"
}
/**
 * There are two different ways to [download a label](https://www.shipengine.com/docs/labels/downloading/):
 *
 * @remarks
 *
 * |Label Download Type | Description
 * |--------------------|------------------------------
 * |`url`               |You will receive a URL, which you can use to download the label in a separate request. The URL will remain valid for 90 days.<br><br>This is the default if `label_download_type` is unspecified.
 * |`inline`            |You will receive the Base64-encoded label as part of the response. No need for a second request to download the label.
 *
 */
export declare enum CreateLabelRequestBodyLabelDownloadTypeEnum {
    Url = "url",
    Inline = "inline"
}
/**
 * The possible file formats in which shipping labels can be downloaded.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
 *
 * @remarks
 *
 * |Label Format  | Supported Carriers
 * |--------------|-----------------------------------
 * |`pdf`         | All carriers
 * |`png`         | `fedex` <br> `stamps_com` <br> `ups` <br> `usps`
 * |`zpl`         | `access_worldwide` <br> `apc` <br> `asendia` <br> `dhl_global_mail` <br> `dhl_express` <br> `dhl_express_australia` <br> `dhl_express_canada` <br> `dhl_express_worldwide` <br> `dhl_express_uk` <br> `dpd` <br> `endicia` <br> `fedex` <br> `fedex_uk` <br> `firstmile` <br> `imex` <br> `newgistics` <br> `ontrac` <br> `rr_donnelley` <br> `stamps_com` <br> `ups` <br> `usps`
 *
 */
export declare enum CreateLabelRequestBodyLabelFormatEnum {
    Pdf = "pdf",
    Png = "png",
    Zpl = "zpl"
}
/**
 * The available layouts (sizes) in which shipping labels can be downloaded.  The label format determines which sizes are supported.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
 *
 * @remarks
 *
 */
export declare enum CreateLabelRequestBodyLabelLayoutEnum {
    Fourx6 = "4x6",
    Letter = "letter"
}
/**
 * The possible delivery confirmation values
 */
export declare enum CreateLabelRequestBodyPartialShipmentDeliveryConfirmationEnum {
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
export declare enum CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsPackageContentsEnum {
    Merchandise = "merchandise",
    Documents = "documents",
    Gift = "gift",
    ReturnedGoods = "returned_goods",
    Sample = "sample"
}
/**
 * The possible non delivery values
 */
export declare enum CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsNonDeliveryEnum {
    ReturnToSender = "return_to_sender",
    TreatAsAbandoned = "treat_as_abandoned"
}
/**
 * Options for international shipments, such as customs declarations.
 */
export declare class CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput extends SpeakeasyBase {
    /**
     * The type of contents in this shipment.  This may impact import duties or customs treatment.
     */
    contents: CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsPackageContentsEnum;
    /**
     * Customs declarations for each item in the shipment.
     */
    customsItems?: CustomsItemInput[];
    /**
     * Indicates what to do if a package is unable to be delivered.
     */
    nonDelivery: CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsNonDeliveryEnum;
}
/**
 * The possible insurance provider values
 */
export declare enum CreateLabelRequestBodyPartialShipmentInsuranceProviderEnum {
    None = "none",
    Shipsurance = "shipsurance",
    Carrier = "carrier",
    ThirdParty = "third_party"
}
/**
 * Indicates if the package will be picked up or dropped off by the carrier
 */
export declare enum CreateLabelRequestBodyPartialShipmentOriginTypeEnum {
    Pickup = "pickup",
    DropOff = "drop_off"
}
/**
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 *
 * @remarks
 *
 */
export declare class CreateLabelRequestBodyPartialShipmentInput extends SpeakeasyBase {
    /**
     * Advanced shipment options.  These are entirely optional.
     */
    advancedOptions: AdvancedShipmentOptions;
    /**
     * The carrier account that is billed for the shipping charges
     */
    carrierId: string;
    /**
     * The type of delivery confirmation that is required for this shipment.
     */
    confirmation: CreateLabelRequestBodyPartialShipmentDeliveryConfirmationEnum;
    /**
     * Customs information.  This is usually only needed for international shipments.
     *
     * @remarks
     *
     */
    customs: CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput;
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
    insuranceProvider: CreateLabelRequestBodyPartialShipmentInsuranceProviderEnum;
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
    originType?: CreateLabelRequestBodyPartialShipmentOriginTypeEnum;
    /**
     * The packages in the shipment.
     *
     * @remarks
     *
     * > **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.
     *
     */
    packages: PackageInput[];
    /**
     * The return address for this shipment.  Defaults to the `ship_from` address.
     *
     * @remarks
     *
     */
    returnTo: ShippingAddress;
    /**
     * The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
     *
     * @remarks
     *
     */
    serviceCode: string;
    /**
     * The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
     *
     * @remarks
     *
     */
    shipDate: Date;
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
    /**
     * The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
     *
     * @remarks
     *
     */
    warehouseId: string;
}
/**
 * The possible validate address values
 */
export declare enum CreateLabelRequestBodyValidateAddressEnum {
    NoValidation = "no_validation",
    ValidateOnly = "validate_only",
    ValidateAndClean = "validate_and_clean"
}
/**
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 *
 * @remarks
 *
 */
export declare class CreateLabelRequestBodyInput extends SpeakeasyBase {
    /**
     * The label charge event.
     *
     * @remarks
     *
     */
    chargeEvent?: LabelChargeEventEnum;
    /**
     * The display format that the label should be shown in.
     */
    displayScheme?: CreateLabelRequestBodyDisplaySchemeEnum;
    /**
     * Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
     *
     * @remarks
     *
     */
    isReturnLabel?: boolean;
    labelDownloadType?: CreateLabelRequestBodyLabelDownloadTypeEnum;
    /**
     * The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
     *
     * @remarks
     *
     */
    labelFormat?: CreateLabelRequestBodyLabelFormatEnum;
    /**
     * The label image resource that was used to create a custom label image.
     */
    labelImageId?: string;
    /**
     * The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
     *
     * @remarks
     *
     */
    labelLayout?: CreateLabelRequestBodyLabelLayoutEnum;
    /**
     * The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
     *
     * @remarks
     * required by some carriers.
     *
     */
    outboundLabelId?: string;
    /**
     * An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
     *
     * @remarks
     *
     */
    rmaNumber?: string;
    /**
     * A unique identifier for a carrier drop off point where a merchant plans to deliver packages. This will take precedence over a shipment's ship from address.
     */
    shipFromServicePointId?: string;
    /**
     * A unique identifier for a carrier service point where the shipment will be delivered by the carrier. This will take precedence over a shipment's ship to address.
     */
    shipToServicePointId?: string;
    /**
     * The shipment information used to generate the label
     */
    shipment: CreateLabelRequestBodyPartialShipmentInput;
    /**
     * Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
     */
    testLabel?: boolean;
    validateAddress?: CreateLabelRequestBodyValidateAddressEnum;
}
