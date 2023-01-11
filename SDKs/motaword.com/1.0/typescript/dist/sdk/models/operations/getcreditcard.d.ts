import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCreditCardPathParams extends SpeakeasyBase {
    cardId: number;
}
export declare class GetCreditCardRequest extends SpeakeasyBase {
    pathParams: GetCreditCardPathParams;
}
export declare class GetCreditCardResponse extends SpeakeasyBase {
    contentType: string;
    creditCard?: shared.CreditCard;
    error?: shared.ErrorT;
    statusCode: number;
}
