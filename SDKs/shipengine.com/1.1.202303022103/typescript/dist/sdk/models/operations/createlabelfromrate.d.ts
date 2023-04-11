import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLabelFromRateRequest extends SpeakeasyBase {
    createLabelFromRateRequestBody: shared.CreateLabelFromRateRequestBody;
    /**
     * Rate ID
     */
    rateId: string;
}
export declare class CreateLabelFromRateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The requested object creation was a success.
     */
    createLabelFromRateResponseBody?: shared.CreateLabelFromRateResponseBodyOutput;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
