import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpsertAccountRequestBodyIdentification
/** 
 * Account identification requires an accountId, domain or both
**/
export class UpsertAccountRequestBodyIdentification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;
}


// UpsertAccountRequestBodyMembersIdentification
/** 
 * User identification requires a userId, email or both
**/
export class UpsertAccountRequestBodyMembersIdentification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}


// UpsertAccountRequestBodyMembers
/** 
 * Identification requires an accountId, domain or both
**/
export class UpsertAccountRequestBodyMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identification" })
  identification: UpsertAccountRequestBodyMembersIdentification;
}


// UpsertAccountRequestBody
/** 
 * Update properties and/or members of an account
**/
export class UpsertAccountRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identification" })
  identification: UpsertAccountRequestBodyIdentification;

  @SpeakeasyMetadata({ data: "json, name=members", elemType: UpsertAccountRequestBodyMembers })
  members?: UpsertAccountRequestBodyMembers[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Record<string, any>;
}


export class UpsertAccount201ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// UpsertAccount201ApplicationJson
/** 
 * The object was created
**/
export class UpsertAccount201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: UpsertAccount201ApplicationJsonMeta;
}


// UpsertAccount400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class UpsertAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Record<string, string>;
}


// UpsertAccount400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class UpsertAccount400ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: UpsertAccount400ApplicationJsonErrorsParameters;
}


export class UpsertAccount400ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// UpsertAccount400ApplicationJson
/** 
 * Specify the fields and/ or parameters that had errors
**/
export class UpsertAccount400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: UpsertAccount400ApplicationJsonErrors;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: UpsertAccount400ApplicationJsonMeta;
}


export class UpsertAccount401ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// UpsertAccount401ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class UpsertAccount401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: UpsertAccount401ApplicationJsonMeta;
}


export class UpsertAccount429ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// UpsertAccount429ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class UpsertAccount429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: UpsertAccount429ApplicationJsonMeta;
}


export class UpsertAccount500ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// UpsertAccount500ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class UpsertAccount500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: UpsertAccount500ApplicationJsonMeta;
}


export class UpsertAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpsertAccountRequestBody;
}


export class UpsertAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  upsertAccount201ApplicationJSONObject?: UpsertAccount201ApplicationJson;

  @SpeakeasyMetadata()
  upsertAccount400ApplicationJSONObject?: UpsertAccount400ApplicationJson;

  @SpeakeasyMetadata()
  upsertAccount401ApplicationJSONObject?: UpsertAccount401ApplicationJson;

  @SpeakeasyMetadata()
  upsertAccount429ApplicationJSONObject?: UpsertAccount429ApplicationJson;

  @SpeakeasyMetadata()
  upsertAccount500ApplicationJSONObject?: UpsertAccount500ApplicationJson;
}
