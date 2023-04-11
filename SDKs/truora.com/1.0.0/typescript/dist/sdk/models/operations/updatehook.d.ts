import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateHookSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class UpdateHookRequest extends SpeakeasyBase {
    /**
     * Request body updates given hook.
     */
    createHookInput: shared.CreateHookInput;
    /**
     * Hook ID
     */
    hookId: string;
}
export declare class UpdateHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Validation error, at least one of the parameters was invalid.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
