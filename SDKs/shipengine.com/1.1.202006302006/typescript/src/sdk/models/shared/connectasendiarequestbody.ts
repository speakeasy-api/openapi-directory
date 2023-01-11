import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectAsendiaRequestBody
/** 
 * An Asendia account information request body
**/
export class ConnectAsendiaRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=ftp_password" })
  ftpPassword: string;

  @SpeakeasyMetadata({ data: "json, name=ftp_username" })
  ftpUsername: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;
}
