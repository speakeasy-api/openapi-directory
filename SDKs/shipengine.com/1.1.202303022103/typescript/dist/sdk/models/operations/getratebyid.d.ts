import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRateByIdRequest extends SpeakeasyBase {
    /**
     * Rate ID
     */
    rateId: string;
}
export declare class GetRateByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The request was a success.
     */
    getRateByIdResponseBody?: shared.GetRateByIdResponseBody;
}
