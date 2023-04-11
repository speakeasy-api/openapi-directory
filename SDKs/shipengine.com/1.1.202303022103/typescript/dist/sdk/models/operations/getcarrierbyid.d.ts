import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCarrierByIdRequest extends SpeakeasyBase {
    /**
     * Carrier ID
     */
    carrierId: string;
}
export declare class GetCarrierByIdResponse extends SpeakeasyBase {
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
    getCarrierByIdResponseBody?: shared.GetCarrierByIdResponseBody;
}
