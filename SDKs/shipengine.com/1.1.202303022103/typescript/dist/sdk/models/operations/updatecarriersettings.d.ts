import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCarrierSettingsRequest extends SpeakeasyBase {
    requestBody: any;
    /**
     * Carrier ID
     */
    carrierId: string;
    /**
     * The carrier name, such as `ups`, `fedex`, or `dhl_express`.
     */
    carrierName: shared.CarrierNameWithSettingsEnum;
}
export declare class UpdateCarrierSettingsResponse extends SpeakeasyBase {
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
