import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfiguration } from "./jobconfiguration";
import { JobReference } from "./jobreference";
import { JobStatistics } from "./jobstatistics";
import { JobStatus } from "./jobstatus";
export declare class Job extends SpeakeasyBase {
    configuration?: JobConfiguration;
    /**
     * [Output-only] A hash of this resource.
     */
    etag?: string;
    /**
     * [Output-only] Opaque ID field of the job
     */
    id?: string;
    jobReference?: JobReference;
    /**
     * [Output-only] The type of the resource.
     */
    kind?: string;
    /**
     * [Output-only] A URL that can be used to access this resource again.
     */
    selfLink?: string;
    statistics?: JobStatistics;
    status?: JobStatus;
    /**
     * [Output-only] Email address of the user who ran the job.
     */
    userEmail?: string;
}
