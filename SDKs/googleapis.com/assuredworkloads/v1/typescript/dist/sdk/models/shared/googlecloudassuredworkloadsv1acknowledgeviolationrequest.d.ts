import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for acknowledging the violation Next Id: 4
 */
export declare class GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest extends SpeakeasyBase {
    /**
     * Required. Business justification explaining the need for violation acknowledgement
     */
    comment?: string;
    /**
     * Optional. This field is deprecated and will be removed in future version of the API. Name of the OrgPolicy which was modified with non-compliant change and resulted in this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name}
     */
    nonCompliantOrgPolicy?: string;
}
