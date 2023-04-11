import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AsyncModerationCallbackConfigRequestModeEnum {
    CallbackModeNone = "CALLBACK_MODE_NONE",
    CallbackModeRest = "CALLBACK_MODE_REST",
    CallbackModeTwirp = "CALLBACK_MODE_TWIRP"
}
export declare class AsyncModerationCallbackConfigRequest extends SpeakeasyBase {
    mode?: AsyncModerationCallbackConfigRequestModeEnum;
    serverUrl?: string;
}
