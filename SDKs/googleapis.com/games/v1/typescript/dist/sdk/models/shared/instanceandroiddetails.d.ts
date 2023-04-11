import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Android instance details resource.
 */
export declare class InstanceAndroidDetails extends SpeakeasyBase {
    /**
     * Flag indicating whether the anti-piracy check is enabled.
     */
    enablePiracyCheck?: boolean;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceAndroidDetails`.
     */
    kind?: string;
    /**
     * Android package name which maps to Google Play URL.
     */
    packageName?: string;
    /**
     * Indicates that this instance is the default for new installations.
     */
    preferred?: boolean;
}
