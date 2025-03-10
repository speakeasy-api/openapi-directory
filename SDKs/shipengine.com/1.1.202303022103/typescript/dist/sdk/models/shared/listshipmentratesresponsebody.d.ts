import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
 * @remarks
 *
 */
export declare class ListShipmentRatesResponseBodyRateMonetaryValue extends SpeakeasyBase {
    /**
     * The monetary amount, in the specified currency.
     */
    amount: number;
    currency: string;
}
/**
 * The possible rate type values
 */
export declare enum ListShipmentRatesResponseBodyRateRateTypeEnum {
    Check = "check",
    Shipment = "shipment"
}
/**
 * The possible validation status values
 */
export declare enum ListShipmentRatesResponseBodyRateValidationStatusEnum {
    Valid = "valid",
    Invalid = "invalid",
    HasWarnings = "has_warnings",
    Unknown = "unknown"
}
/**
 * A rate
 */
export declare class ListShipmentRatesResponseBodyRate extends SpeakeasyBase {
    /**
     * carrier code
     */
    carrierCode: string;
    /**
     * The carrier delivery days
     */
    carrierDeliveryDays?: string;
    /**
     * carrier friendly name
     */
    carrierFriendlyName: string;
    /**
     * A string that uniquely identifies the carrier
     */
    carrierId: string;
    /**
     * carrier nickname
     */
    carrierNickname: string;
    /**
     * The confirmation amount
     */
    confirmationAmount: ListShipmentRatesResponseBodyRateMonetaryValue;
    /**
     * The number of days estimated for delivery, this will show the _actual_ delivery
     *
     * @remarks
     * time if for example, the package gets shipped on a Friday
     *
     */
    deliveryDays?: number;
    /**
     * The error messages
     */
    errorMessages: string[];
    estimatedDeliveryDate?: Date;
    /**
     * Indicates if the rate is guaranteed.
     */
    guaranteedService: boolean;
    /**
     * The insurance amount
     */
    insuranceAmount: ListShipmentRatesResponseBodyRateMonetaryValue;
    /**
     * Indicates if the rates been negotiated
     */
    negotiatedRate: boolean;
    /**
     * Any other charges associated with this rate
     */
    otherAmount: ListShipmentRatesResponseBodyRateMonetaryValue;
    /**
     * package type that this rate was estimated for
     */
    packageType: string;
    /**
     * A string that uniquely identifies the rate
     */
    rateId: string;
    rateType: ListShipmentRatesResponseBodyRateRateTypeEnum;
    /**
     * service code for the rate
     */
    serviceCode: string;
    /**
     * service type
     */
    serviceType: string;
    /**
     * ship date
     */
    shipDate?: Date;
    /**
     * The shipping amount
     */
    shippingAmount: ListShipmentRatesResponseBodyRateMonetaryValue;
    /**
     * Tariff and additional taxes associated with an international shipment.
     */
    taxAmount?: ListShipmentRatesResponseBodyRateMonetaryValue;
    /**
     * Indicates if rate is trackable
     */
    trackable: boolean;
    validationStatus: ListShipmentRatesResponseBodyRateValidationStatusEnum;
    /**
     * The warning messages
     */
    warningMessages: string[];
    /**
     * Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
     *
     * @remarks
     * custom zones that vary depending upon the ship_to and ship_from location
     *
     */
    zone: number;
}
/**
 * The possible rate response status values
 */
export declare enum ListShipmentRatesResponseBodyRateResponseStatusEnum {
    Working = "working",
    Completed = "completed",
    Partial = "partial",
    Error = "error"
}
/**
 * A rates information resource
 */
export declare class ListShipmentRatesResponseBody extends SpeakeasyBase {
    /**
     * When the rate was created
     */
    createdAt: Date;
    errors: ErrorT[];
    /**
     * An array of invalid shipment rates
     */
    invalidRates: ListShipmentRatesResponseBodyRate[];
    /**
     * A string that uniquely identifies the rate request
     */
    rateRequestId: string;
    /**
     * An array of shipment rates
     */
    rates: ListShipmentRatesResponseBodyRate[];
    /**
     * A string that uniquely identifies the shipment
     */
    shipmentId: string;
    status: ListShipmentRatesResponseBodyRateResponseStatusEnum;
}
