import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TrackMetadataRequestTrackEmbeddableByEnum {
    All = "all",
    Me = "me",
    None = "none"
}
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
    embeddableBy?: TrackMetadataRequestTrackEmbeddableByEnum;
    genre?: string;
    isrc?: string;
    labelName?: string;
    license?: TrackMetadataRequestTrackLicenseEnum;
    permalink?: string;
    purchaseUrl?: string;
    release?: string;
    releaseDate?: string;
    sharing?: TrackMetadataRequestTrackSharingEnum;
    streamable?: boolean;
    tagList?: string;
    title?: string;
}
export declare class TrackMetadataRequest extends SpeakeasyBase {
    track?: TrackMetadataRequestTrack;
}
