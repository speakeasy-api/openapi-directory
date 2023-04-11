import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message containing a runtime error config.
 */
export declare class RuntimeError extends SpeakeasyBase {
    /**
     * The enumerated Lighthouse Error code.
     */
    code?: string;
    /**
     * A human readable message explaining the error code.
     */
    message?: string;
}
