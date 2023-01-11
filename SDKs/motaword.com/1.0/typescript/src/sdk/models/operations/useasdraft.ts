import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UseAsDraftPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: number;
}


export class UseAsDraftRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UseAsDraftPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UseAsDraftPayload;
}


export class UseAsDraftResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
