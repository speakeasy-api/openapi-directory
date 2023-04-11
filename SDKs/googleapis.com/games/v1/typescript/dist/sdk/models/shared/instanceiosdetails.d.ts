import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The iOS details resource.
 */
export declare class InstanceIosDetails extends SpeakeasyBase {
    /**
     * Bundle identifier.
     */
    bundleIdentifier?: string;
    /**
     * iTunes App ID.
     */
    itunesAppId?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceIosDetails`.
     */
    kind?: string;
    /**
     * Indicates that this instance is the default for new installations on iPad devices.
     */
    preferredForIpad?: boolean;
    /**
     * Indicates that this instance is the default for new installations on iPhone devices.
     */
    preferredForIphone?: boolean;
    /**
     * Flag to indicate if this instance supports iPad.
     */
    supportIpad?: boolean;
    /**
     * Flag to indicate if this instance supports iPhone.
     */
    supportIphone?: boolean;
}
