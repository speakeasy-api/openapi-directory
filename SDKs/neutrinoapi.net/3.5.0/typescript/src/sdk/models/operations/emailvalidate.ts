import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum EmailValidateRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class EmailValidateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=email;" })
  email: string;

  @SpeakeasyMetadata({ data: "form, name=fix-typos;" })
  fixTypos?: boolean;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: EmailValidateRequestBodyOutputCaseEnum;
}


export class EmailValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: EmailValidateRequestBody;
}


export class EmailValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emailValidateResponse?: shared.EmailValidateResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
