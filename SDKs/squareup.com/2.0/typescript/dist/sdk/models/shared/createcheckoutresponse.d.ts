import { SpeakeasyBase } from "../../../internal/utils";
import { Checkout } from "./checkout";
import { ErrorT } from "./error";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the `CreateCheckout` endpoint.
 */
export declare class CreateCheckoutResponse extends SpeakeasyBase {
    /**
     * Square Checkout lets merchants accept online payments for supported
     *
     * @remarks
     * payment types using a checkout workflow hosted on squareup.com.
     */
    checkout?: Checkout;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
