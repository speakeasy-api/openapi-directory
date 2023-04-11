import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetActionsCacheUsagePolicyForEnterpriseRequest extends SpeakeasyBase {
    actionsCacheUsagePolicyEnterprise: shared.ActionsCacheUsagePolicyEnterprise;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
}
export declare class ActionsSetActionsCacheUsagePolicyForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
