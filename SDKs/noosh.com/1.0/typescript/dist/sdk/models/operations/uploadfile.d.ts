import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadFileRequestBody extends SpeakeasyBase {
    content: Uint8Array;
    requestBody: string;
}
export declare class UploadFileRequest extends SpeakeasyBase {
    requestBody?: UploadFileRequestBody;
    projectId: string;
    workgroupId: string;
}
export declare class UploadFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful retrieval
     */
    fileResponseVO?: shared.FileResponseVO;
    /**
     * Internal server error
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
