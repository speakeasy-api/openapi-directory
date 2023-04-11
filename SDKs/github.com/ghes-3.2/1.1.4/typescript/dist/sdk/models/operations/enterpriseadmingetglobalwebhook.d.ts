import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetGlobalWebhookRequest extends SpeakeasyBase {
    /**
     * This API is under preview and subject to change.
     */
    accept: string;
    /**
     * The unique identifier of the hook.
     */
    hookId: number;
}
export declare class EnterpriseAdminGetGlobalWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    globalHook?: shared.GlobalHook;
}
