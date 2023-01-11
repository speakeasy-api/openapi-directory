import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Cookie
/** 
 * Cookie object
**/
export class Cookie extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
