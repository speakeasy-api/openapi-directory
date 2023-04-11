import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdRevealRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
}
export declare class StoryIdRevealResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An html document containing a login button
     */
    loginButton?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * An html document containing a reveal.js represenation of the story
     */
    revealJsPresenation?: string;
}
