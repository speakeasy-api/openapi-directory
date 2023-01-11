import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrackDataRequestOnlyForUploadingForProUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=Only for uploading, for PRO users" })
  onlyForUploadingForPROUsers: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class TrackDataRequestOnlyForUploading extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=Only for uploading" })
  onlyForUploading: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}

export enum TrackDataRequestTrackEmbeddableByEnum {
    All = "all",
    Me = "me",
    None = "none"
}

export enum TrackDataRequestTrackLicenseEnum {
    NoRightsReserved = "no-rights-reserved",
    AllRightsReserved = "all-rights-reserved",
    CcBy = "cc-by",
    CcByNc = "cc-by-nc",
    CcByNd = "cc-by-nd",
    CcBySa = "cc-by-sa",
    CcByNcNd = "cc-by-nc-nd",
    CcByNcSa = "cc-by-nc-sa"
}

export enum TrackDataRequestTrackSharingEnum {
    Public = "public",
    Private = "private"
}


export class TrackDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  trackArtworkData?: TrackDataRequestOnlyForUploadingForProUsers;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  trackAssetData?: TrackDataRequestOnlyForUploading;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[commentable]" })
  trackCommentable?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[description]" })
  trackDescription?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[downloadable]" })
  trackDownloadable?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[embeddable_by]" })
  trackEmbeddableBy?: TrackDataRequestTrackEmbeddableByEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[genre]" })
  trackGenre?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[isrc]" })
  trackIsrc?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[label_name]" })
  trackLabelName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[license]" })
  trackLicense?: TrackDataRequestTrackLicenseEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[permalink]" })
  trackPermalink?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[purchase_url]" })
  trackPurchaseUrl?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[release]" })
  trackRelease?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[release_date]" })
  trackReleaseDate?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[sharing]" })
  trackSharing?: TrackDataRequestTrackSharingEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[streamable]" })
  trackStreamable?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[tag_list]" })
  trackTagList?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=track[title]" })
  trackTitle?: string;
}
