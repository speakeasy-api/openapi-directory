import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommissionStatsByFilterResponse extends SpeakeasyBase {
    /**
     * User's commission stats
     */
    commissionStats?: shared.CommissionStats;
    contentType: string;
    /**
     * UnauthorizedUser
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
