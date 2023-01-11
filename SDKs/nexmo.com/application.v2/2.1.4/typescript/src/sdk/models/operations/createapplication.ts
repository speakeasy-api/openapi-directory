import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateApplication201ApplicationJsonKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=private_key" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;
}


// CreateApplication201ApplicationJsonPrivacy
/** 
 * Application privacy config
**/
export class CreateApplication201ApplicationJsonPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=improve_ai" })
  improveAi?: boolean;
}


export class CreateApplication201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: shared.Capabilities;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: CreateApplication201ApplicationJsonKeys;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: CreateApplication201ApplicationJsonPrivacy;
}


export class CreateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createApplication201ApplicationJSONObject?: CreateApplication201ApplicationJson;

  @SpeakeasyMetadata()
  createApplication400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createApplication401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createApplication405ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createApplication406ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createApplication415ApplicationJSONAny?: any;
}
