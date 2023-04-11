import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivitySetThreadSubscriptionRequestBody extends SpeakeasyBase {
    /**
     * Whether to block all notifications from a thread.
     */
    ignored?: boolean;
}
export declare class ActivitySetThreadSubscriptionRequest extends SpeakeasyBase {
    requestBody?: ActivitySetThreadSubscriptionRequestBody;
    /**
     * The unique identifier of the notification thread. This corresponds to the value returned in the `id` field when you retrieve notifications (for example with the [`GET /notifications` operation](https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-notifications-for-the-authenticated-user)).
     */
    threadId: number;
}
export declare class ActivitySetThreadSubscriptionResponse extends SpeakeasyBase {
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
    threadSubscription?: shared.ThreadSubscription;
}
