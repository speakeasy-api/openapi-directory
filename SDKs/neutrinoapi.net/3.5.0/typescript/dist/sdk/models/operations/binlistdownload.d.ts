import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BinListDownloadRequestBody extends SpeakeasyBase {
    include8digit?: boolean;
    includeIso3?: boolean;
}
export declare class BinListDownloadRequest extends SpeakeasyBase {
    request?: BinListDownloadRequestBody;
}
export declare class BinListDownloadResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    binListDownload200ApplicationJSONBinaryString?: Uint8Array;
    contentType: string;
    statusCode: number;
}
