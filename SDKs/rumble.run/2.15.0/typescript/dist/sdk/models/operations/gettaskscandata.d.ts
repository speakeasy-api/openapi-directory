import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTaskScanDataSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetTaskScanDataRequest extends SpeakeasyBase {
    /**
     * UUID of the task
     */
    taskId: string;
}
export declare class GetTaskScanDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
