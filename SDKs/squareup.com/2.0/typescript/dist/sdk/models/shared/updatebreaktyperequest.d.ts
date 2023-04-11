import { SpeakeasyBase } from "../../../internal/utils";
import { BreakType } from "./breaktype";
/**
 * A request to update a `BreakType`.
 */
export declare class UpdateBreakTypeRequest extends SpeakeasyBase {
    /**
     * A defined break template that sets an expectation for possible `Break`
     *
     * @remarks
     * instances on a `Shift`.
     */
    breakType: BreakType;
}
