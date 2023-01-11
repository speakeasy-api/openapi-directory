import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPaymentInfoPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUserPaymentInfoRequest extends SpeakeasyBase {
    pathParams: GetUserPaymentInfoPathParams;
}
export declare class GetUserPaymentInfoResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    paymentInfo?: shared.PaymentInfo;
    statusCode: number;
}
