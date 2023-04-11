import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommissionsResponse extends SpeakeasyBase {
    /**
     * Commissions for client.
     */
    commissionList?: shared.CommissionList;
    contentType: string;
    /**
     * UnauthorizedUser
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
