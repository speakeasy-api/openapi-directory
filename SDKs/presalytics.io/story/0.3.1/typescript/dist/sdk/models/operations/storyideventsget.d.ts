import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdEventsGetRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
}
export declare class StoryIdEventsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An Array of events
     */
    events?: shared.Event[];
    /**
     * Unauthorized
     */
    problemDetail?: shared.ProblemDetail;
}
