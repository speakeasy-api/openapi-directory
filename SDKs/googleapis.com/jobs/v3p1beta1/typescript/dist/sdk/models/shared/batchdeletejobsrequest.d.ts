import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input only. Batch delete jobs request.
 */
export declare class BatchDeleteJobsRequest extends SpeakeasyBase {
    /**
     * Required. The filter string specifies the jobs to be deleted. Supported operator: =, AND The fields eligible for filtering are: * `companyName` (Required) * `requisitionId` (Required) Sample Query: companyName = "projects/api-test-project/companies/123" AND requisitionId = "req-1"
     */
    filter?: string;
}
