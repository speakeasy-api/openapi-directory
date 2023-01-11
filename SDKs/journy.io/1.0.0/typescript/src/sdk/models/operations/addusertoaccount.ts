import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddUserToAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// AddUserToAccountRequestBody
/** 
 * The user being added/removed from the account
**/
export class AddUserToAccountRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}


export class AddUserToAccount201ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// AddUserToAccount201ApplicationJson
/** 
 * The object was created
**/
export class AddUserToAccount201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: AddUserToAccount201ApplicationJsonMeta;
}


// AddUserToAccount400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class AddUserToAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Record<string, string>;
}


// AddUserToAccount400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class AddUserToAccount400ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: AddUserToAccount400ApplicationJsonErrorsParameters;
}


export class AddUserToAccount400ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// AddUserToAccount400ApplicationJson
/** 
 * Specify the fields and/ or parameters that had errors
**/
export class AddUserToAccount400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: AddUserToAccount400ApplicationJsonErrors;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: AddUserToAccount400ApplicationJsonMeta;
}


export class AddUserToAccount401ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// AddUserToAccount401ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class AddUserToAccount401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: AddUserToAccount401ApplicationJsonMeta;
}


export class AddUserToAccount429ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// AddUserToAccount429ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class AddUserToAccount429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: AddUserToAccount429ApplicationJsonMeta;
}


export class AddUserToAccount500ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// AddUserToAccount500ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class AddUserToAccount500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: AddUserToAccount500ApplicationJsonMeta;
}


export class AddUserToAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddUserToAccountPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddUserToAccountRequestBody;
}


export class AddUserToAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addUserToAccount201ApplicationJSONObject?: AddUserToAccount201ApplicationJson;

  @SpeakeasyMetadata()
  addUserToAccount400ApplicationJSONObject?: AddUserToAccount400ApplicationJson;

  @SpeakeasyMetadata()
  addUserToAccount401ApplicationJSONObject?: AddUserToAccount401ApplicationJson;

  @SpeakeasyMetadata()
  addUserToAccount429ApplicationJSONObject?: AddUserToAccount429ApplicationJson;

  @SpeakeasyMetadata()
  addUserToAccount500ApplicationJSONObject?: AddUserToAccount500ApplicationJson;
}
