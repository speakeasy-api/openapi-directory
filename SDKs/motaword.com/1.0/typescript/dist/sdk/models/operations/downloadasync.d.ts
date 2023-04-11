import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadAsyncRequest extends SpeakeasyBase {
    /**
     * Async operation key
     */
    asyncRequestKey: string;
}
export declare class DownloadAsyncResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * File
     */
    downloadAsync200ApplicationOctetStreamBinaryString?: Uint8Array;
}
