import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BadWordFilterRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class BadWordFilterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=catalog;" })
  catalog?: string;

  @SpeakeasyMetadata({ data: "form, name=censor-character;" })
  censorCharacter?: string;

  @SpeakeasyMetadata({ data: "form, name=content;" })
  content: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: BadWordFilterRequestBodyOutputCaseEnum;
}


export class BadWordFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: BadWordFilterRequestBody;
}


export class BadWordFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  badWordFilterResponse?: shared.BadWordFilterResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
