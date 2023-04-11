import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdCollaboratorsUseridGetRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
    /**
     * The presalytics userid (NOT the Id of the story_collaborator object)
     */
    storyCollaboratorUserid: string;
}
export declare class StoryIdCollaboratorsUseridGetResponse extends SpeakeasyBase {
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
