import { SpeakeasyBase } from "../../../internal/utils";
import { Attribution } from "./attribution";
import { Dimensions } from "./dimensions";
import { LocationAssociation } from "./locationassociation";
import { MediaInsights } from "./mediainsights";
import { MediaItemDataRef } from "./mediaitemdataref";
/**
 * The format of this media item. Must be set when the media item is created, and is read-only on all other requests. Cannot be updated.
 */
export declare enum MediaItemMediaFormatEnum {
    MediaFormatUnspecified = "MEDIA_FORMAT_UNSPECIFIED",
    Photo = "PHOTO",
    Video = "VIDEO"
}
/**
 * A single media item.
 */
export declare class MediaItem extends SpeakeasyBase {
    /**
     * Attribution information for customer media items, such as the contributor's name and profile picture.
     */
    attribution?: Attribution;
    /**
     * Output only. Creation time of this media item.
     */
    createTime?: string;
    /**
     * Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem.
     */
    dataRef?: MediaItemDataRef;
    /**
     * Description for this media item. Descriptions cannot be modified through the Google My Business API, but can be set when creating a new media item that is not a cover photo.
     */
    description?: string;
    /**
     * Dimensions of the media item.
     */
    dimensions?: Dimensions;
    /**
     * Output only. Google-hosted URL for this media item. This URL is not static since it may change over time. For video this will be a preview image with an overlaid play icon.
     */
    googleUrl?: string;
    /**
     * Insights and statistics for the media item.
     */
    insights?: MediaInsights;
    /**
     * How the media item is associated with its location.
     */
    locationAssociation?: LocationAssociation;
    /**
     * The format of this media item. Must be set when the media item is created, and is read-only on all other requests. Cannot be updated.
     */
    mediaFormat?: MediaItemMediaFormatEnum;
    /**
     * The resource name for this media item. `accounts/{account_id}/locations/{location_id}/media/{media_key}`
     */
    name?: string;
    /**
     * A publicly accessible URL where the media item can be retrieved from. When creating one of this or data_ref must be set to specify the source of the media item. If `source_url` was used when creating a media item, it will be populated with that source URL when the media item is retrieved. This field cannot be updated.
     */
    sourceUrl?: string;
    /**
     * Output only. Where provided, the URL of a thumbnail image for this media item.
     */
    thumbnailUrl?: string;
}
