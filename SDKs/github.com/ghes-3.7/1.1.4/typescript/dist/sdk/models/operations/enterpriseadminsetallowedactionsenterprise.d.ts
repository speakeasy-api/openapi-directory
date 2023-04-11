import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminSetAllowedActionsEnterpriseRequest extends SpeakeasyBase {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    selectedActions: shared.SelectedActions;
}
export declare class EnterpriseAdminSetAllowedActionsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
