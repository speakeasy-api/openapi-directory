import { SpeakeasyBase } from "../../../internal/utils";
/**
 * By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead.
 */
export declare enum AptSettingsTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Dist = "DIST",
    Upgrade = "UPGRADE"
}
/**
 * Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.
 */
export declare class AptSettings extends SpeakeasyBase {
    /**
     * List of packages to exclude from update. These packages will be excluded
     */
    excludes?: string[];
    /**
     * An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field cannot be specified with any other patch configuration fields.
     */
    exclusivePackages?: string[];
    /**
     * By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead.
     */
    type?: AptSettingsTypeEnum;
}
