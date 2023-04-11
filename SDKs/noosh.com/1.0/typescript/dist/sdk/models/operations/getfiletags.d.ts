import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFileTagsRequest extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetFileTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful retrieval
     */
    fileTagResponseVO?: shared.FileTagResponseVO;
    /**
     * Internal server error
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
