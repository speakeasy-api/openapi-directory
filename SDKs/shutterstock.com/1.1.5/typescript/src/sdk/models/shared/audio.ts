import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Album } from "./album";
import { Artist } from "./artist";
import { AudioAssets } from "./audioassets";
import { Contributor } from "./contributor";
import { ModelRelease } from "./modelrelease";



// Audio
/** 
 * Audio metadata
**/
export class Audio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_date" })
  addedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=affiliate_url" })
  affiliateUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=album" })
  album?: Album;

  @SpeakeasyMetadata({ data: "json, name=artists", elemType: Artist })
  artists?: Artist[];

  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets?: AudioAssets;

  @SpeakeasyMetadata({ data: "json, name=bpm" })
  bpm?: number;

  @SpeakeasyMetadata({ data: "json, name=contributor" })
  contributor: Contributor;

  @SpeakeasyMetadata({ data: "json, name=deleted_time" })
  deletedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=genres" })
  genres?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=instruments" })
  instruments?: string[];

  @SpeakeasyMetadata({ data: "json, name=is_adult" })
  isAdult?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_instrumental" })
  isInstrumental?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isrc" })
  isrc?: string;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=lyrics" })
  lyrics?: string;

  @SpeakeasyMetadata({ data: "json, name=media_type" })
  mediaType: string;

  @SpeakeasyMetadata({ data: "json, name=model_releases", elemType: ModelRelease })
  modelReleases?: ModelRelease[];

  @SpeakeasyMetadata({ data: "json, name=moods" })
  moods?: string[];

  @SpeakeasyMetadata({ data: "json, name=published_time" })
  publishedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=recording_version" })
  recordingVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=releases" })
  releases?: string[];

  @SpeakeasyMetadata({ data: "json, name=similar_artists", elemType: Artist })
  similarArtists?: Artist[];

  @SpeakeasyMetadata({ data: "json, name=submitted_time" })
  submittedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_time" })
  updatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=vocal_description" })
  vocalDescription?: string;
}
