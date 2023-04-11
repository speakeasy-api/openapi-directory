import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DownloadFileRequest extends SpeakeasyBase {
    /**
     * fileId
     */
    fileId: string;
}
export declare class DownloadFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    downloadFile200ApplicationOctetStreamBinaryString?: Uint8Array;
}
