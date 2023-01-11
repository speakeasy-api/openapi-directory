import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
/**
 * A rate request body
**/
export declare class RateRequestBody extends SpeakeasyBase {
    calculateTaxAmount?: boolean;
    carrierIds: string[];
    packageTypes?: string[];
    preferredCurrency?: CurrencyEnum;
    serviceCodes?: string[];
}
