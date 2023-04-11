import { SpeakeasyBase } from "../../../internal/utils";
import { TerminalCheckout } from "./terminalcheckout";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class CreateTerminalCheckoutRequest extends SpeakeasyBase {
    checkout: TerminalCheckout;
    /**
     * A unique string that identifies this `CreateCheckout` request. Keys can be any valid string but
     *
     * @remarks
     * must be unique for every `CreateCheckout` request.
     *
     * See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotencyKey: string;
}
