import { SpeakeasyBase } from "../../../internal/utils";
import { QueryMetadata } from "./querymetadata";
import { ParametersT } from "./parameters";
import { QuerySchedule } from "./queryschedule";
/**
 * Represents a query.
**/
export declare class Query extends SpeakeasyBase {
    kind?: string;
    metadata?: QueryMetadata;
    params?: ParametersT;
    queryId?: string;
    reportDataEndTimeMs?: string;
    reportDataStartTimeMs?: string;
    schedule?: QuerySchedule;
    timezoneCode?: string;
}
