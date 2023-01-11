import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UserAgentInfoRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class UserAgentInfoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: UserAgentInfoRequestBodyOutputCaseEnum;

  @SpeakeasyMetadata({ data: "form, name=user-agent;" })
  userAgent: string;
}


export class UserAgentInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UserAgentInfoRequestBody;
}


export class UserAgentInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userAgentInfoResponse?: shared.UserAgentInfoResponse;
}
