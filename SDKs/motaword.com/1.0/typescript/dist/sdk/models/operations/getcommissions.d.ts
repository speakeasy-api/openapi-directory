import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommissionsResponse extends SpeakeasyBase {
    commissionList?: shared.CommissionList;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
