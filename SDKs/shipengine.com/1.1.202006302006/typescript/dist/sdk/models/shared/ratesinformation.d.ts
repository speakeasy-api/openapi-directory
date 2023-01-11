import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { ErrorT } from "./error";
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
**/
export declare class RatesInformationRateMonetaryValue extends SpeakeasyBase {
    amount: number;
    currency: CurrencyEnum;
}
/**
 * A rate
**/
export declare class RatesInformationRate extends SpeakeasyBase {
    carrierCode: string;
    carrierDeliveryDays?: string;
    carrierFriendlyName: string;
    carrierId: Record<string, any>;
    carrierNickname: string;
    confirmationAmount: RatesInformationRateMonetaryValue;
    deliveryDays?: number;
    errorMessages: string[];
    estimatedDeliveryDate?: Record<string, any>;
    guaranteedService: boolean;
    insuranceAmount: RatesInformationRateMonetaryValue;
    negotiatedRate: boolean;
    otherAmount: RatesInformationRateMonetaryValue;
    packageType: string;
    rateId: Record<string, any>;
    rateType: Record<string, any>;
    serviceCode: string;
    serviceType: string;
    shipDate?: Date;
    shippingAmount: RatesInformationRateMonetaryValue;
    taxAmount?: RatesInformationRateMonetaryValue;
    trackable: boolean;
    validationStatus: Record<string, any>;
    warningMessages: string[];
    zone: number;
}
/**
 * A rates information resource
**/
export declare class RatesInformation extends SpeakeasyBase {
    createdAt?: Record<string, any>;
    errors?: ErrorT[];
    invalidRates?: RatesInformationRate[];
    rateRequestId?: Record<string, any>;
    rates?: RatesInformationRate[];
    shipmentId?: Record<string, any>;
    status?: Record<string, any>;
}
