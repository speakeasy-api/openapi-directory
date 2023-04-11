import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an operating system that can be targeted by ads.
 */
export declare class OperatingSystem extends SpeakeasyBase {
    /**
     * DART ID of this operating system. This is the ID used for targeting.
     */
    dartId?: string;
    /**
     * Whether this operating system is for desktop.
     */
    desktop?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem".
     */
    kind?: string;
    /**
     * Whether this operating system is for mobile.
     */
    mobile?: boolean;
    /**
     * Name of this operating system.
     */
    name?: string;
}
