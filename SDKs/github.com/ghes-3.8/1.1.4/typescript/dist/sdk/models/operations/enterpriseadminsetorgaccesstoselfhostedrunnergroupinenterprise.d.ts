import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody extends SpeakeasyBase {
    /**
     * List of organization IDs that can access the runner group.
     */
    selectedOrganizationIds: number[];
}
export declare class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest extends SpeakeasyBase {
    requestBody: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
export declare class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
