import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type represents the release availability of the version
 */
export declare enum VersionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TypePreview = "TYPE_PREVIEW",
    TypeGeneralAvailability = "TYPE_GENERAL_AVAILABILITY"
}
/**
 * The Data Fusion version.
 */
export declare class Version extends SpeakeasyBase {
    /**
     * Represents a list of available feature names for a given version.
     */
    availableFeatures?: string[];
    /**
     * Whether this is currently the default version for Cloud Data Fusion
     */
    defaultVersion?: boolean;
    /**
     * Type represents the release availability of the version
     */
    type?: VersionTypeEnum;
    /**
     * The version number of the Data Fusion instance, such as '6.0.1.0'.
     */
    versionNumber?: string;
}
