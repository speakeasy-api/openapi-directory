import { SpeakeasyBase } from "../../../internal/utils";
import { CollectOnDelivery } from "./collectondelivery";
import { WeightUnitEnum } from "./weightunitenum";
/**
 * The possible bill to party values
 */
export declare enum AdvancedShipmentOptionsBillToPartyEnum {
    Recipient = "recipient",
    ThirdParty = "third_party"
}
/**
 * The weight of a package
 */
export declare class AdvancedShipmentOptionsWeight extends SpeakeasyBase {
    unit: WeightUnitEnum;
    /**
     * The weight, in the specified unit
     */
    value: number;
}
/**
 * Provide details for the Fedex freight service
 */
export declare class AdvancedShipmentOptionsFedexFreight extends SpeakeasyBase {
    bookingConfirmation?: string;
    shipperLoadAndCount?: string;
}
/**
 * Indicates if the package will be picked up or dropped off by the carrier
 */
export declare enum AdvancedShipmentOptionsOriginTypeEnum {
    Pickup = "pickup",
    DropOff = "drop_off"
}
/**
 * Advanced shipment options
 */
export declare class AdvancedShipmentOptions extends SpeakeasyBase {
    /**
     * This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/).  This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
     *
     * @remarks
     *
     */
    billToAccount?: string;
    /**
     * The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
     *
     * @remarks
     *
     */
    billToCountryCode?: string;
    /**
     * Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
     *
     * @remarks
     *
     */
    billToParty?: AdvancedShipmentOptionsBillToPartyEnum;
    /**
     * The postal code of the third-party that is responsible for shipping costs.
     *
     * @remarks
     *
     */
    billToPostalCode?: string;
    /**
     * Defer payment until package is delivered, instead of when it is ordered.
     */
    collectOnDelivery?: CollectOnDelivery;
    /**
     * Indicates that the shipment contains alcohol.
     */
    containsAlcohol?: boolean;
    /**
     * An arbitrary field that can be used to store information about the shipment.
     *
     * @remarks
     *
     */
    customField1?: string;
    /**
     * An arbitrary field that can be used to store information about the shipment.
     *
     * @remarks
     *
     */
    customField2?: string;
    /**
     * An arbitrary field that can be used to store information about the shipment.
     *
     * @remarks
     *
     */
    customField3?: string;
    /**
     * Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
     *
     * @remarks
     *
     */
    deliveredDutyPaid?: boolean;
    /**
     * Indicates if the shipment contain dry ice
     */
    dryIce?: boolean;
    /**
     * The weight of the dry ice in the shipment
     */
    dryIceWeight?: AdvancedShipmentOptionsWeight;
    /**
     * Provide details for the Fedex freight service
     */
    fedexFreight?: AdvancedShipmentOptionsFedexFreight;
    /**
     * The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
     *
     * @remarks
     *
     */
    freightClass?: string;
    /**
     * Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
     *
     * @remarks
     *
     */
    nonMachinable?: boolean;
    originType?: AdvancedShipmentOptionsOriginTypeEnum;
    /**
     * Enables Saturday delivery, if supported by the carrier.
     */
    saturdayDelivery?: boolean;
    shipperRelease?: boolean;
    /**
     * Third Party Consignee option is a value-added service that allows the shipper to supply goods without commercial invoices being attached
     */
    thirdPartyConsignee?: boolean;
    /**
     * Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/).  If enabled, then a `freight_class` must also be specified.
     *
     * @remarks
     *
     */
    useUpsGroundFreightPricing?: boolean;
}
