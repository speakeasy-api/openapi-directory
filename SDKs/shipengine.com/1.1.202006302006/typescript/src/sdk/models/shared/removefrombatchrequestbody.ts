import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveFromBatchRequestBody
/** 
 * A modify batch object
**/
export class RemoveFromBatchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rate_ids" })
  rateIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=shipment_ids" })
  shipmentIds?: string[];
}
