import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Tags point to a version and represent an alternative name that can be used to access the version.
 */
export declare class Tag extends SpeakeasyBase {
    /**
     * The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded.
     */
    name?: string;
    /**
     * The name of the version the tag refers to, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/sha256:5243811" If the package or version ID parts contain slashes, the slashes are escaped.
     */
    version?: string;
}
