import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchStyleSheetServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchStyleSheetPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class FetchStyleSheetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchStyleSheetRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: FetchStyleSheetPathParams;
    security: FetchStyleSheetSecurity;
}
export declare class FetchStyleSheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantStyleSheet?: shared.AutopilotV1AssistantStyleSheet;
}
