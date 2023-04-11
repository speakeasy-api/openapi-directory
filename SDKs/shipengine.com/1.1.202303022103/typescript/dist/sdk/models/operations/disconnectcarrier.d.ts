import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisconnectCarrierRequest extends SpeakeasyBase {
    /**
     * Carrier ID
     */
    carrierId: string;
    /**
     * The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.
     */
    carrierName: shared.CarrierNameEnum;
}
export declare class DisconnectCarrierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was successful.
     */
    emptyResponseBody?: string;
    /**
     * The specified resource does not exist.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
