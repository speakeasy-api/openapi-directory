import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserPaymentInfoPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class UpdateUserPaymentInfoRequest extends SpeakeasyBase {
    pathParams: UpdateUserPaymentInfoPathParams;
    request?: shared.PaymentInfo;
}
export declare class UpdateUserPaymentInfoResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
