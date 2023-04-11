import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTaskForProjectJsonRequest extends SpeakeasyBase {
    taskPersistVO?: shared.TaskPersistVO;
    projectId: string;
    workgroupId: string;
}
export declare class PostTaskForProjectJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Invalid data
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful created
     */
    taskCreatedVO?: shared.TaskCreatedVO;
}
