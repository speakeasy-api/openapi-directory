import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateStyleSheetServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateStyleSheetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateStyleSheetUpdateStyleSheetRequest extends SpeakeasyBase {
    /**
     * The JSON string that describes the style sheet object.
     */
    styleSheet?: any;
}
export declare class UpdateStyleSheetRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to update.
     */
    assistantSid: string;
    requestBody?: UpdateStyleSheetUpdateStyleSheetRequest;
}
export declare class UpdateStyleSheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantStyleSheet?: shared.AutopilotV1AssistantStyleSheet;
}
