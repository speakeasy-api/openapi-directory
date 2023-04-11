import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The feature which had a change in restriction policy.
 */
export declare enum RestrictionChangeFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    SharingOutsideDomain = "SHARING_OUTSIDE_DOMAIN",
    DirectSharing = "DIRECT_SHARING",
    ItemDuplication = "ITEM_DUPLICATION",
    DriveFileStream = "DRIVE_FILE_STREAM",
    FileOrganizerCanShareFolders = "FILE_ORGANIZER_CAN_SHARE_FOLDERS"
}
/**
 * The restriction in place after the change.
 */
export declare enum RestrictionChangeNewRestrictionEnum {
    RestrictionUnspecified = "RESTRICTION_UNSPECIFIED",
    Unrestricted = "UNRESTRICTED",
    FullyRestricted = "FULLY_RESTRICTED"
}
/**
 * Information about restriction policy changes to a feature.
 */
export declare class RestrictionChange extends SpeakeasyBase {
    /**
     * The feature which had a change in restriction policy.
     */
    feature?: RestrictionChangeFeatureEnum;
    /**
     * The restriction in place after the change.
     */
    newRestriction?: RestrictionChangeNewRestrictionEnum;
}
