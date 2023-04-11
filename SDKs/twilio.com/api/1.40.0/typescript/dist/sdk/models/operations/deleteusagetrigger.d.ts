import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUsageTriggerServerList: readonly ["https://api.twilio.com"];
export declare class DeleteUsageTriggerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUsageTriggerRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resources to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the UsageTrigger resource to delete.
     */
    sid: string;
}
export declare class DeleteUsageTriggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
