import { SpeakeasyBase } from "../../../internal/utils";
import { NpmPackage } from "./npmpackage";
/**
 * The response from listing npm packages.
 */
export declare class ListNpmPackagesResponse extends SpeakeasyBase {
    /**
     * The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return.
     */
    nextPageToken?: string;
    /**
     * The npm packages returned.
     */
    npmPackages?: NpmPackage[];
}
