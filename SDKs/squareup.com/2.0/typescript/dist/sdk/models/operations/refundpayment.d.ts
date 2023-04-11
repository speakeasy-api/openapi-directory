import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RefundPaymentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RefundPaymentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    refundPaymentResponse?: shared.RefundPaymentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
