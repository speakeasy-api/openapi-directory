import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResetCorporatePaymentCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Credit card content
     */
    creditCard?: shared.CreditCard;
    /**
     * UserNotFound UnauthorizedUser MissingCorporateAccount
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
