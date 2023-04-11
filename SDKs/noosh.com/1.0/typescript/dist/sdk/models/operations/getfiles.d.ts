import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFilesRequest extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetFilesResponse extends SpeakeasyBase {
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
