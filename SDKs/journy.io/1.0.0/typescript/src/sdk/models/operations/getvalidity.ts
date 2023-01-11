import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetValidity200ApplicationJsonData
/** 
 * Validation of API Key
**/
export class GetValidity200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: string[];
}


export class GetValidity200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetValidity200ApplicationJson
/** 
 * The basic response containing the unique ID of the request and the response status
**/
export class GetValidity200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetValidity200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetValidity200ApplicationJsonMeta;
}


export class GetValidity401ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetValidity401ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class GetValidity401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetValidity401ApplicationJsonMeta;
}


export class GetValidity403ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetValidity403ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class GetValidity403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetValidity403ApplicationJsonMeta;
}


export class GetValidity429ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetValidity429ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class GetValidity429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetValidity429ApplicationJsonMeta;
}


export class GetValidity500ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetValidity500ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class GetValidity500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetValidity500ApplicationJsonMeta;
}


export class GetValidityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getValidity200ApplicationJSONObject?: GetValidity200ApplicationJson;

  @SpeakeasyMetadata()
  getValidity401ApplicationJSONObject?: GetValidity401ApplicationJson;

  @SpeakeasyMetadata()
  getValidity403ApplicationJSONObject?: GetValidity403ApplicationJson;

  @SpeakeasyMetadata()
  getValidity429ApplicationJSONObject?: GetValidity429ApplicationJson;

  @SpeakeasyMetadata()
  getValidity500ApplicationJSONObject?: GetValidity500ApplicationJson;
}
