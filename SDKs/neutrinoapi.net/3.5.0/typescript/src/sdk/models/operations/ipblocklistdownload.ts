import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpBlocklistDownloadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=format;" })
  format?: string;

  @SpeakeasyMetadata({ data: "form, name=include-vpn;" })
  includeVpn?: boolean;
}


export class IpBlocklistDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: IpBlocklistDownloadRequestBody;
}


export class IpBlocklistDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ipBlocklistDownload200ApplicationJSONBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
