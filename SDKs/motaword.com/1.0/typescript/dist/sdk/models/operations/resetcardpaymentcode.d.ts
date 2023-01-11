import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetCardPaymentCodePathParams extends SpeakeasyBase {
    cardId: number;
}
export declare class ResetCardPaymentCodeRequest extends SpeakeasyBase {
    pathParams: ResetCardPaymentCodePathParams;
}
export declare class ResetCardPaymentCodeResponse extends SpeakeasyBase {
    contentType: string;
    creditCard?: shared.CreditCard;
    error?: shared.ErrorT;
    statusCode: number;
}
