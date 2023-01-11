import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum EmailVerifyRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class EmailVerifyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=email;" })
  email: string;

  @SpeakeasyMetadata({ data: "form, name=fix-typos;" })
  fixTypos?: boolean;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: EmailVerifyRequestBodyOutputCaseEnum;
}


export class EmailVerifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: EmailVerifyRequestBody;
}


export class EmailVerifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emailVerifyResponse?: shared.EmailVerifyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
