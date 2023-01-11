import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UseAsRegularPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: number;
}


export class UseAsRegularRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UseAsRegularPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UseAsRegularPayload;
}


export class UseAsRegularResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
