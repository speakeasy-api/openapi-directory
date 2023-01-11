import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SocialMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facebook_url" })
  facebookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedIn_url" })
  linkedInUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=twitter_url" })
  twitterUrl?: string;
}
