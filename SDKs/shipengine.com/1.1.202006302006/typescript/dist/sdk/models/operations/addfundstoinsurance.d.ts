import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFundsToInsuranceRequest extends SpeakeasyBase {
    request: shared.AddFundsToInsuranceRequestBody;
}
export declare class AddFundsToInsuranceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addFundsToInsuranceResponseBody?: shared.AddFundsToInsuranceResponseBody;
    errorResponseBody?: shared.ErrorResponseBody;
}
