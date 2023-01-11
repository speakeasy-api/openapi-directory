import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// User
/** 
 * SoundCloud User object
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discogs_name" })
  discogsName?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=followers_count" })
  followersCount?: number;

  @SpeakeasyMetadata({ data: "json, name=followings_count" })
  followingsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=full_name" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=myspace_name" })
  myspaceName?: string;

  @SpeakeasyMetadata({ data: "json, name=permalink" })
  permalink?: string;

  @SpeakeasyMetadata({ data: "json, name=permalink_url" })
  permalinkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: string;

  @SpeakeasyMetadata({ data: "json, name=playlist_count" })
  playlistCount?: number;

  @SpeakeasyMetadata({ data: "json, name=public_favorites_count" })
  publicFavoritesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reposts_count" })
  repostsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=subscriptions" })
  subscriptions?: any;

  @SpeakeasyMetadata({ data: "json, name=track_count" })
  trackCount?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;

  @SpeakeasyMetadata({ data: "json, name=website_title" })
  websiteTitle?: string;
}
