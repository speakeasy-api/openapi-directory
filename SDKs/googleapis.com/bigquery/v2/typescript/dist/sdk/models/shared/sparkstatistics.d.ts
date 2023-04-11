import { SpeakeasyBase } from "../../../internal/utils";
import { SparkLoggingInfo } from "./sparklogginginfo";
export declare class SparkStatistics extends SpeakeasyBase {
    /**
     * [Output-only] Endpoints generated for the Spark job.
     */
    endpoints?: Record<string, string>;
    loggingInfo?: SparkLoggingInfo;
    /**
     * [Output-only] Spark job id if a Spark job is created successfully.
     */
    sparkJobId?: string;
    /**
     * [Output-only] Location where the Spark job is executed.
     */
    sparkJobLocation?: string;
}
