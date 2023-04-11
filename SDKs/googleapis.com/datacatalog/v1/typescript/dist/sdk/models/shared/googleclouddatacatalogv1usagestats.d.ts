import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed statistics on the entry's usage. Usage statistics have the following limitations: - Only BigQuery tables have them. - They only include BigQuery query jobs. - They might be underestimated because wildcard table references are not yet counted. For more information, see [Querying multiple tables using a wildcard table] (https://cloud.google.com/bigquery/docs/querying-wildcard-tables)
 */
export declare class GoogleCloudDatacatalogV1UsageStats extends SpeakeasyBase {
    /**
     * The number of cancelled attempts to use the underlying entry.
     */
    totalCancellations?: number;
    /**
     * The number of successful uses of the underlying entry.
     */
    totalCompletions?: number;
    /**
     * Total time spent only on successful uses, in milliseconds.
     */
    totalExecutionTimeForCompletionsMillis?: number;
    /**
     * The number of failed attempts to use the underlying entry.
     */
    totalFailures?: number;
}
