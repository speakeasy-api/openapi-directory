import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompareBulkRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was a success.
     */
    compareBulkRatesResponseBody?: shared.BulkRate[];
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
