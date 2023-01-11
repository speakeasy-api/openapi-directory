import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateBatchRequestBody
/** 
 * A create batch request body
**/
export class CreateBatchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batch_notes" })
  batchNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=external_batch_id" })
  externalBatchId?: string;

  @SpeakeasyMetadata({ data: "json, name=rate_ids" })
  rateIds?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=shipment_ids" })
  shipmentIds?: string[];
}
