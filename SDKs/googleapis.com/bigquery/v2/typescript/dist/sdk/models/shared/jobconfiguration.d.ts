import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfigurationExtract } from "./jobconfigurationextract";
import { JobConfigurationLoad } from "./jobconfigurationload";
import { JobConfigurationQuery } from "./jobconfigurationquery";
import { JobConfigurationTableCopy } from "./jobconfigurationtablecopy";
export declare class JobConfiguration extends SpeakeasyBase {
    copy?: JobConfigurationTableCopy;
    /**
     * [Optional] If set, don't actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query jobs is undefined.
     */
    dryRun?: boolean;
    extract?: JobConfigurationExtract;
    /**
     * [Optional] Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
     */
    jobTimeoutMs?: string;
    /**
     * [Output-only] The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN.
     */
    jobType?: string;
    /**
     * The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
     */
    labels?: Record<string, string>;
    load?: JobConfigurationLoad;
    query?: JobConfigurationQuery;
}
