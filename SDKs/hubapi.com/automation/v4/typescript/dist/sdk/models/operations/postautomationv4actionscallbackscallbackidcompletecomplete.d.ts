import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity extends SpeakeasyBase {
    hapikey?: string;
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest extends SpeakeasyBase {
    /**
     * The result of the completed action.
     */
    callbackCompletionRequest: shared.CallbackCompletionRequest;
    /**
     * The ID of the target app.
     */
    callbackId: string;
}
export declare class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
