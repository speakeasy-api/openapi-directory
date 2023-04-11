import { SpeakeasyBase } from "../../../internal/utils";
export declare class RowAccessPolicyReference extends SpeakeasyBase {
    /**
     * [Required] The ID of the dataset containing this row access policy.
     */
    datasetId?: string;
    /**
     * [Required] The ID of the row access policy. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
     */
    policyId?: string;
    /**
     * [Required] The ID of the project containing this row access policy.
     */
    projectId?: string;
    /**
     * [Required] The ID of the table containing this row access policy.
     */
    tableId?: string;
}
