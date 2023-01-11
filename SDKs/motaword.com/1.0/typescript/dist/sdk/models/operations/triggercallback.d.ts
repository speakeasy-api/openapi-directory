import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TriggerCallbackActionTypeEnum {
    Translated = "translated",
    Proofread = "proofread",
    Completed = "completed"
}
export declare class TriggerCallbackPathParams extends SpeakeasyBase {
    actionType: TriggerCallbackActionTypeEnum;
    id: number;
}
export declare class TriggerCallbackRequest extends SpeakeasyBase {
    pathParams: TriggerCallbackPathParams;
}
export declare class TriggerCallbackResponse extends SpeakeasyBase {
    callbackResult?: shared.CallbackResult;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
