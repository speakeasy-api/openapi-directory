import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFileRequest extends SpeakeasyBase {
    fileId: string;
    projectId: string;
    workgroupId: string;
}
export declare class GetFileResponse extends SpeakeasyBase {
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
