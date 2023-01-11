import { SpeakeasyBase } from "../../../internal/utils";
export declare class TrackDataRequestOnlyForUploadingForProUsers extends SpeakeasyBase {
    onlyForUploadingForPROUsers: string;
    content: Uint8Array;
}
export declare class TrackDataRequestOnlyForUploading extends SpeakeasyBase {
    onlyForUploading: string;
    content: Uint8Array;
}
export declare enum TrackDataRequestTrackEmbeddableByEnum {
    All = "all",
    Me = "me",
    None = "none"
}
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
export declare class TrackDataRequest extends SpeakeasyBase {
    trackArtworkData?: TrackDataRequestOnlyForUploadingForProUsers;
    trackAssetData?: TrackDataRequestOnlyForUploading;
    trackCommentable?: boolean;
    trackDescription?: string;
    trackDownloadable?: boolean;
    trackEmbeddableBy?: TrackDataRequestTrackEmbeddableByEnum;
    trackGenre?: string;
    trackIsrc?: string;
    trackLabelName?: string;
    trackLicense?: TrackDataRequestTrackLicenseEnum;
    trackPermalink?: string;
    trackPurchaseUrl?: string;
    trackRelease?: string;
    trackReleaseDate?: string;
    trackSharing?: TrackDataRequestTrackSharingEnum;
    trackStreamable?: boolean;
    trackTagList?: string;
    trackTitle?: string;
}
