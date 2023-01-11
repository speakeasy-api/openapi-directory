import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommissionStatsByFilterRequest extends SpeakeasyBase {
    request?: shared.ReportFilter;
}
export declare class GetCommissionStatsByFilterResponse extends SpeakeasyBase {
    commissionStats?: shared.CommissionStats;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
