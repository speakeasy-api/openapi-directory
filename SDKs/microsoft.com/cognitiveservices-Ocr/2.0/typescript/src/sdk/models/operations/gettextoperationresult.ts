import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTextOperationResultPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=operationId" })
  operationId: string;
}


export class GetTextOperationResultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTextOperationResultPathParams;
}


export class GetTextOperationResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  computerVisionError?: shared.ComputerVisionError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  textOperationResult?: shared.TextOperationResult;
}
