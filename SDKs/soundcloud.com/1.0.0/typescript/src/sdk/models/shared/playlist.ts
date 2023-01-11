import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetaUser } from "./metauser";
import { Track } from "./track";



// Playlist
/** 
 * Soundcloud Playlist Object
**/
export class Playlist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artwork_url" })
  artworkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadable" })
  downloadable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=ean" })
  ean?: string;

  @SpeakeasyMetadata({ data: "json, name=embeddable_by" })
  embeddableBy?: string;

  @SpeakeasyMetadata({ data: "json, name=genre" })
  genre?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: MetaUser;

  @SpeakeasyMetadata({ data: "json, name=label_id" })
  labelId?: number;

  @SpeakeasyMetadata({ data: "json, name=label_name" })
  labelName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: string;

  @SpeakeasyMetadata({ data: "json, name=likes_count" })
  likesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=permalink" })
  permalink?: string;

  @SpeakeasyMetadata({ data: "json, name=permalink_url" })
  permalinkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=playlist_type" })
  playlistType?: string;

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

  @SpeakeasyMetadata({ data: "json, name=sharing" })
  sharing?: string;

  @SpeakeasyMetadata({ data: "json, name=streamable" })
  streamable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tag_list" })
  tagList?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=track_count" })
  trackCount?: number;

  @SpeakeasyMetadata({ data: "json, name=tracks", elemType: Track })
  tracks?: Track[];

  @SpeakeasyMetadata({ data: "json, name=tracks_uri" })
  tracksUri?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: MetaUser;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}
