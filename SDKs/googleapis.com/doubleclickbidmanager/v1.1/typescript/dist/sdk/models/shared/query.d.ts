import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersT } from "./parameters";
import { QueryMetadata } from "./querymetadata";
import { QuerySchedule } from "./queryschedule";
/**
 * Represents a query.
 */
export declare class Query extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query".
     */
    kind?: string;
    /**
     * Query metadata.
     */
    metadata?: QueryMetadata;
    /**
     * Parameters of a query or report.
     */
    params?: ParametersT;
    /**
     * Query ID.
     */
    queryId?: string;
    /**
     * The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.
     */
    reportDataEndTimeMs?: string;
    /**
     * The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.
     */
    reportDataStartTimeMs?: string;
    /**
     * Information on how frequently and when to run a query.
     */
    schedule?: QuerySchedule;
    /**
     * Canonical timezone code for report data time. Defaults to America/New_York.
     */
    timezoneCode?: string;
}
