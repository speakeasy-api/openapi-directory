import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReadOperationResultPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=operationId" })
  operationId: string;
}


export class GetReadOperationResultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReadOperationResultPathParams;
}


export class GetReadOperationResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  computerVisionError?: shared.ComputerVisionError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  readOperationResult?: shared.ReadOperationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
