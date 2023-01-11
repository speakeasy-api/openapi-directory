import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum IpProbeRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class IpProbeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ip;" })
  ip: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: IpProbeRequestBodyOutputCaseEnum;
}


export class IpProbeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: IpProbeRequestBody;
}


export class IpProbeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ipProbeResponse?: shared.IpProbeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
