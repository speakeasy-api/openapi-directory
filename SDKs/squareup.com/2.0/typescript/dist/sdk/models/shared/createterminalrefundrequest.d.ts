import { SpeakeasyBase } from "../../../internal/utils";
import { TerminalRefund } from "./terminalrefund";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class CreateTerminalRefundRequest extends SpeakeasyBase {
    /**
     * A unique string that identifies this `CreateRefund` request. Keys can be any valid string but
     *
     * @remarks
     * must be unique for every `CreateRefund` request.
     *
     * See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotencyKey: string;
    refund?: TerminalRefund;
}
