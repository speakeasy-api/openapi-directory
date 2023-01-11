import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TrackMetadataRequestTrackEmbeddableByEnum {
    All = "all",
    Me = "me",
    None = "none"
}

export enum TrackMetadataRequestTrackLicenseEnum {
    NoRightsReserved = "no-rights-reserved",
    AllRightsReserved = "all-rights-reserved",
    CcBy = "cc-by",
    CcByNc = "cc-by-nc",
    CcByNd = "cc-by-nd",
    CcBySa = "cc-by-sa",
    CcByNcNd = "cc-by-nc-nd",
    CcByNcSa = "cc-by-nc-sa"
}

export enum TrackMetadataRequestTrackSharingEnum {
    Public = "public",
    Private = "private"
}


export class TrackMetadataRequestTrack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commentable" })
  commentable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadable" })
  downloadable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embeddable_by" })
  embeddableBy?: TrackMetadataRequestTrackEmbeddableByEnum;

  @SpeakeasyMetadata({ data: "json, name=genre" })
  genre?: string;

  @SpeakeasyMetadata({ data: "json, name=isrc" })
  isrc?: string;

  @SpeakeasyMetadata({ data: "json, name=label_name" })
  labelName?: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: TrackMetadataRequestTrackLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=permalink" })
  permalink?: string;

  @SpeakeasyMetadata({ data: "json, name=purchase_url" })
  purchaseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=release" })
  release?: string;

  @SpeakeasyMetadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=sharing" })
  sharing?: TrackMetadataRequestTrackSharingEnum;

  @SpeakeasyMetadata({ data: "json, name=streamable" })
  streamable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tag_list" })
  tagList?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class TrackMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: TrackMetadataRequestTrack;
}
