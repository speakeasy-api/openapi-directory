import { SpeakeasyBase } from "../../../internal/utils";
import { AddressResidentialIndicatorEnum } from "./addressresidentialindicatorenum";
import { DeliveryConfirmationEnum } from "./deliveryconfirmationenum";
import { Dimensions } from "./dimensions";
import { Weight } from "./weight";
/**
 * A rate estimate request body
**/
export declare class EstimateRatesRequestBody extends SpeakeasyBase {
    addressResidentialIndicator?: AddressResidentialIndicatorEnum;
    confirmation?: DeliveryConfirmationEnum;
    dimensions?: Dimensions;
    fromCityLocality: string;
    fromCountryCode: string;
    fromPostalCode: string;
    fromStateProvince?: string;
    shipDate: Record<string, any>;
    toCityLocality: string;
    toCountryCode: string;
    toPostalCode: string;
    toStateProvince: string;
    weight: Weight;
}
