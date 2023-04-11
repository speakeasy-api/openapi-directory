import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityGetThreadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the pull request thread.
     */
    threadId: number;
}
export declare class ActivityGetThreadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    thread?: shared.Thread;
}
