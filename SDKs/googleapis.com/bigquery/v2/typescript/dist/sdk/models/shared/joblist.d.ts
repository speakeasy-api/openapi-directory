import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorProto } from "./errorproto";
import { JobConfiguration } from "./jobconfiguration";
import { JobReference } from "./jobreference";
import { JobStatistics } from "./jobstatistics";
import { JobStatus } from "./jobstatus";
export declare class JobListJobs extends SpeakeasyBase {
    configuration?: JobConfiguration;
    errorResult?: ErrorProto;
    /**
     * Unique opaque ID of the job.
     */
    id?: string;
    jobReference?: JobReference;
    /**
     * The resource type.
     */
    kind?: string;
    /**
     * Running state of the job. When the state is DONE, errorResult can be checked to determine whether the job succeeded or failed.
     */
    state?: string;
    statistics?: JobStatistics;
    status?: JobStatus;
    /**
     * [Full-projection-only] Email address of the user who ran the job.
     */
    userEmail?: string;
}
/**
 * Successful response
 */
export declare class JobList extends SpeakeasyBase {
    /**
     * A hash of this page of results.
     */
    etag?: string;
    /**
     * List of jobs that were requested.
     */
    jobs?: JobListJobs[];
    /**
     * The resource type of the response.
     */
    kind?: string;
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string;
}
