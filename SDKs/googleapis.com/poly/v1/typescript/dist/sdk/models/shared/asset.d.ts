import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
import { Format } from "./format";
import { PresentationParams } from "./presentationparams";
import { RemixInfo } from "./remixinfo";
/**
 * The license under which the author has made the asset available for use, if any.
 */
export declare enum AssetLicenseEnum {
    Unknown = "UNKNOWN",
    CreativeCommonsBy = "CREATIVE_COMMONS_BY",
    AllRightsReserved = "ALL_RIGHTS_RESERVED"
}
/**
 * The visibility of the asset and who can access it.
 */
export declare enum AssetVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED",
    Private = "PRIVATE",
    Unlisted = "UNLISTED",
    Public = "PUBLIC"
}
/**
 * Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.
 */
export declare class Asset extends SpeakeasyBase {
    /**
     * The author's publicly visible name. Use this name when giving credit to the author. For more information, see [Licensing](/poly/discover/licensing).
     */
    authorName?: string;
    /**
     * For published assets, the time when the asset was published. For unpublished assets, the time when the asset was created.
     */
    createTime?: string;
    /**
     * The human-readable description, set by the asset's author.
     */
    description?: string;
    /**
     * The human-readable name, set by the asset's author.
     */
    displayName?: string;
    /**
     * A list of Formats where each format describes one representation of the asset.
     */
    formats?: Format[];
    /**
     * Whether this asset has been curated by the Poly team.
     */
    isCurated?: boolean;
    /**
     * The license under which the author has made the asset available for use, if any.
     */
    license?: AssetLicenseEnum;
    /**
     * Application-defined opaque metadata for this asset. This field is only returned when querying for the signed-in user's own assets, not for public assets. This string is limited to 1K chars. It is up to the creator of the asset to define the format for this string (for example, JSON).
     */
    metadata?: string;
    /**
     * The unique identifier for the asset in the form: `assets/{ASSET_ID}`.
     */
    name?: string;
    /**
     * Hints for displaying the asset, based on information available when the asset was uploaded.
     */
    presentationParams?: PresentationParams;
    /**
     * Info about the sources of this asset (i.e. assets that were remixed to create this asset).
     */
    remixInfo?: RemixInfo;
    /**
     * Represents a file in Poly, which can be a root, resource, or thumbnail file.
     */
    thumbnail?: File;
    /**
     * The time when the asset was last modified. For published assets, whose contents are immutable, the update time changes only when metadata properties, such as visibility, are updated.
     */
    updateTime?: string;
    /**
     * The visibility of the asset and who can access it.
     */
    visibility?: AssetVisibilityEnum;
}
