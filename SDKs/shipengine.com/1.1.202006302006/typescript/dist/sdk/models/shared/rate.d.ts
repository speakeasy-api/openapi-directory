import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
**/
export declare class RateMonetaryValue extends SpeakeasyBase {
    amount: number;
    currency: CurrencyEnum;
}
/**
 * A rate
**/
export declare class Rate extends SpeakeasyBase {
    carrierCode: string;
    carrierDeliveryDays?: string;
    carrierFriendlyName: string;
    carrierId: Record<string, any>;
    carrierNickname: string;
    confirmationAmount: RateMonetaryValue;
    deliveryDays?: number;
    errorMessages: string[];
    estimatedDeliveryDate?: Record<string, any>;
    guaranteedService: boolean;
    insuranceAmount: RateMonetaryValue;
    negotiatedRate: boolean;
    otherAmount: RateMonetaryValue;
    packageType: string;
    rateId: Record<string, any>;
    rateType: Record<string, any>;
    serviceCode: string;
    serviceType: string;
    shipDate?: Date;
    shippingAmount: RateMonetaryValue;
    taxAmount?: RateMonetaryValue;
    trackable: boolean;
    validationStatus: Record<string, any>;
    warningMessages: string[];
    zone: number;
}
