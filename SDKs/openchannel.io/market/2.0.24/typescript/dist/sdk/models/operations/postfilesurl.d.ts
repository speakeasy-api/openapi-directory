import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostFilesUrlRequest extends SpeakeasyBase {
    /**
     * If true, this file will be protected as a private file and require the generation of a signed URL in order to download using the Download File API. The default is false.
     */
    isPrivate?: boolean;
    /**
     * The URL of the file to be uploaded
     */
    url: string;
}
export declare class PostFilesUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
