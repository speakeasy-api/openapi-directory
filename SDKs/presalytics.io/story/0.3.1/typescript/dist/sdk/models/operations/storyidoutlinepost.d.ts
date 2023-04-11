import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdOutlinePostRequest extends SpeakeasyBase {
    /**
     * A story outline object
     */
    requestBody: string;
    /**
     * the id from the story object
     */
    id: string;
}
export declare class StoryIdOutlinePostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
}
