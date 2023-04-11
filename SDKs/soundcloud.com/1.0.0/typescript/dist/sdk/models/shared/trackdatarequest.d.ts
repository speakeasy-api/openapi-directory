import { SpeakeasyBase } from "../../../internal/utils";
export declare class TrackDataRequestOnlyForUploadingForPROUsers extends SpeakeasyBase {
    onlyForUploadingForPROUsers: string;
    content: Uint8Array;
}
export declare class TrackDataRequestOnlyForUploading extends SpeakeasyBase {
    onlyForUploading: string;
    content: Uint8Array;
}
/**
 * who can embed this track "all", "me", or "none"
 */
export declare enum TrackDataRequestTrackEmbeddableByEnum {
    All = "all",
    Me = "me",
    None = "none"
}
/**
 * Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa
 */
export declare enum TrackDataRequestTrackLicenseEnum {
    NoRightsReserved = "no-rights-reserved",
    AllRightsReserved = "all-rights-reserved",
    CcBy = "cc-by",
    CcByNc = "cc-by-nc",
    CcByNd = "cc-by-nd",
    CcBySa = "cc-by-sa",
    CcByNcNd = "cc-by-nc-nd",
    CcByNcSa = "cc-by-nc-sa"
}
export declare enum TrackDataRequestTrackSharingEnum {
    Public = "public",
    Private = "private"
}
/**
 * Track payload
 */
export declare class TrackDataRequest extends SpeakeasyBase {
    trackArtworkData?: TrackDataRequestOnlyForUploadingForPROUsers;
    trackAssetData?: TrackDataRequestOnlyForUploading;
    trackCommentable?: boolean;
    trackDescription?: string;
    trackDownloadable?: boolean;
    /**
     * who can embed this track "all", "me", or "none"
     */
    trackEmbeddableBy?: TrackDataRequestTrackEmbeddableByEnum;
    trackGenre?: string;
    trackIsrc?: string;
    trackLabelName?: string;
    /**
     * Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa
     */
    trackLicense?: TrackDataRequestTrackLicenseEnum;
    trackPermalink?: string;
    trackPurchaseUrl?: string;
    trackRelease?: string;
    /**
     * string, formatted as yyyy-mm-dd, representing release date
     */
    trackReleaseDate?: string;
    trackSharing?: TrackDataRequestTrackSharingEnum;
    trackStreamable?: boolean;
    /**
     * The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.
     */
    trackTagList?: string;
    trackTitle?: string;
}
