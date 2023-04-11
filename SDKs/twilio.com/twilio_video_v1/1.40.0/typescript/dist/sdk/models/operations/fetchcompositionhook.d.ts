import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCompositionHookServerList: readonly ["https://video.twilio.com"];
export declare class FetchCompositionHookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCompositionHookRequest extends SpeakeasyBase {
    /**
     * The SID of the CompositionHook resource to fetch.
     */
    sid: string;
}
export declare class FetchCompositionHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1CompositionHook?: shared.VideoV1CompositionHook;
}
