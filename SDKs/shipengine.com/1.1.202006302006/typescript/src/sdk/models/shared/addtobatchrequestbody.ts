import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddToBatchRequestBody
/** 
 * A modify batch object
**/
export class AddToBatchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rate_ids" })
  rateIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=shipment_ids" })
  shipmentIds?: string[];
}
