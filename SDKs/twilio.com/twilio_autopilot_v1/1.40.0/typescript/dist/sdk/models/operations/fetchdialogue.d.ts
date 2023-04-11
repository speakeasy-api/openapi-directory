import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDialogueServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchDialogueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDialogueRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
     */
    assistantSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Dialogue resource to fetch.
     */
    sid: string;
}
export declare class FetchDialogueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantDialogue?: shared.AutopilotV1AssistantDialogue;
}
