import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCreditCardRequest extends SpeakeasyBase {
    /**
     * Credit Card ID
     */
    cardId: number;
}
export declare class GetCreditCardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Credit card content
     */
    creditCard?: shared.CreditCard;
    /**
     * MissingCreditCard
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
