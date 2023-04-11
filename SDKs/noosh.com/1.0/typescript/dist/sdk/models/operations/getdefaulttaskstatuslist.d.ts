import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDefaultTaskStatusListRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetDefaultTaskStatusListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Internal server error
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful retrieval
     */
    taskStatusListVO?: shared.TaskStatusListVO;
}
