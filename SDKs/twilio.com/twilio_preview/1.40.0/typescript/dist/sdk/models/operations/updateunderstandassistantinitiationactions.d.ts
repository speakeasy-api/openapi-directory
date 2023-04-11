import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUnderstandAssistantInitiationActionsServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandAssistantInitiationActionsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
    initiationActions?: any;
}
export declare class UpdateUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
    assistantSid: string;
    requestBody?: UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest;
}
export declare class UpdateUnderstandAssistantInitiationActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantAssistantInitiationActions?: shared.PreviewUnderstandAssistantAssistantInitiationActions;
}
