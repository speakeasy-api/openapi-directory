import { SpeakeasyBase } from "../../../internal/utils";
import { Breakpoint } from "./breakpoint";
/**
 * Response for getting breakpoint information.
 */
export declare class GetBreakpointResponse extends SpeakeasyBase {
    /**
     * ------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.
     */
    breakpoint?: Breakpoint;
}
