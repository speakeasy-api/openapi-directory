import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BasicAuth
/** 
 * Basic authentication credentials
**/
export class BasicAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
