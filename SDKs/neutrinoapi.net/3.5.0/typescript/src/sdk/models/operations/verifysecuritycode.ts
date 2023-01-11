import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum VerifySecurityCodeRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class VerifySecurityCodeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=limit-by;" })
  limitBy?: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: VerifySecurityCodeRequestBodyOutputCaseEnum;

  @SpeakeasyMetadata({ data: "form, name=security-code;" })
  securityCode: string;
}


export class VerifySecurityCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: VerifySecurityCodeRequestBody;
}


export class VerifySecurityCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifySecurityCodeResponse?: shared.VerifySecurityCodeResponse;
}
