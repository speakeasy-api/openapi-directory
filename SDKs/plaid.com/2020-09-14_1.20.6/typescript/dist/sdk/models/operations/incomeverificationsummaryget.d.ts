import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IncomeVerificationSummaryGetRequest extends SpeakeasyBase {
    request: shared.IncomeVerificationSummaryGetRequest;
}
export declare class IncomeVerificationSummaryGetResponse extends SpeakeasyBase {
    contentType: string;
    incomeVerificationSummaryGetResponse?: Record<string, any>;
    statusCode: number;
}
