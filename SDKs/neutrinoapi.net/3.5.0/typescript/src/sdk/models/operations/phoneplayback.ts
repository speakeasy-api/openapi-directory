import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PhonePlaybackRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class PhonePlaybackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=audio-url;" })
  audioUrl: string;

  @SpeakeasyMetadata({ data: "form, name=limit;" })
  limit?: number;

  @SpeakeasyMetadata({ data: "form, name=limit-ttl;" })
  limitTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: PhonePlaybackRequestBodyOutputCaseEnum;
}


export class PhonePlaybackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PhonePlaybackRequestBody;
}


export class PhonePlaybackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  phonePlaybackResponse?: shared.PhonePlaybackResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
