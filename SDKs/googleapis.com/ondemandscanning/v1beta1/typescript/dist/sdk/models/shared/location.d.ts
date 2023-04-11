import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.
 */
export declare class Location extends SpeakeasyBase {
    /**
     * Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/)
     */
    cpeUri?: string;
    /**
     * The path from which we gathered that this package/version is installed.
     */
    path?: string;
    /**
     * Version contains structured information about the version of a package.
     */
    version?: Version;
}
