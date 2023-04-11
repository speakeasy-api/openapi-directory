import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedPaymentMethod } from "./authorizedpaymentmethod";
/**
 * We were unable to create a customer token with the provided data. Some field constraint was violated.
 */
export declare class ErrorV2 extends SpeakeasyBase {
    authorizedPaymentMethod?: AuthorizedPaymentMethod;
    correlationId?: string;
    errorCode?: string;
    errorMessages?: string[];
    fraudStatus?: string;
    reason?: string;
}
