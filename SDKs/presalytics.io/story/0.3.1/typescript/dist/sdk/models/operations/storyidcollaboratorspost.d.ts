import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdCollaboratorsPostRequest extends SpeakeasyBase {
    /**
     * Collaborator user id and permission type
     */
    addNewCollaboratorRequest: shared.AddNewCollaboratorRequest;
    /**
     * the id from the story object
     */
    id: string;
}
export declare class StoryIdCollaboratorsPostResponse extends SpeakeasyBase {
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
