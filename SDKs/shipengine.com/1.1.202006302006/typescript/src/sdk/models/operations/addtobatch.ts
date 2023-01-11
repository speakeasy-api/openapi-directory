import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddToBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batch_id" })
  batchId: string;
}


export class AddToBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddToBatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddToBatchRequestBody;
}


export class AddToBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  emptyResponseBody?: string;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
