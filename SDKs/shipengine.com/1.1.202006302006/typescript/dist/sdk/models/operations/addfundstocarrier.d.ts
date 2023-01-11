import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFundsToCarrierPathParams extends SpeakeasyBase {
    carrierId: string;
}
export declare class AddFundsToCarrierRequest extends SpeakeasyBase {
    pathParams: AddFundsToCarrierPathParams;
    request: shared.AddFundsToCarrierRequestBody;
}
export declare class AddFundsToCarrierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addFundsToCarrierResponseBody?: shared.AddFundsToCarrierResponseBody;
    errorResponseBody?: shared.ErrorResponseBody;
}
