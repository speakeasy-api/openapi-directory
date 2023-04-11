import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandStyleSheetServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandStyleSheetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandStyleSheetRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant
     */
    assistantSid: string;
}
export declare class FetchUnderstandStyleSheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantStyleSheet?: shared.PreviewUnderstandAssistantStyleSheet;
}
