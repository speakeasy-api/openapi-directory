import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdCollaboratorsGetRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
}
export declare class StoryIdCollaboratorsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * List of collaborators on the story
     */
    storyCollaborators?: shared.StoryCollaborator[];
}
