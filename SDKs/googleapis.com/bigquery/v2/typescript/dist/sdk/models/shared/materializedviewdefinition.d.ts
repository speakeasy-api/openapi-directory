import { SpeakeasyBase } from "../../../internal/utils";
export declare class MaterializedViewDefinition extends SpeakeasyBase {
    /**
     * [Optional] Allow non incremental materialized view definition. The default value is "false".
     */
    allowNonIncrementalDefinition?: boolean;
    /**
     * [Optional] [TrustedTester] Enable automatic refresh of the materialized view when the base table is updated. The default value is "true".
     */
    enableRefresh?: boolean;
    /**
     * [Output-only] [TrustedTester] The time when this materialized view was last modified, in milliseconds since the epoch.
     */
    lastRefreshTime?: string;
    /**
     * [Optional] Max staleness of data that could be returned when materizlized view is queried (formatted as Google SQL Interval type).
     */
    maxStaleness?: string;
    /**
     * [Required] A query whose result is persisted.
     */
    query?: string;
    /**
     * [Optional] [TrustedTester] The maximum frequency at which this materialized view will be refreshed. The default value is "1800000" (30 minutes).
     */
    refreshIntervalMs?: string;
}
