import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InAppProductListing
/** 
 * The language of the localized data, as defined by BCP 47. i.e.: "en-US", "en-GB".
**/
export class InAppProductListing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
