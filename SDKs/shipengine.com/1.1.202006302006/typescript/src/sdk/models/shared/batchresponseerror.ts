import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchResponseError
/** 
 * A batch response error
**/
export class BatchResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=shipment_id" })
  shipmentId?: Record<string, any>;
}
