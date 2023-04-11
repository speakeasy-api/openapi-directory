import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateQueueServerList: readonly ["https://api.twilio.com"];
export declare class UpdateQueueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateQueueUpdateQueueRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you created to describe this resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * The maximum number of calls allowed to be in the queue. The default is 1000. The maximum is 5000.
     */
    maxSize?: number;
}
export declare class UpdateQueueRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue resource to update.
     */
    accountSid: string;
    requestBody?: UpdateQueueUpdateQueueRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Queue resource to update
     */
    sid: string;
}
export declare class UpdateQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountQueue?: shared.ApiV2010AccountQueue;
}
