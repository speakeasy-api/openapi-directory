import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBatchByExternalIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_batch_id" })
  externalBatchId: string;
}


export class GetBatchByExternalIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBatchByExternalIdPathParams;
}


export class GetBatchByExternalIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getBatchByExternalIdResponseBody?: shared.GetBatchByExternalIdResponseBody;
}
