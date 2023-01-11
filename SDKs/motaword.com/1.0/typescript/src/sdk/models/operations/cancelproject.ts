import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CancelProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CancelProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=reason" })
  reason?: string;
}


export class CancelProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelProjectPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: CancelProjectRequestBody;
}


export class CancelProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
