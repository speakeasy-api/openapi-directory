import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminUpdatePreReceiveHookRequestBody extends SpeakeasyBase {
    /**
     * Whether enforcement can be overridden at the org or repo level.
     */
    allowDownstreamConfiguration?: boolean;
    /**
     * The state of enforcement for this hook.
     */
    enforcement?: string;
    /**
     * The pre-receive environment where the script is executed.
     */
    environment?: Record<string, any>;
    /**
     * The name of the hook.
     */
    name?: string;
    /**
     * The script that the hook runs.
     */
    script?: string;
    /**
     * The GitHub repository where the script is kept.
     */
    scriptRepository?: Record<string, any>;
}
export declare class EnterpriseAdminUpdatePreReceiveHookRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminUpdatePreReceiveHookRequestBody;
    /**
     * The unique identifier of the pre-receive hook.
     */
    preReceiveHookId: number;
}
export declare class EnterpriseAdminUpdatePreReceiveHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    preReceiveHook?: shared.PreReceiveHook;
}
