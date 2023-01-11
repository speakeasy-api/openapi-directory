import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInsuranceBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getInsuranceBalanceResponseBody?: shared.GetInsuranceBalanceResponseBody;
}
