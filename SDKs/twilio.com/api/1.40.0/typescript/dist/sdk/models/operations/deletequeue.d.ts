import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteQueueServerList: readonly ["https://api.twilio.com"];
export declare class DeleteQueueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteQueueRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue resource to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Queue resource to delete
     */
    sid: string;
}
export declare class DeleteQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
