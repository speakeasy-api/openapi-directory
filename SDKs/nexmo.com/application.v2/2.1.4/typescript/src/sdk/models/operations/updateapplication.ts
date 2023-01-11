import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateApplication200ApplicationJsonKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=private_key" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;
}


// UpdateApplication200ApplicationJsonPrivacy
/** 
 * Application privacy config
**/
export class UpdateApplication200ApplicationJsonPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=improve_ai" })
  improveAi?: boolean;
}


export class UpdateApplication200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: shared.Capabilities;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: UpdateApplication200ApplicationJsonKeys;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: UpdateApplication200ApplicationJsonPrivacy;
}


export class UpdateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApplicationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class UpdateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateApplication200ApplicationJSONObject?: UpdateApplication200ApplicationJson;

  @SpeakeasyMetadata()
  updateApplication400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateApplication401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateApplication404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateApplication405ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateApplication406ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateApplication415ApplicationJSONAny?: any;
}
