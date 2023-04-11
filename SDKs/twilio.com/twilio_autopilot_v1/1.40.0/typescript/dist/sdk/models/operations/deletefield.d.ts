import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteFieldServerList: readonly ["https://autopilot.twilio.com"];
export declare class DeleteFieldSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteFieldRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resources to delete.
     */
    assistantSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Field resource to delete.
     */
    sid: string;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with the Field resource to delete.
     */
    taskSid: string;
}
export declare class DeleteFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
