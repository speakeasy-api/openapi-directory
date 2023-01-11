import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Reporter
/** 
 * Reporting user
**/
export class Reporter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
