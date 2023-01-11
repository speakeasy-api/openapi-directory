import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SmsMessageRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class SmsMessageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=country-code;" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "form, name=limit;" })
  limit?: number;

  @SpeakeasyMetadata({ data: "form, name=limit-ttl;" })
  limitTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=message;" })
  message: string;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: SmsMessageRequestBodyOutputCaseEnum;
}


export class SmsMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: SmsMessageRequestBody;
}


export class SmsMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  smsMessageResponse?: shared.SmsMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
