import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum HostReputationRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class HostReputationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=host;" })
  host: string;

  @SpeakeasyMetadata({ data: "form, name=list-rating;" })
  listRating?: number;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: HostReputationRequestBodyOutputCaseEnum;
}


export class HostReputationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: HostReputationRequestBody;
}


export class HostReputationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  hostReputationResponse?: shared.HostReputationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
