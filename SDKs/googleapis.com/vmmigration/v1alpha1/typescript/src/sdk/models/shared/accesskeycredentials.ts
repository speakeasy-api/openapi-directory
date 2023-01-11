import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessKeyCredentials
/** 
 * Message describing AWS Credentials using access key id and secret.
**/
export class AccessKeyCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=secretAccessKey" })
  secretAccessKey?: string;
}
