import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity extends SpeakeasyBase {
    hapikey?: string;
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
