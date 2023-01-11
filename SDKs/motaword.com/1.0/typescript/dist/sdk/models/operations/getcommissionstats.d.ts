import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommissionStatsResponse extends SpeakeasyBase {
    commissionStats?: shared.CommissionStats;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
