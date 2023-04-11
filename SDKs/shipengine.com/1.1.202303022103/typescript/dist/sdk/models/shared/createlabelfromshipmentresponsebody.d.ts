import { SpeakeasyBase } from "../../../internal/utils";
import { AlternativeIdentifier } from "./alternativeidentifier";
import { LabelChargeEventEnum } from "./labelchargeeventenum";
import { Package } from "./package";
/**
 * The display format that the label should be shown in.
 */
export declare enum CreateLabelFromShipmentResponseBodyDisplaySchemeEnum {
    Label = "label",
    QrCode = "qr_code",
    LabelAndQrCode = "label_and_qr_code"
}
/**
 * A link to a related resource, or an empty object if there is no resource to link to
 */
export declare class CreateLabelFromShipmentResponseBodyOptionalLink extends SpeakeasyBase {
    /**
     * The URL of the linked resource, if any
     */
    href: string;
    /**
     * The type of resource, or the type of relationship to the parent resource
     */
    type?: string;
}
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
 * @remarks
 *
 */
export declare class CreateLabelFromShipmentResponseBodyMonetaryValue extends SpeakeasyBase {
    /**
     * The monetary amount, in the specified currency.
     */
    amount: number;
    currency: string;
}
/**
 * Reference to the various downloadable file formats for the generated label
 *
 * @remarks
 *
 */
export declare class CreateLabelFromShipmentResponseBodyLabelDownload extends SpeakeasyBase {
    /**
     * The URL of the linked resource, if any
     */
    href?: string;
    /**
     * The URL for the pdf generated label
     */
    pdf?: string;
    /**
     * The URL for the png generated label
     */
    png?: string;
    /**
     * The URL for the zpl generated label
     */
    zpl?: string;
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
export declare enum CreateLabelFromShipmentResponseBodyLabelFormatEnum {
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
export declare enum CreateLabelFromShipmentResponseBodyLabelLayoutEnum {
    Fourx6 = "4x6",
    Letter = "letter"
}
/**
 * The possible statuses that a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/) can be in.
 *
 * @remarks
 *
 * |Status       |Description
 * |:------------|:-----------------------------------------------------
 * |`processing` |When labels are created in a [batch](https://www.shipengine.com/docs/labels/bulk/), it may take a few minutes for all of the labels in the batch to be created.  During this period, they will be in `processing` status.
 * |`completed`  |The label was successfully created
 * |`error`      |The label could not be created due to an error, such as an invalid delivery address
 * |`voided`     |The label has been [voided](https://www.shipengine.com/docs/labels/voiding/)
 *
 */
export declare enum CreateLabelFromShipmentResponseBodyLabelStatusEnum {
    Processing = "processing",
    Completed = "completed",
    Error = "error",
    Voided = "voided"
}
/**
 * The different statuses that can apply to a shipment.
 */
export declare enum CreateLabelFromShipmentResponseBodyTrackingStatusEnum {
    Unknown = "unknown",
    InTransit = "in_transit",
    Error = "error",
    Delivered = "delivered"
}
/**
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 *
 * @remarks
 *
 */
export declare class CreateLabelFromShipmentResponseBodyOutput extends SpeakeasyBase {
    /**
     * Additional information some carriers may provide by which to identify a given label in their system.
     *
     * @remarks
     *
     */
    alternativeIdentifiers?: AlternativeIdentifier[];
    /**
     * If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.
     *
     * @remarks
     *
     */
    batchId?: string;
    /**
     * The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.
     *
     * @remarks
     *
     */
    carrierCode?: string;
    /**
     * The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label
     *
     * @remarks
     *
     */
    carrierId?: string;
    /**
     * The label charge event.
     *
     * @remarks
     *
     */
    chargeEvent?: LabelChargeEventEnum;
    /**
     * The date and time that the label was created in ShipEngine.
     */
    createdAt?: Date;
    /**
     * The display format that the label should be shown in.
     */
    displayScheme?: CreateLabelFromShipmentResponseBodyDisplaySchemeEnum;
    /**
     * The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.
     *
     * @remarks
     *
     */
    formDownload?: CreateLabelFromShipmentResponseBodyOptionalLink;
    /**
     * The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.
     *
     * @remarks
     *
     */
    insuranceClaim?: CreateLabelFromShipmentResponseBodyOptionalLink;
    /**
     * The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.
     *
     * @remarks
     *
     */
    insuranceCost?: CreateLabelFromShipmentResponseBodyMonetaryValue;
    /**
     * Indicates whether this is an international shipment.  That is, the originating country and destination country are different.
     *
     * @remarks
     *
     */
    isInternational?: boolean;
    /**
     * Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
     *
     * @remarks
     *
     */
    isReturnLabel?: boolean;
    labelDownload?: CreateLabelFromShipmentResponseBodyLabelDownload;
    /**
     * The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
     *
     * @remarks
     *
     */
    labelFormat?: CreateLabelFromShipmentResponseBodyLabelFormatEnum;
    /**
     * A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.
     *
     * @remarks
     *
     */
    labelId?: string;
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
    labelLayout?: CreateLabelFromShipmentResponseBodyLabelLayoutEnum;
    /**
     * The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
     *
     * @remarks
     *
     */
    packageCode?: string;
    /**
     * The label's package(s).
     *
     * @remarks
     *
     * > **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.
     *
     */
    packages?: Package[];
    /**
     * An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
     *
     * @remarks
     *
     */
    rmaNumber?: string;
    /**
     * The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
     *
     * @remarks
     *
     */
    serviceCode?: string;
    /**
     * The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
     *
     * @remarks
     *
     */
    shipDate?: Date;
    /**
     * The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.
     *
     * @remarks
     *
     */
    shipmentCost?: CreateLabelFromShipmentResponseBodyMonetaryValue;
    /**
     * The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)
     *
     * @remarks
     *
     */
    shipmentId?: string;
    status?: CreateLabelFromShipmentResponseBodyLabelStatusEnum;
    /**
     * Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.
     *
     * @remarks
     *
     */
    trackable?: boolean;
    /**
     * The tracking number for the package. Tracking number formats vary across carriers.
     */
    trackingNumber?: string;
    /**
     * The current status of the package, such as `in_transit` or `delivered`
     */
    trackingStatus?: CreateLabelFromShipmentResponseBodyTrackingStatusEnum;
    /**
     * Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)
     *
     * @remarks
     *
     */
    voided?: boolean;
    /**
     * The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided
     *
     * @remarks
     *
     */
    voidedAt?: Date;
}
