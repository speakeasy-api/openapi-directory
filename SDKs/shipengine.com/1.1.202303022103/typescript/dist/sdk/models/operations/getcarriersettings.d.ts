import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCarrierSettingsRequest extends SpeakeasyBase {
    /**
     * Carrier ID
     */
    carrierId: string;
    /**
     * The carrier name, such as `ups`, `fedex`, or `dhl_express`.
     */
    carrierName: shared.CarrierNameWithSettingsEnum;
}
export declare class GetCarrierSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The specified resource does not exist.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The request was a success.
     */
    getCarrierSettingsResponseBody?: any;
}
