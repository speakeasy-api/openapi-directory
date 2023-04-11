import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFieldServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchFieldSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFieldRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource to fetch.
     */
    assistantSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Field resource to fetch.
     */
    sid: string;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with the Field resource to fetch.
     */
    taskSid: string;
}
export declare class FetchFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantTaskField?: shared.AutopilotV1AssistantTaskField;
}
