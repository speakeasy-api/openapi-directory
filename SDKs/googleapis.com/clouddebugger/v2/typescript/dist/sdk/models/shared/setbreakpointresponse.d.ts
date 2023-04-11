import { SpeakeasyBase } from "../../../internal/utils";
import { Breakpoint } from "./breakpoint";
/**
 * Response for setting a breakpoint.
 */
export declare class SetBreakpointResponse extends SpeakeasyBase {
    /**
     * ------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.
     */
    breakpoint?: Breakpoint;
}
