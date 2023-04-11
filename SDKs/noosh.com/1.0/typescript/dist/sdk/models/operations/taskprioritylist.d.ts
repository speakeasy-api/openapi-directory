import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskPriorityListRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class TaskPriorityListResponse extends SpeakeasyBase {
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
    taskPriorityListVO?: shared.TaskPriorityListVO;
}
