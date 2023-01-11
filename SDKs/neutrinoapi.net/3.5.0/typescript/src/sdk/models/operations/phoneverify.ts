import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PhoneVerifyRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class PhoneVerifyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=code-length;" })
  codeLength?: number;

  @SpeakeasyMetadata({ data: "form, name=country-code;" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "form, name=language-code;" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "form, name=limit;" })
  limit?: number;

  @SpeakeasyMetadata({ data: "form, name=limit-ttl;" })
  limitTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: PhoneVerifyRequestBodyOutputCaseEnum;

  @SpeakeasyMetadata({ data: "form, name=playback-delay;" })
  playbackDelay?: number;

  @SpeakeasyMetadata({ data: "form, name=security-code;" })
  securityCode?: number;
}


export class PhoneVerifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PhoneVerifyRequestBody;
}


export class PhoneVerifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  phoneVerifyResponse?: shared.PhoneVerifyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
