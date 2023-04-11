import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSampleServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchSampleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSampleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource to fetch.
     */
    assistantSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Sample resource to fetch.
     */
    sid: string;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the Sample resource to create.
     */
    taskSid: string;
}
export declare class FetchSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantTaskSample?: shared.AutopilotV1AssistantTaskSample;
}
