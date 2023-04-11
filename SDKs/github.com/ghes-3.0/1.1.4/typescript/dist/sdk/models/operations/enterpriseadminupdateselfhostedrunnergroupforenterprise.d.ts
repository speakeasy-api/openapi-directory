import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Visibility of a runner group. You can select all organizations or select individual organizations. Can be one of: `all` or `selected`
 */
export declare enum EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all"
}
export declare class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody extends SpeakeasyBase {
    /**
     * Whether the runner group can be used by `public` repositories.
     */
    allowsPublicRepositories?: boolean;
    /**
     * Name of the runner group.
     */
    name?: string;
    /**
     * Visibility of a runner group. You can select all organizations or select individual organizations. Can be one of: `all` or `selected`
     */
    visibility?: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum;
}
export declare class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
export declare class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    runnerGroupsEnterprise?: shared.RunnerGroupsEnterprise;
}
