import { SpeakeasyBase } from "../../../internal/utils";
import { GrafeasV1FileLocation } from "./grafeasv1filelocation";
import { Version } from "./version";
/**
 * Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available.
 */
export declare enum PackageIssueEffectiveSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Minimal = "MINIMAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}
/**
 * A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
 */
export declare class PackageIssue extends SpeakeasyBase {
    /**
     * Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in.
     */
    affectedCpeUri?: string;
    /**
     * Required. The package this vulnerability was found in.
     */
    affectedPackage?: string;
    /**
     * Version contains structured information about the version of a package.
     */
    affectedVersion?: Version;
    /**
     * Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available.
     */
    effectiveSeverity?: PackageIssueEffectiveSeverityEnum;
    /**
     * The location at which this package was found.
     */
    fileLocation?: GrafeasV1FileLocation[];
    /**
     * Output only. Whether a fix is available for this package.
     */
    fixAvailable?: boolean;
    /**
     * The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected_cpe_uri.
     */
    fixedCpeUri?: string;
    /**
     * The package this vulnerability was fixed in. It is possible for this to be different from the affected_package.
     */
    fixedPackage?: string;
    /**
     * Version contains structured information about the version of a package.
     */
    fixedVersion?: Version;
    /**
     * The type of package (e.g. OS, MAVEN, GO).
     */
    packageType?: string;
}
