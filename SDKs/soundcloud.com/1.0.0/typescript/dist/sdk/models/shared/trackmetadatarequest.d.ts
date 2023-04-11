import { SpeakeasyBase } from "../../../internal/utils";
/**
 * who can embed this track "all", "me", or "none"
 */
export declare enum TrackMetadataRequestTrackEmbeddableByEnum {
    All = "all",
    Me = "me",
    None = "none"
}
/**
 * Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa
 */
export declare enum TrackMetadataRequestTrackLicenseEnum {
    NoRightsReserved = "no-rights-reserved",
    AllRightsReserved = "all-rights-reserved",
    CcBy = "cc-by",
    CcByNc = "cc-by-nc",
    CcByNd = "cc-by-nd",
    CcBySa = "cc-by-sa",
    CcByNcNd = "cc-by-nc-nd",
    CcByNcSa = "cc-by-nc-sa"
}
export declare enum TrackMetadataRequestTrackSharingEnum {
    Public = "public",
    Private = "private"
}
export declare class TrackMetadataRequestTrack extends SpeakeasyBase {
    commentable?: boolean;
    description?: string;
    downloadable?: boolean;
    /**
     * who can embed this track "all", "me", or "none"
     */
    embeddableBy?: TrackMetadataRequestTrackEmbeddableByEnum;
    genre?: string;
    isrc?: string;
    labelName?: string;
    /**
     * Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa
     */
    license?: TrackMetadataRequestTrackLicenseEnum;
    permalink?: string;
    purchaseUrl?: string;
    release?: string;
    /**
     * string, formatted as yyyy-mm-dd, representing release date
     */
    releaseDate?: string;
    sharing?: TrackMetadataRequestTrackSharingEnum;
    streamable?: boolean;
    /**
     * The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.
     */
    tagList?: string;
    title?: string;
}
/**
 * Track payload
 */
export declare class TrackMetadataRequest extends SpeakeasyBase {
    track?: TrackMetadataRequestTrack;
}
