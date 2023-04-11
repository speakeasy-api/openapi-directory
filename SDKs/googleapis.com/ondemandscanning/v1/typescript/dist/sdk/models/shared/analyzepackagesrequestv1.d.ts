import { SpeakeasyBase } from "../../../internal/utils";
import { PackageData } from "./packagedata";
/**
 * AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
 */
export declare class AnalyzePackagesRequestV1 extends SpeakeasyBase {
    /**
     * [DEPRECATED] Whether to include OSV data in the scan. For backwards compatibility reasons, this field can be neither removed nor renamed.
     */
    includeOsvData?: boolean;
    /**
     * The packages to analyze.
     */
    packages?: PackageData[];
    /**
     * Required. The resource URI of the container image being scanned.
     */
    resourceUri?: string;
}
