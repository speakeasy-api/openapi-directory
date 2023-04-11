import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IssueAssignment } from "./googlecloudcontactcenterinsightsv1issueassignment";
/**
 * Issue Modeling result on a conversation.
 */
export declare class GoogleCloudContactcenterinsightsV1IssueModelResult extends SpeakeasyBase {
    /**
     * Issue model that generates the result. Format: projects/{project}/locations/{location}/issueModels/{issue_model}
     */
    issueModel?: string;
    /**
     * All the matched issues.
     */
    issues?: GoogleCloudContactcenterinsightsV1IssueAssignment[];
}
