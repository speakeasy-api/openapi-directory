import { SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";
import { Location } from "./location";
import { Version } from "./version";
/**
 * Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages.
 */
export declare enum PackageOccurrenceArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    X86 = "X86",
    X64 = "X64"
}
/**
 * Details on how a particular software package was installed on a system.
 */
export declare class PackageOccurrence extends SpeakeasyBase {
    /**
     * Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages.
     */
    architecture?: PackageOccurrenceArchitectureEnum;
    /**
     * Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages.
     */
    cpeUri?: string;
    /**
     * License information.
     */
    license?: License;
    /**
     * All of the places within the filesystem versions of this package have been found.
     */
    location?: Location[];
    /**
     * Required. Output only. The name of the installed package.
     */
    name?: string;
    /**
     * Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).
     */
    packageType?: string;
    /**
     * Version contains structured information about the version of a package.
     */
    version?: Version;
}
