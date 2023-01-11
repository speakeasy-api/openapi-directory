import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorUnauthorizedMissingCredentials
/** 
 * Missing or Invalid Credentials
**/
export class ErrorUnauthorizedMissingCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
