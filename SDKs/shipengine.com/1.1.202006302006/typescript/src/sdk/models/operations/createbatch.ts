import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateBatchRequestBody;
}


export class CreateBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createBatchResponseBody?: shared.CreateBatchResponseBody;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
