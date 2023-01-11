import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBatchByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batch_id" })
  batchId: string;
}


export class GetBatchByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBatchByIdPathParams;
}


export class GetBatchByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getBatchByIdResponseBody?: shared.GetBatchByIdResponseBody;
}
