import { SpeakeasyBase } from "../../../internal/utils";
/**
 * WorkerHealthReportResponse contains information returned to the worker in response to a health ping.
 */
export declare class WorkerHealthReportResponse extends SpeakeasyBase {
    /**
     * A positive value indicates the worker should change its reporting interval to the specified value. The default value of zero means no change in report rate is requested by the server.
     */
    reportInterval?: string;
}
