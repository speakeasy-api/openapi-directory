import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizeResponse
/** 
 * Response to Authorize requests
**/
export class AuthorizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body: string;
}
