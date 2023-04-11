import { SpeakeasyBase } from "../../../internal/utils";
export declare class GHErrorHints extends SpeakeasyBase {
    message?: string;
}
/**
 * Unexpected error
 */
export declare class GHError extends SpeakeasyBase {
    /**
     * Optional error information.
     */
    hints?: GHErrorHints[];
    message?: string;
}
