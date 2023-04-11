import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdCollaboratorsInactivePostRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
    /**
     * Collaborator user id and permission type
     */
    modifyInactiveCollaborator: shared.ModifyInactiveCollaborator;
}
export declare class StoryIdCollaboratorsInactivePostResponse extends SpeakeasyBase {
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
