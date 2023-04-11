import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
 * @remarks
 *
 */
export declare class RateEstimateMonetaryValue extends SpeakeasyBase {
    /**
     * The monetary amount, in the specified currency.
     */
    amount: number;
    currency: string;
}
/**
 * The possible rate type values
 */
export declare enum RateEstimateRateTypeEnum {
    Check = "check",
    Shipment = "shipment"
}
/**
 * The possible validation status values
 */
export declare enum RateEstimateValidationStatusEnum {
    Valid = "valid",
    Invalid = "invalid",
    HasWarnings = "has_warnings",
    Unknown = "unknown"
}
/**
 * A rate estimate
 */
export declare class RateEstimate extends SpeakeasyBase {
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
    confirmationAmount: RateEstimateMonetaryValue;
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
    insuranceAmount: RateEstimateMonetaryValue;
    /**
     * Indicates if the rates been negotiated
     */
    negotiatedRate: boolean;
    /**
     * Any other charges associated with this rate
     */
    otherAmount: RateEstimateMonetaryValue;
    /**
     * package type that this rate was estimated for
     */
    packageType: string;
    rateType: RateEstimateRateTypeEnum;
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
    shippingAmount: RateEstimateMonetaryValue;
    /**
     * Tariff and additional taxes associated with an international shipment.
     */
    taxAmount?: RateEstimateMonetaryValue;
    /**
     * Indicates if rate is trackable
     */
    trackable: boolean;
    validationStatus: RateEstimateValidationStatusEnum;
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
