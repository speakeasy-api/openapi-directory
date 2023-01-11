import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BinLookupRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class BinLookupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=bin-number;" })
  binNumber: string;

  @SpeakeasyMetadata({ data: "form, name=customer-ip;" })
  customerIp?: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: BinLookupRequestBodyOutputCaseEnum;
}


export class BinLookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: BinLookupRequestBody;
}


export class BinLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  binLookupResponse?: shared.BinLookupResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
