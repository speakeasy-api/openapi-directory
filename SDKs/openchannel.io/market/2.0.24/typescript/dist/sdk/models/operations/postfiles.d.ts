import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostFilesRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostFilesRequestBody extends SpeakeasyBase {
    /**
     * The file to be uploaded
     */
    file: PostFilesRequestBodyFile;
}
export declare class PostFilesRequest extends SpeakeasyBase {
    requestBody: PostFilesRequestBody;
    /**
     * A comma separated list of hashes to return in order to verify file integrity.
     */
    hash?: string;
    /**
     * If true, this file will be protected as a private file and require the generation of a signed URL in order to download using the Download File API. The default is false.
     */
    isPrivate?: boolean;
}
export declare class PostFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
