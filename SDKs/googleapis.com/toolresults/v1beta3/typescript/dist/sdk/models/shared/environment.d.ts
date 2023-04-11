import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentDimensionValueEntry } from "./environmentdimensionvalueentry";
import { MergedResult } from "./mergedresult";
import { ResultsStorage } from "./resultsstorage";
import { ShardSummary } from "./shardsummary";
import { Timestamp } from "./timestamp";
/**
 * An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).
 */
export declare class Environment extends SpeakeasyBase {
    /**
     * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
     */
    completionTime?: Timestamp;
    /**
     * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
     */
    creationTime?: Timestamp;
    /**
     * Dimension values describing the environment. Dimension values always consist of "Model", "Version", "Locale", and "Orientation". - In response: always set - In create request: always set - In update request: never set
     */
    dimensionValue?: EnvironmentDimensionValueEntry[];
    /**
     * A short human-readable name to display in the UI. Maximum of 100 characters. For example: Nexus 5, API 27.
     */
    displayName?: string;
    /**
     * Output only. An Environment id.
     */
    environmentId?: string;
    /**
     * Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
     */
    environmentResult?: MergedResult;
    /**
     * Output only. An Execution id.
     */
    executionId?: string;
    /**
     * Output only. A History id.
     */
    historyId?: string;
    /**
     * Output only. A Project id.
     */
    projectId?: string;
    /**
     * The storage for test results.
     */
    resultsStorage?: ResultsStorage;
    /**
     * Output only. Summaries of shards. Only one shard will present unless sharding feature is enabled in TestExecutionService.
     */
    shardSummaries?: ShardSummary[];
}
