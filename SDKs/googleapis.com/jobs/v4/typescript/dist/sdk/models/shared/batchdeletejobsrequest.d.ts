import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to delete a batch of jobs.
 */
export declare class BatchDeleteJobsRequest extends SpeakeasyBase {
    /**
     * The names of the jobs to delete. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example, "projects/foo/tenants/bar/jobs/baz". A maximum of 200 jobs can be deleted in a batch.
     */
    names?: string[];
}
