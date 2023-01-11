import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RateRequestBody } from "./raterequestbody";



// CompareBulkRatesRequestBody
/** 
 * A rate shipments request body
**/
export class CompareBulkRatesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rate_options" })
  rateOptions: RateRequestBody;
}
