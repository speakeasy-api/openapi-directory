import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTaskForProjectRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    projectId: string;
    workgroupId: string;
}
export declare class PostTaskForProjectRawResponse extends SpeakeasyBase {
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
