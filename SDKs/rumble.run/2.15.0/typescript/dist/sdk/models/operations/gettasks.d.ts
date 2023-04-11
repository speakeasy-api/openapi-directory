import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTasksSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetTasksRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
    /**
     * an optional status string for filtering results
     */
    status?: string;
}
export declare class GetTasksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * array of tasks
     */
    tasks?: shared.Task[];
}
