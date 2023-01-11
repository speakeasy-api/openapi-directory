import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectFirstmileRequestBody
/** 
 * A First Mile account information request body
**/
export class ConnectFirstmileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mailer_id" })
  mailerId: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=profile_name" })
  profileName?: string;
}
