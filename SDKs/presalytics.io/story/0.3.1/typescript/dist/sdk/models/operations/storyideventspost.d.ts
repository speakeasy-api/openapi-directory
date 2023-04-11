import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdEventsPostRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
    /**
     * Collaborator user id and permission type
     */
    manageEvent: shared.ManageEvent;
}
export declare class StoryIdEventsPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * A repsonse to the requested action
     */
    storyIdEventsPost200ApplicationJSONObject?: Record<string, any>;
}
