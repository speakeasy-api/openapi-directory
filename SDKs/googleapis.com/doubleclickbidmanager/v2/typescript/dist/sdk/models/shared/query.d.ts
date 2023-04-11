import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersT } from "./parameters";
import { QueryMetadata } from "./querymetadata";
import { QuerySchedule } from "./queryschedule";
/**
 * Represents a query.
 */
export declare class Query extends SpeakeasyBase {
    /**
     * Query metadata.
     */
    metadata?: QueryMetadata;
    /**
     * Parameters of a query or report.
     */
    params?: ParametersT;
    /**
     * Output only. Query ID.
     */
    queryId?: string;
    /**
     * Information on when and how frequently to run a query.
     */
    schedule?: QuerySchedule;
}
/**
 * Represents a query.
 */
export declare class QueryInput extends SpeakeasyBase {
    /**
     * Query metadata.
     */
    metadata?: QueryMetadata;
    /**
     * Parameters of a query or report.
     */
    params?: ParametersT;
    /**
     * Information on when and how frequently to run a query.
     */
    schedule?: QuerySchedule;
}
