import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deblock preprocessing configuration.
 */
export declare class Deblock extends SpeakeasyBase {
    /**
     * Enable deblocker. The default is `false`.
     */
    enabled?: boolean;
    /**
     * Set strength of the deblocker. Enter a value between 0 and 1. The higher the value, the stronger the block removal. 0 is no deblocking. The default is 0.
     */
    strength?: number;
}
