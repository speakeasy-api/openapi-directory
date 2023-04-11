import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandAssistantFallbackActionsServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandAssistantFallbackActionsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandAssistantFallbackActionsRequest extends SpeakeasyBase {
    assistantSid: string;
}
export declare class FetchUnderstandAssistantFallbackActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantAssistantFallbackActions?: shared.PreviewUnderstandAssistantAssistantFallbackActions;
}
