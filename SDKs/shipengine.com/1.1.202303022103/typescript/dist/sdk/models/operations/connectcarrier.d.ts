import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConnectCarrierRequest extends SpeakeasyBase {
    requestBody: any;
    /**
     * The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.
     */
    carrierName: shared.CarrierNameEnum;
}
export declare class ConnectCarrierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was a success.
     */
    connectCarrierResponseBody?: shared.ConnectCarrierResponseBody;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
