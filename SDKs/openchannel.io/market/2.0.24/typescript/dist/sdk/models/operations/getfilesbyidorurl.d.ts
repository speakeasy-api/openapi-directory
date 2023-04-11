import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFilesByIdOrUrlRequest extends SpeakeasyBase {
    /**
     * The fileId or fileUrl of the file to be returned
     */
    fileIdOrUrl: string;
}
export declare class GetFilesByIdOrUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
