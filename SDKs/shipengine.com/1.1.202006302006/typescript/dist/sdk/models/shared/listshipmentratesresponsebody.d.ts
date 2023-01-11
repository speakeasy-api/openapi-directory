import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { ErrorT } from "./error";
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
**/
export declare class ListShipmentRatesResponseBodyRateMonetaryValue extends SpeakeasyBase {
    amount: number;
    currency: CurrencyEnum;
}
/**
 * A rate
**/
export declare class ListShipmentRatesResponseBodyRate extends SpeakeasyBase {
    carrierCode: string;
    carrierDeliveryDays?: string;
    carrierFriendlyName: string;
    carrierId: Record<string, any>;
    carrierNickname: string;
    confirmationAmount: ListShipmentRatesResponseBodyRateMonetaryValue;
    deliveryDays?: number;
    errorMessages: string[];
    estimatedDeliveryDate?: Record<string, any>;
    guaranteedService: boolean;
    insuranceAmount: ListShipmentRatesResponseBodyRateMonetaryValue;
    negotiatedRate: boolean;
    otherAmount: ListShipmentRatesResponseBodyRateMonetaryValue;
    packageType: string;
    rateId: Record<string, any>;
    rateType: Record<string, any>;
    serviceCode: string;
    serviceType: string;
    shipDate?: Date;
    shippingAmount: ListShipmentRatesResponseBodyRateMonetaryValue;
    taxAmount?: ListShipmentRatesResponseBodyRateMonetaryValue;
    trackable: boolean;
    validationStatus: Record<string, any>;
    warningMessages: string[];
    zone: number;
}
/**
 * A rates information resource
**/
export declare class ListShipmentRatesResponseBody extends SpeakeasyBase {
    createdAt: Record<string, any>;
    errors: ErrorT[];
    invalidRates: ListShipmentRatesResponseBodyRate[];
    rateRequestId: Record<string, any>;
    rates: ListShipmentRatesResponseBodyRate[];
    shipmentId: Record<string, any>;
    status: Record<string, any>;
}
