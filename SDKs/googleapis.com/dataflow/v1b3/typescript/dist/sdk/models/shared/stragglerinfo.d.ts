import { SpeakeasyBase } from "../../../internal/utils";
import { StragglerDebuggingInfo } from "./stragglerdebugginginfo";
/**
 * Information useful for straggler identification and debugging.
 */
export declare class StragglerInfo extends SpeakeasyBase {
    /**
     * The straggler causes, keyed by the string representation of the StragglerCause enum and contains specialized debugging information for each straggler cause.
     */
    causes?: Record<string, StragglerDebuggingInfo>;
    /**
     * The time when the work item attempt became a straggler.
     */
    startTime?: string;
}
