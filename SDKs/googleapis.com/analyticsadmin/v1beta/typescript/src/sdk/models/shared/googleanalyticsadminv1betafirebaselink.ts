import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1betaFirebaseLink
/** 
 * A link between a GA4 property and a Firebase project.
**/
export class GoogleAnalyticsAdminV1betaFirebaseLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}


// GoogleAnalyticsAdminV1betaFirebaseLinkInput
/** 
 * A link between a GA4 property and a Firebase project.
**/
export class GoogleAnalyticsAdminV1betaFirebaseLinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
