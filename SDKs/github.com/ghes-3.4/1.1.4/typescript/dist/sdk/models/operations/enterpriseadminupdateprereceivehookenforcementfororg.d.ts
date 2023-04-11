import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody extends SpeakeasyBase {
    /**
     * Whether repositories can override enforcement.
     */
    allowDownstreamConfiguration?: boolean;
    /**
     * The state of enforcement for the hook on this repository.
     */
    enforcement?: string;
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the pre-receive hook.
     */
    preReceiveHookId: number;
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
