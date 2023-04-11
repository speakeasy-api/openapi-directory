import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandDialogueServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandDialogueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandDialogueRequest extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchUnderstandDialogueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantDialogue?: shared.PreviewUnderstandAssistantDialogue;
}
