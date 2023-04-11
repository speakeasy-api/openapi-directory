import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchStyleSheetServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchStyleSheetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchStyleSheetRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
     */
    assistantSid: string;
}
export declare class FetchStyleSheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantStyleSheet?: shared.AutopilotV1AssistantStyleSheet;
}
