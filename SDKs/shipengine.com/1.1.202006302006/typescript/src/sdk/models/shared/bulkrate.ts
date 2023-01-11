import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
import { ErrorSourceEnum } from "./errorsourceenum";
import { ErrorTypeEnum } from "./errortypeenum";



// BulkRateError
/** 
 * The error structure that gets returned with almost all failed API calls
 * 
**/
export class BulkRateError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode: ErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=error_source" })
  errorSource: ErrorSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=error_type" })
  errorType: ErrorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


// BulkRate
/** 
 * A bulk rate
**/
export class BulkRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BulkRateError })
  errors: BulkRateError[];

  @SpeakeasyMetadata({ data: "json, name=rate_request_id" })
  rateRequestId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=shipment_id" })
  shipmentId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: Record<string, any>;
}
