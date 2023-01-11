import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoEditorTokenResponseToken
/** 
 * The user access token
**/
export class VideoEditorTokenResponseToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// VideoEditorTokenResponse
/** 
 * The response that includes the user access token and its expiration date
**/
export class VideoEditorTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token: VideoEditorTokenResponseToken;
}
