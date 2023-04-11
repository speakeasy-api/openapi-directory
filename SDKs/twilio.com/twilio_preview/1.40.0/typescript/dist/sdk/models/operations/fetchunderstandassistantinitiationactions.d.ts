import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandAssistantInitiationActionsServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandAssistantInitiationActionsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
    assistantSid: string;
}
export declare class FetchUnderstandAssistantInitiationActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantAssistantInitiationActions?: shared.PreviewUnderstandAssistantAssistantInitiationActions;
}
