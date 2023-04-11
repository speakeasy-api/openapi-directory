import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateRestoreAssistantServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateRestoreAssistantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateRestoreAssistantUpdateRestoreAssistantRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Assistant resource to restore.
     */
    assistant: string;
}
export declare class UpdateRestoreAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1RestoreAssistant?: shared.AutopilotV1RestoreAssistant;
}
