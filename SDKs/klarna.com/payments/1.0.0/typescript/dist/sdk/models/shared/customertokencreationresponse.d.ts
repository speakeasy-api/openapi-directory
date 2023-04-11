import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CustomerReadCreateToken } from "./customerreadcreatetoken";
/**
 * Token was successfully created.
 */
export declare class CustomerTokenCreationResponse extends SpeakeasyBase {
    billingAddress?: Address;
    customer?: CustomerReadCreateToken;
    /**
     * Used to connect customers with payment method when it is present.
     */
    paymentMethodReference?: string;
    /**
     * URL to redirect the customer to after placing the order. This is a Klarna URL where Klarna will place a cookie in the customer’s browser (if redirected) and redirect the customer back to the confirmation URL provided by the merchant. This is not a mandatory step but a recommended one to improve the returning customer’s experience.
     */
    redirectUrl?: string;
    /**
     * Generated customer token. This token will be used to create a new order for the subscription using the Create a New order using token API.
     */
    tokenId: string;
}
