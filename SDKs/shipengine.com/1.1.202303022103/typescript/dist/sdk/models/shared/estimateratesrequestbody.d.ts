import { SpeakeasyBase } from "../../../internal/utils";
import { AddressResidentialIndicatorEnum } from "./addressresidentialindicatorenum";
import { DeliveryConfirmationEnum } from "./deliveryconfirmationenum";
import { Dimensions } from "./dimensions";
import { Weight } from "./weight";
/**
 * A rate estimate request body
 */
export declare class EstimateRatesRequestBody extends SpeakeasyBase {
    addressResidentialIndicator?: AddressResidentialIndicatorEnum;
    confirmation?: DeliveryConfirmationEnum;
    /**
     * The dimensions of the package
     */
    dimensions?: Dimensions;
    /**
     * from postal code
     */
    fromCityLocality: string;
    fromCountryCode: string;
    fromPostalCode: string;
    /**
     * From state province
     */
    fromStateProvince: string;
    /**
     * ship date
     */
    shipDate: Date;
    /**
     * The city locality the package is being shipped to
     */
    toCityLocality: string;
    toCountryCode: string;
    toPostalCode: string;
    /**
     * To state province
     */
    toStateProvince: string;
    /**
     * The weight of the package
     */
    weight: Weight;
}
