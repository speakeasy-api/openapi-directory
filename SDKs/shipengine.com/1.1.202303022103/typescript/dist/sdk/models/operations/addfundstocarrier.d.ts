import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddFundsToCarrierRequest extends SpeakeasyBase {
    addFundsToCarrierRequestBody: shared.AddFundsToCarrierRequestBody;
    /**
     * Carrier ID
     */
    carrierId: string;
}
export declare class AddFundsToCarrierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was a success.
     */
    addFundsToCarrierResponseBody?: shared.AddFundsToCarrierResponseBody;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
