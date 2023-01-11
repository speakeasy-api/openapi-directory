import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContributorProfileSocialMedia
/** 
 * Contributor profile social media links
**/
export class ContributorProfileSocialMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facebook" })
  facebook?: string;

  @SpeakeasyMetadata({ data: "json, name=google_plus" })
  googlePlus?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedin" })
  linkedin?: string;

  @SpeakeasyMetadata({ data: "json, name=pinterest" })
  pinterest?: string;

  @SpeakeasyMetadata({ data: "json, name=tumblr" })
  tumblr?: string;

  @SpeakeasyMetadata({ data: "json, name=twitter" })
  twitter?: string;
}
