import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteAssistantServerList: readonly ["https://autopilot.twilio.com"];
export declare class DeleteAssistantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteAssistantRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Assistant resource to delete.
     */
    sid: string;
}
export declare class DeleteAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
