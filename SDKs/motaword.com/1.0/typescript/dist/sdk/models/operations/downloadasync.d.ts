import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadAsyncQueryParams extends SpeakeasyBase {
    asyncRequestKey: string;
}
export declare class DownloadAsyncRequest extends SpeakeasyBase {
    queryParams: DownloadAsyncQueryParams;
}
export declare class DownloadAsyncResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    downloadAsync200ApplicationOctetStreamBinaryString?: Uint8Array;
}
