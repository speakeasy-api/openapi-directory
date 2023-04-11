import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest extends SpeakeasyBase {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runnerId: number;
}
export declare class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
