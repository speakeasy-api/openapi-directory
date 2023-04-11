import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResetCardPaymentCodeRequest extends SpeakeasyBase {
    /**
     * Credit Card ID
     */
    cardId: number;
}
export declare class ResetCardPaymentCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Credit card content
     */
    creditCard?: shared.CreditCard;
    /**
     * UserNotFound MissingCorporateAccount MissingParameter MissingCreditCard UnauthorizedUser
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
