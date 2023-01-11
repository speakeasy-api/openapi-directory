import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommissionsByFilterRequest extends SpeakeasyBase {
    request?: shared.ReportFilter;
}
export declare class GetCommissionsByFilterResponse extends SpeakeasyBase {
    commissionList?: shared.CommissionList;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
