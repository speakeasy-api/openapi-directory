import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed counts on the entry's usage. Caveats: - Only BigQuery tables have usage stats - The usage stats only include BigQuery query jobs - The usage stats might be underestimated, e.g. wildcard table references are not yet counted in usage computation https://cloud.google.com/bigquery/docs/querying-wildcard-tables
 */
export declare class GoogleCloudDatacatalogV1beta1UsageStats extends SpeakeasyBase {
    /**
     * The number of times that the underlying entry was attempted to be used but was cancelled by the user.
     */
    totalCancellations?: number;
    /**
     * The number of times that the underlying entry was successfully used.
     */
    totalCompletions?: number;
    /**
     * Total time spent (in milliseconds) during uses the resulted in completions.
     */
    totalExecutionTimeForCompletionsMillis?: number;
    /**
     * The number of times that the underlying entry was attempted to be used but failed.
     */
    totalFailures?: number;
}
