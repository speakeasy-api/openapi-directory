import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShowTaskRequest extends SpeakeasyBase {
    /**
     * UUID of task
     */
    id: string;
}
export declare class ShowTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not found
     */
    errorNotFound?: shared.ErrorNotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Task info
     */
    task?: shared.Task;
}
