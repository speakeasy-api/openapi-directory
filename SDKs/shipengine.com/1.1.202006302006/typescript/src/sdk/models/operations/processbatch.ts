import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProcessBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batch_id" })
  batchId: string;
}


export class ProcessBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProcessBatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProcessBatchRequestBody;
}


export class ProcessBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  emptyResponseBody?: string;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
