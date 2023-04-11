import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetPreReceiveHookForOrgRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the pre-receive hook.
     */
    preReceiveHookId: number;
}
export declare class EnterpriseAdminGetPreReceiveHookForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
