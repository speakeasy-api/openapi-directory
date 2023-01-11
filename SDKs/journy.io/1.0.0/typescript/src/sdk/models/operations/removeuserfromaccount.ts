import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveUserFromAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// RemoveUserFromAccountRequestBody
/** 
 * The user being added/removed from the account
**/
export class RemoveUserFromAccountRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}


export class RemoveUserFromAccount201ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// RemoveUserFromAccount201ApplicationJson
/** 
 * The object was created
**/
export class RemoveUserFromAccount201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount201ApplicationJsonMeta;
}


// RemoveUserFromAccount400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class RemoveUserFromAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Record<string, string>;
}


// RemoveUserFromAccount400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class RemoveUserFromAccount400ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: RemoveUserFromAccount400ApplicationJsonErrorsParameters;
}


export class RemoveUserFromAccount400ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// RemoveUserFromAccount400ApplicationJson
/** 
 * Specify the fields and/ or parameters that had errors
**/
export class RemoveUserFromAccount400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: RemoveUserFromAccount400ApplicationJsonErrors;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount400ApplicationJsonMeta;
}


export class RemoveUserFromAccount401ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// RemoveUserFromAccount401ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class RemoveUserFromAccount401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount401ApplicationJsonMeta;
}


export class RemoveUserFromAccount403ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// RemoveUserFromAccount403ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class RemoveUserFromAccount403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount403ApplicationJsonMeta;
}


export class RemoveUserFromAccount429ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// RemoveUserFromAccount429ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class RemoveUserFromAccount429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount429ApplicationJsonMeta;
}


export class RemoveUserFromAccount500ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// RemoveUserFromAccount500ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class RemoveUserFromAccount500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount500ApplicationJsonMeta;
}


export class RemoveUserFromAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveUserFromAccountPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveUserFromAccountRequestBody;
}


export class RemoveUserFromAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeUserFromAccount201ApplicationJSONObject?: RemoveUserFromAccount201ApplicationJson;

  @SpeakeasyMetadata()
  removeUserFromAccount400ApplicationJSONObject?: RemoveUserFromAccount400ApplicationJson;

  @SpeakeasyMetadata()
  removeUserFromAccount401ApplicationJSONObject?: RemoveUserFromAccount401ApplicationJson;

  @SpeakeasyMetadata()
  removeUserFromAccount403ApplicationJSONObject?: RemoveUserFromAccount403ApplicationJson;

  @SpeakeasyMetadata()
  removeUserFromAccount429ApplicationJSONObject?: RemoveUserFromAccount429ApplicationJson;

  @SpeakeasyMetadata()
  removeUserFromAccount500ApplicationJSONObject?: RemoveUserFromAccount500ApplicationJson;
}
