import { SpeakeasyBase } from "../../../internal/utils";
import { Binary } from "./binary";
import { FileLocation } from "./filelocation";
import { LanguagePackageDependency } from "./languagepackagedependency";
import { Maintainer } from "./maintainer";
/**
 * The type of package: os, maven, go, etc.
 */
export declare enum PackageDataPackageTypeEnum {
    PackageTypeUnspecified = "PACKAGE_TYPE_UNSPECIFIED",
    Os = "OS",
    Maven = "MAVEN",
    Go = "GO",
    GoStdlib = "GO_STDLIB",
    Pypi = "PYPI",
    Npm = "NPM"
}
export declare class PackageData extends SpeakeasyBase {
    /**
     * The architecture of the package.
     */
    architecture?: string;
    binary?: Binary;
    /**
     * The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) in which the vulnerability may manifest. Examples include distro or storage location for vulnerable jar.
     */
    cpeUri?: string;
    /**
     * The dependency chain between this package and the user's artifact. List in order from the customer's package under review first, to the current package last. Inclusive of the original package and the current package.
     */
    dependencyChain?: LanguagePackageDependency[];
    /**
     * The path to the jar file / go binary file.
     */
    fileLocation?: FileLocation[];
    /**
     * HashDigest stores the SHA512 hash digest of the jar file if the package is of type Maven. This field will be unset for non Maven packages.
     */
    hashDigest?: string;
    maintainer?: Maintainer;
    /**
     * The OS affected by a vulnerability Used to generate the cpe_uri for OS packages
     */
    os?: string;
    /**
     * The version of the OS Used to generate the cpe_uri for OS packages
     */
    osVersion?: string;
    /**
     * The package being analysed for vulnerabilities
     */
    package?: string;
    /**
     * The type of package: os, maven, go, etc.
     */
    packageType?: PackageDataPackageTypeEnum;
    /**
     * CVEs that this package is no longer vulnerable to go/drydock-dd-custom-binary-scanning
     */
    patchedCve?: string[];
    unused?: string;
    /**
     * The version of the package being analysed
     */
    version?: string;
}
