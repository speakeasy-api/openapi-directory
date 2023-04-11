import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUnderstandAssistantFallbackActionsServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandAssistantFallbackActionsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest extends SpeakeasyBase {
    fallbackActions?: any;
}
export declare class UpdateUnderstandAssistantFallbackActionsRequest extends SpeakeasyBase {
    assistantSid: string;
    requestBody?: UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest;
}
export declare class UpdateUnderstandAssistantFallbackActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantAssistantFallbackActions?: shared.PreviewUnderstandAssistantAssistantFallbackActions;
}
