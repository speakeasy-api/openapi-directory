import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Packages are named collections of versions.
 */
export declare class Package extends SpeakeasyBase {
    /**
     * The time when the package was created.
     */
    createTime?: string;
    /**
     * The display name of the package.
     */
    displayName?: string;
    /**
     * The name of the package, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1". If the package ID part contains slashes, the slashes are escaped.
     */
    name?: string;
    /**
     * The time when the package was last updated. This includes publishing a new version of the package.
     */
    updateTime?: string;
}
