import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetaUser } from "./metauser";


export enum TrackAccessEnum {
    Playable = "playable",
    Preview = "preview",
    Blocked = "blocked",
    Null = "null"
}


// Track
/** 
 * Soundcloud Track object.
**/
export class Track extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: TrackAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=artwork_url" })
  artworkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=available_country_codes" })
  availableCountryCodes?: string;

  @SpeakeasyMetadata({ data: "json, name=bpm" })
  bpm?: number;

  @SpeakeasyMetadata({ data: "json, name=comment_count" })
  commentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=commentable" })
  commentable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=download_count" })
  downloadCount?: number;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadable" })
  downloadable?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=embeddable_by" })
  embeddableBy?: string;

  @SpeakeasyMetadata({ data: "json, name=favoritings_count" })
  favoritingsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=genre" })
  genre?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isrc" })
  isrc?: string;

  @SpeakeasyMetadata({ data: "json, name=key_signature" })
  keySignature?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=label_name" })
  labelName?: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: string;

  @SpeakeasyMetadata({ data: "json, name=permalink_url" })
  permalinkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=playback_count" })
  playbackCount?: number;

  @SpeakeasyMetadata({ data: "json, name=purchase_title" })
  purchaseTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=purchase_url" })
  purchaseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=release" })
  release?: string;

  @SpeakeasyMetadata({ data: "json, name=release_day" })
  releaseDay?: number;

  @SpeakeasyMetadata({ data: "json, name=release_month" })
  releaseMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=release_year" })
  releaseYear?: number;

  @SpeakeasyMetadata({ data: "json, name=reposts_count" })
  repostsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=secret_uri" })
  secretUri?: string;

  @SpeakeasyMetadata({ data: "json, name=sharing" })
  sharing?: string;

  @SpeakeasyMetadata({ data: "json, name=stream_url" })
  streamUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=streamable" })
  streamable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tag_list" })
  tagList?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: MetaUser;

  @SpeakeasyMetadata({ data: "json, name=user_favorite" })
  userFavorite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_playback_count" })
  userPlaybackCount?: number;

  @SpeakeasyMetadata({ data: "json, name=waveform_url" })
  waveformUrl?: string;
}
