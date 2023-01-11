import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateStyleGuidePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class CreateStyleGuideRequestBodyStyleguides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=styleguides[]" })
  styleguides: string;
}


export class CreateStyleGuideRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  styleguides: CreateStyleGuideRequestBodyStyleguides;
}


export class CreateStyleGuideRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateStyleGuidePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: CreateStyleGuideRequestBody;
}


export class CreateStyleGuideResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  styleGuideList?: shared.StyleGuideList;
}
