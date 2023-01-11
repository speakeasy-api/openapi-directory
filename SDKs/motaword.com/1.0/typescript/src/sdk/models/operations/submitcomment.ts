import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubmitCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class SubmitCommentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=comment" })
  comment: string;
}


export class SubmitCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubmitCommentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: SubmitCommentRequestBody;
}


export class SubmitCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment?: shared.Comment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
