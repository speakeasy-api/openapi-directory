import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentMethodSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetPaymentMethodRequest extends SpeakeasyBase {
    /**
     * Payment method number
     */
    paymentMethodNumber: string;
}
export declare class GetPaymentMethodResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
