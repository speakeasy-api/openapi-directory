import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminDeletePreReceiveHookRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the pre-receive hook.
     */
    preReceiveHookId: number;
}
export declare class EnterpriseAdminDeletePreReceiveHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
