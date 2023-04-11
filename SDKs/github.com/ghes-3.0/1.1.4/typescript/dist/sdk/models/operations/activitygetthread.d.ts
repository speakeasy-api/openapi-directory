import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityGetThreadRequest extends SpeakeasyBase {
    /**
     * thread_id parameter
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
