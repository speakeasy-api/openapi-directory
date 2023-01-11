import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ConvertRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class ConvertRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=from-type;" })
  fromType: string;

  @SpeakeasyMetadata({ data: "form, name=from-value;" })
  fromValue: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: ConvertRequestBodyOutputCaseEnum;

  @SpeakeasyMetadata({ data: "form, name=to-type;" })
  toType: string;
}


export class ConvertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConvertRequestBody;
}


export class ConvertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  convertResponse?: shared.ConvertResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
