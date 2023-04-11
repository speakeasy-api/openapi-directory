import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdCollaboratorsUseridPutRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
    /**
     * Collaborator user id (presalytics userid) and permission type
     */
    storyCollaborator: shared.StoryCollaborator;
    /**
     * The presalytics userid (NOT the Id of the story_collaborator object)
     */
    storyCollaboratorUserid: string;
}
export declare class StoryIdCollaboratorsUseridPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * Collaborator data
     */
    storyCollaborator?: shared.StoryCollaborator;
}
