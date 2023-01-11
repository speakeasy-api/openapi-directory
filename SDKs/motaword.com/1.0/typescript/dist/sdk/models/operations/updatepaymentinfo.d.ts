import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePaymentInfoRequest extends SpeakeasyBase {
    request?: shared.UpdatePaymentInfo;
}
export declare class UpdatePaymentInfoResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    paymentInfo?: shared.PaymentInfo;
    statusCode: number;
}
