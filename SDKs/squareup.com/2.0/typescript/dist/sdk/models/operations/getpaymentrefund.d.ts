import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentRefundSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetPaymentRefundRequest extends SpeakeasyBase {
    /**
     * The unique ID for the desired `PaymentRefund`.
     */
    refundId: string;
}
export declare class GetPaymentRefundResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPaymentRefundResponse?: shared.GetPaymentRefundResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
