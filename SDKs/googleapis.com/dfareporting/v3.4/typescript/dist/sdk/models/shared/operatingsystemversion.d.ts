import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystem } from "./operatingsystem";
/**
 * Contains information about a particular version of an operating system that can be targeted by ads.
 */
export declare class OperatingSystemVersion extends SpeakeasyBase {
    /**
     * ID of this operating system version.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion".
     */
    kind?: string;
    /**
     * Major version (leftmost number) of this operating system version.
     */
    majorVersion?: string;
    /**
     * Minor version (number after the first dot) of this operating system version.
     */
    minorVersion?: string;
    /**
     * Name of this operating system version.
     */
    name?: string;
    /**
     * Contains information about an operating system that can be targeted by ads.
     */
    operatingSystem?: OperatingSystem;
}
