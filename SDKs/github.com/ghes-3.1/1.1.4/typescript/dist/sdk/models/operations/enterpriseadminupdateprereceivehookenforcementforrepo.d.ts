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
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The unique identifier of the pre-receive hook.
     */
    preReceiveHookId: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
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
