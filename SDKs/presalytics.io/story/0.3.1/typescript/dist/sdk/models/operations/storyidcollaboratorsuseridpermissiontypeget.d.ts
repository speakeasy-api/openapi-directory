import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdCollaboratorsUseridPermissiontypeGetRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
    /**
     * the type of permission requested.  can be a permission_type object name (e.g., owner, editor, create, viewer, admin) or a permission type field (e.g., can_edit, can_view, can_add_collaborators, can_delete)
     */
    permissiontype: string;
    /**
     * The presalytics userid (NOT the Id of the story_collaborator object)
     */
    storyCollaboratorUserid: string;
}
export declare class StoryIdCollaboratorsUseridPermissiontypeGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    problemDetail?: shared.ProblemDetail;
}
