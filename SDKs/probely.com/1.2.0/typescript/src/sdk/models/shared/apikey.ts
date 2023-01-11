import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiKeyInput
/** 
 * API Key object
**/
export class ApiKeyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// ApiKey
/** 
 * API Key object
**/
export class ApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
