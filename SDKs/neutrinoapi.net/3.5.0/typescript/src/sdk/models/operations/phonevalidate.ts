import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PhoneValidateRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class PhoneValidateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=country-code;" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "form, name=ip;" })
  ip?: string;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: PhoneValidateRequestBodyOutputCaseEnum;
}


export class PhoneValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PhoneValidateRequestBody;
}


export class PhoneValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  phoneValidateResponse?: shared.PhoneValidateResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
