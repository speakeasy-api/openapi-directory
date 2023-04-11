import { SpeakeasyBase } from "../../../internal/utils";
import { Breakpoint } from "./breakpoint";
/**
 * Request to update an active breakpoint.
 */
export declare class UpdateActiveBreakpointRequest extends SpeakeasyBase {
    /**
     * ------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.
     */
    breakpoint?: Breakpoint;
}
