import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomTaskTypesOfWgRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetCustomTaskTypesOfWgResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful retrieval
     */
    taskTypeListVO?: shared.TaskTypeListVO;
}
