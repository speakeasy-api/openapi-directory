import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCarrierOptionsRequest extends SpeakeasyBase {
    /**
     * Carrier ID
     */
    carrierId: string;
}
export declare class GetCarrierOptionsResponse extends SpeakeasyBase {
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
    getCarrierOptionsResponseBody?: shared.GetCarrierOptionsResponseBody;
}
