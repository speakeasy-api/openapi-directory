import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFilesDownloadRequest extends SpeakeasyBase {
    /**
     * The URL of the file to be uploaded
     */
    fileId: string;
    /**
     * The number of seconds that this signed URL should be valid for. The default is 60.
     */
    validSeconds?: number;
}
export declare class GetFilesDownloadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
