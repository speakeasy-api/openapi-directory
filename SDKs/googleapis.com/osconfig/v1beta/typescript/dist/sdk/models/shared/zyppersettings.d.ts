import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.
 */
export declare class ZypperSettings extends SpeakeasyBase {
    /**
     * Install only patches with these categories. Common categories include security, recommended, and feature.
     */
    categories?: string[];
    /**
     * List of patches to exclude from update.
     */
    excludes?: string[];
    /**
     * An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command. This field must not be used with any other patch configuration fields.
     */
    exclusivePatches?: string[];
    /**
     * Install only patches with these severities. Common severities include critical, important, moderate, and low.
     */
    severities?: string[];
    /**
     * Adds the `--with-optional` flag to `zypper patch`.
     */
    withOptional?: boolean;
    /**
     * Adds the `--with-update` flag, to `zypper patch`.
     */
    withUpdate?: boolean;
}
