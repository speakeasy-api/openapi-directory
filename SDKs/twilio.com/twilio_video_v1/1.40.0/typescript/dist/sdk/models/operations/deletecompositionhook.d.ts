import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCompositionHookServerList: readonly ["https://video.twilio.com"];
export declare class DeleteCompositionHookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCompositionHookRequest extends SpeakeasyBase {
    /**
     * The SID of the CompositionHook resource to delete.
     */
    sid: string;
}
export declare class DeleteCompositionHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
