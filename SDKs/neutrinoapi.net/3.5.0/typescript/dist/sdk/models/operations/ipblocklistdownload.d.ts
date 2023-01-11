import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpBlocklistDownloadRequestBody extends SpeakeasyBase {
    format?: string;
    includeVpn?: boolean;
}
export declare class IpBlocklistDownloadRequest extends SpeakeasyBase {
    request?: IpBlocklistDownloadRequestBody;
}
export declare class IpBlocklistDownloadResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    ipBlocklistDownload200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
}
