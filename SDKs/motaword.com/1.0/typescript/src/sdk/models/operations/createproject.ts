import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProjectRequestBodyDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=documents[]" })
  documents: string;
}


export class CreateProjectRequestBodyGlossaries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=glossaries[]" })
  glossaries: string;
}


export class CreateProjectRequestBodyStyleguides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=styleguides[]" })
  styleguides: string;
}


export class CreateProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=coupon_code" })
  couponCode?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=custom;json=true" })
  custom?: string[];

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  documents?: CreateProjectRequestBodyDocuments;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  glossaries?: CreateProjectRequestBodyGlossaries;

  @SpeakeasyMetadata({ data: "multipart_form, name=source_language" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  styleguides?: CreateProjectRequestBodyStyleguides;

  @SpeakeasyMetadata({ data: "multipart_form, name=target_languages[];json=true" })
  targetLanguages?: string[];
}


export class CreateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: CreateProjectRequestBody;
}


export class CreateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  project?: shared.Project;

  @SpeakeasyMetadata()
  statusCode: number;
}
