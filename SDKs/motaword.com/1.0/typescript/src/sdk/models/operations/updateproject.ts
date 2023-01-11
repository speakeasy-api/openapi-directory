import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=coupon_code" })
  couponCode?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=custom;json=true" })
  custom?: string[];

  @SpeakeasyMetadata({ data: "multipart_form, name=source_language" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=target_languages[];json=true" })
  targetLanguages?: string[];
}


export class UpdateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProjectPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateProjectRequestBody;
}


export class UpdateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  project?: shared.Project;

  @SpeakeasyMetadata()
  statusCode: number;
}
