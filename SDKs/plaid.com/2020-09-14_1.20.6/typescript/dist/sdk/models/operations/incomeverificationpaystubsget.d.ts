import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IncomeVerificationPaystubsGetRequest extends SpeakeasyBase {
    request: shared.IncomeVerificationPaystubsGetRequest;
}
export declare class IncomeVerificationPaystubsGetResponse extends SpeakeasyBase {
    contentType: string;
    incomeVerificationPaystubsGetResponse?: Record<string, any>;
    statusCode: number;
}
