import { SpeakeasyBase } from "../../../internal/utils";
import { HotKeyInfo } from "./hotkeyinfo";
/**
 * Information useful for debugging a hot key detection.
 */
export declare class HotKeyDebuggingInfo extends SpeakeasyBase {
    /**
     * Debugging information for each detected hot key. Keyed by a hash of the key.
     */
    detectedHotKeys?: Record<string, HotKeyInfo>;
}
