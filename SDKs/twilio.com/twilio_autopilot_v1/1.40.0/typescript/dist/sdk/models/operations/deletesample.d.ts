import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSampleServerList: readonly ["https://autopilot.twilio.com"];
export declare class DeleteSampleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSampleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resources to delete.
     */
    assistantSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Sample resource to delete.
     */
    sid: string;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the Sample resource to delete.
     */
    taskSid: string;
}
export declare class DeleteSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
