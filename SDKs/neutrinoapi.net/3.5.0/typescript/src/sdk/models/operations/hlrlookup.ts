import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum HlrLookupRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class HlrLookupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=country-code;" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: HlrLookupRequestBodyOutputCaseEnum;
}


export class HlrLookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: HlrLookupRequestBody;
}


export class HlrLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  hlrLookupResponse?: shared.HlrLookupResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
