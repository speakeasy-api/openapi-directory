import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetPreReceiveHookRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the pre-receive hook.
     */
    preReceiveHookId: number;
}
export declare class EnterpriseAdminGetPreReceiveHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    preReceiveHook?: shared.PreReceiveHook;
}
