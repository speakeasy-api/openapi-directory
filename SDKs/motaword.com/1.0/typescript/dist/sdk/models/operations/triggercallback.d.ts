import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Callback type
 */
export declare enum TriggerCallbackActionTypeEnum {
    Translated = "translated",
    Proofread = "proofread",
    Completed = "completed"
}
export declare class TriggerCallbackRequest extends SpeakeasyBase {
    /**
     * Callback type
     */
    actionType: TriggerCallbackActionTypeEnum;
    /**
     * Project ID
     */
    id: number;
}
export declare class TriggerCallbackResponse extends SpeakeasyBase {
    /**
     * Callback result
     */
    callbackResult?: shared.CallbackResult;
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
