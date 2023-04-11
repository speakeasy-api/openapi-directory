import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRfeListRequest extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetRfeListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    rfeListVO?: shared.RfeListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
