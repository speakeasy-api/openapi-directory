import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCreditCardRequest extends SpeakeasyBase {
    /**
     * Credit Card ID
     */
    cardId: number;
}
export declare class DeleteCreditCardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound MissingCorporateAccount MissingParameter MissingCreditCard UnauthorizedUser
     */
    error?: shared.ErrorT;
    /**
     * Successful operation
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
