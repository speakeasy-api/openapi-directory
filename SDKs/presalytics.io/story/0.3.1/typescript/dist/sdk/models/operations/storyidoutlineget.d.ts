import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdOutlineGetRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
}
export declare class StoryIdOutlineGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * Accepted
     */
    status?: shared.Status;
    /**
     * Stringified Story outline
     */
    storyIdOutlineGet200ApplicationJSONString?: string;
}
