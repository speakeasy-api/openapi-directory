import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityDeleteThreadSubscriptionRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the pull request thread.
     */
    threadId: number;
}
export declare class ActivityDeleteThreadSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
