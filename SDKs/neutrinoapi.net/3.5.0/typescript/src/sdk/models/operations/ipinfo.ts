import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum IpInfoRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class IpInfoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ip;" })
  ip: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: IpInfoRequestBodyOutputCaseEnum;

  @SpeakeasyMetadata({ data: "form, name=reverse-lookup;" })
  reverseLookup?: boolean;
}


export class IpInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: IpInfoRequestBody;
}


export class IpInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ipInfoResponse?: shared.IpInfoResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
