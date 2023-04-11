import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUnderstandStyleSheetServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandStyleSheetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest extends SpeakeasyBase {
    /**
     * The JSON Style sheet string
     */
    styleSheet?: any;
}
export declare class UpdateUnderstandStyleSheetRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant
     */
    assistantSid: string;
    requestBody?: UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest;
}
export declare class UpdateUnderstandStyleSheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantStyleSheet?: shared.PreviewUnderstandAssistantStyleSheet;
}
