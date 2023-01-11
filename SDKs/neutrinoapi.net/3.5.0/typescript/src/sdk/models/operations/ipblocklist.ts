import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum IpBlocklistRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class IpBlocklistRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ip;" })
  ip: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: IpBlocklistRequestBodyOutputCaseEnum;

  @SpeakeasyMetadata({ data: "form, name=vpn-lookup;" })
  vpnLookup?: boolean;
}


export class IpBlocklistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: IpBlocklistRequestBody;
}


export class IpBlocklistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ipBlocklistResponse?: shared.IpBlocklistResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
