import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DownloadFileRequest extends SpeakeasyBase {
    /**
     * The ID of the file to use for this request
     */
    fileId: string;
}
export declare class DownloadFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    downloadFile200ApplicationJSONString?: string;
}
