import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state of enforcement for the hook on this repository.
 */
export declare enum EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    Testing = "testing"
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody extends SpeakeasyBase {
    /**
     * The state of enforcement for the hook on this repository.
     */
    enforcement?: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum;
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody;
    owner: string;
    /**
     * pre_receive_hook_id parameter
     */
    preReceiveHookId: number;
    repo: string;
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    repositoryPreReceiveHook?: shared.RepositoryPreReceiveHook;
}
