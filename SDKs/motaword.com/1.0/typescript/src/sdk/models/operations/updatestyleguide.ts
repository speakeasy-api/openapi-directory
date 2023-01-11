import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateStyleGuidePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=styleGuideId" })
  styleGuideId: number;
}


export class UpdateStyleGuideRequestBodyStyleguides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=styleguides" })
  styleguides: string;
}


export class UpdateStyleGuideRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  styleguides: UpdateStyleGuideRequestBodyStyleguides;
}


export class UpdateStyleGuideRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateStyleGuidePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateStyleGuideRequestBody;
}


export class UpdateStyleGuideResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  styleGuide?: shared.StyleGuide;
}
