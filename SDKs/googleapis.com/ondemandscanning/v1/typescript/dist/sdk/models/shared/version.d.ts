import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Distinguishes between sentinel MIN/MAX versions and normal versions.
 */
export declare enum VersionKindEnum {
    VersionKindUnspecified = "VERSION_KIND_UNSPECIFIED",
    Normal = "NORMAL",
    Minimum = "MINIMUM",
    Maximum = "MAXIMUM"
}
/**
 * Version contains structured information about the version of a package.
 */
export declare class Version extends SpeakeasyBase {
    /**
     * Used to correct mistakes in the version numbering scheme.
     */
    epoch?: number;
    /**
     * Human readable version string. This string is of the form :- and is only set when kind is NORMAL.
     */
    fullName?: string;
    /**
     * Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range.
     */
    inclusive?: boolean;
    /**
     * Required. Distinguishes between sentinel MIN/MAX versions and normal versions.
     */
    kind?: VersionKindEnum;
    /**
     * Required only when version kind is NORMAL. The main part of the version name.
     */
    name?: string;
    /**
     * The iteration of the package build from the above version.
     */
    revision?: string;
}
