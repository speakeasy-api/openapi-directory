import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class HideTaskSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class HideTaskRequest extends SpeakeasyBase {
    /**
     * UUID of the task to hide
     */
    taskId: string;
}
export declare class HideTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
