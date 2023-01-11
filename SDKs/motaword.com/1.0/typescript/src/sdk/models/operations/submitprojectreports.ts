import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubmitProjectReportsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SubmitProjectReportsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=activity_type" })
  activityType?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=message" })
  message?: string;
}


export class SubmitProjectReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubmitProjectReportsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: SubmitProjectReportsRequestBody;
}


export class SubmitProjectReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
