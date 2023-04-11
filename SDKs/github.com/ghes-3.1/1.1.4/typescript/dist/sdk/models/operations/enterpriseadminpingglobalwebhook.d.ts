import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminPingGlobalWebhookRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the hook.
     */
    hookId: number;
}
export declare class EnterpriseAdminPingGlobalWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
