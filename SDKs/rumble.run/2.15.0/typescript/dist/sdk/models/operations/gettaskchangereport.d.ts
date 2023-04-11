import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTaskChangeReportSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetTaskChangeReportRequest extends SpeakeasyBase {
    /**
     * UUID of the task
     */
    taskId: string;
}
export declare class GetTaskChangeReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
