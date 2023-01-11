import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetCorporatePaymentCodeResponse extends SpeakeasyBase {
    contentType: string;
    creditCard?: shared.CreditCard;
    error?: shared.ErrorT;
    statusCode: number;
}
