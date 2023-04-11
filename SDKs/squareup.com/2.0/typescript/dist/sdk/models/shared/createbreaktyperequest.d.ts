import { SpeakeasyBase } from "../../../internal/utils";
import { BreakType } from "./breaktype";
/**
 * A request to create a new `BreakType`.
 */
export declare class CreateBreakTypeRequest extends SpeakeasyBase {
    /**
     * A defined break template that sets an expectation for possible `Break`
     *
     * @remarks
     * instances on a `Shift`.
     */
    breakType: BreakType;
    /**
     * A unique string value to ensure the idempotency of the operation.
     */
    idempotencyKey?: string;
}
