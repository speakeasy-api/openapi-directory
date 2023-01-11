import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressResidentialIndicatorEnum } from "./addressresidentialindicatorenum";
import { DeliveryConfirmationEnum } from "./deliveryconfirmationenum";
import { Dimensions } from "./dimensions";
import { Weight } from "./weight";



// EstimateRatesRequestBody
/** 
 * A rate estimate request body
**/
export class EstimateRatesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_residential_indicator" })
  addressResidentialIndicator?: AddressResidentialIndicatorEnum;

  @SpeakeasyMetadata({ data: "json, name=confirmation" })
  confirmation?: DeliveryConfirmationEnum;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @SpeakeasyMetadata({ data: "json, name=from_city_locality" })
  fromCityLocality: string;

  @SpeakeasyMetadata({ data: "json, name=from_country_code" })
  fromCountryCode: string;

  @SpeakeasyMetadata({ data: "json, name=from_postal_code" })
  fromPostalCode: string;

  @SpeakeasyMetadata({ data: "json, name=from_state_province" })
  fromStateProvince?: string;

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=to_city_locality" })
  toCityLocality: string;

  @SpeakeasyMetadata({ data: "json, name=to_country_code" })
  toCountryCode: string;

  @SpeakeasyMetadata({ data: "json, name=to_postal_code" })
  toPostalCode: string;

  @SpeakeasyMetadata({ data: "json, name=to_state_province" })
  toStateProvince: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight: Weight;
}
