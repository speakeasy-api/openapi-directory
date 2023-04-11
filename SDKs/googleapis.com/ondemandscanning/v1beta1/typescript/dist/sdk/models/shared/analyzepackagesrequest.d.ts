import { SpeakeasyBase } from "../../../internal/utils";
import { PackageData } from "./packagedata";
/**
 * AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
 */
export declare class AnalyzePackagesRequest extends SpeakeasyBase {
    /**
     * The packages to analyze.
     */
    packages?: PackageData[];
    /**
     * Required. The resource URI of the container image being scanned.
     */
    resourceUri?: string;
}
