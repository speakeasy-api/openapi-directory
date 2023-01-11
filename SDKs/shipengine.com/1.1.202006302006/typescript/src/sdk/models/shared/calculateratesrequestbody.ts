import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RateRequestBody } from "./raterequestbody";



// CalculateRatesRequestBody
/** 
 * A rate shipment request body
**/
export class CalculateRatesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rate_options" })
  rateOptions?: RateRequestBody;
}
