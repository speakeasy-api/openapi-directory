import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveFromBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batch_id" })
  batchId: string;
}


export class RemoveFromBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveFromBatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RemoveFromBatchRequestBody;
}


export class RemoveFromBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  emptyResponseBody?: string;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
