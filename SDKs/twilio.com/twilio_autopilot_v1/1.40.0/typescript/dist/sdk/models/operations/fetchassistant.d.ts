import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAssistantServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchAssistantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAssistantRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Assistant resource to fetch.
     */
    sid: string;
}
export declare class FetchAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1Assistant?: shared.AutopilotV1Assistant;
}
