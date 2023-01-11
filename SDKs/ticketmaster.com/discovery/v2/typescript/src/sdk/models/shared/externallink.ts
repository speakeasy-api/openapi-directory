import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExternalLink
/** 
 * ExternalLink
**/
export class ExternalLink extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  url?: string;
}
