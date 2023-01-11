import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContributorProfileSocialMedia } from "./contributorprofilesocialmedia";



// ContributorProfile
/** 
 * Contributor profile data
**/
export class ContributorProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=about" })
  about?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_type" })
  contributorType?: string[];

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=equipment" })
  equipment?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=portfolio_url" })
  portfolioUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=social_media" })
  socialMedia?: ContributorProfileSocialMedia;

  @SpeakeasyMetadata({ data: "json, name=styles" })
  styles?: string[];

  @SpeakeasyMetadata({ data: "json, name=subjects" })
  subjects?: string[];

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
