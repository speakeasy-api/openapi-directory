import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentInfoResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    paymentInfo?: shared.PaymentInfo;
    statusCode: number;
}
