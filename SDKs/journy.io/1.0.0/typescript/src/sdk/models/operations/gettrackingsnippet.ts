import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTrackingSnippetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain: string;
}


// GetTrackingSnippet200ApplicationJsonData
/** 
 * A snippet
**/
export class GetTrackingSnippet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet: string;
}


export class GetTrackingSnippet200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetTrackingSnippet200ApplicationJson
/** 
 * The basic response containing the unique ID of the request and the response status
**/
export class GetTrackingSnippet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetTrackingSnippet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet200ApplicationJsonMeta;
}


// GetTrackingSnippet400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class GetTrackingSnippet400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Record<string, string>;
}


// GetTrackingSnippet400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class GetTrackingSnippet400ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: GetTrackingSnippet400ApplicationJsonErrorsParameters;
}


export class GetTrackingSnippet400ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetTrackingSnippet400ApplicationJson
/** 
 * Specify the fields and/ or parameters that had errors
**/
export class GetTrackingSnippet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: GetTrackingSnippet400ApplicationJsonErrors;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet400ApplicationJsonMeta;
}


export class GetTrackingSnippet401ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetTrackingSnippet401ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class GetTrackingSnippet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet401ApplicationJsonMeta;
}


export class GetTrackingSnippet403ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetTrackingSnippet403ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class GetTrackingSnippet403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet403ApplicationJsonMeta;
}


export class GetTrackingSnippet404ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetTrackingSnippet404ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class GetTrackingSnippet404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet404ApplicationJsonMeta;
}


export class GetTrackingSnippet429ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetTrackingSnippet429ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class GetTrackingSnippet429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet429ApplicationJsonMeta;
}


export class GetTrackingSnippet500ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// GetTrackingSnippet500ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class GetTrackingSnippet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet500ApplicationJsonMeta;
}


export class GetTrackingSnippetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTrackingSnippetQueryParams;
}


export class GetTrackingSnippetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTrackingSnippet200ApplicationJSONObject?: GetTrackingSnippet200ApplicationJson;

  @SpeakeasyMetadata()
  getTrackingSnippet400ApplicationJSONObject?: GetTrackingSnippet400ApplicationJson;

  @SpeakeasyMetadata()
  getTrackingSnippet401ApplicationJSONObject?: GetTrackingSnippet401ApplicationJson;

  @SpeakeasyMetadata()
  getTrackingSnippet403ApplicationJSONObject?: GetTrackingSnippet403ApplicationJson;

  @SpeakeasyMetadata()
  getTrackingSnippet404ApplicationJSONObject?: GetTrackingSnippet404ApplicationJson;

  @SpeakeasyMetadata()
  getTrackingSnippet429ApplicationJSONObject?: GetTrackingSnippet429ApplicationJson;

  @SpeakeasyMetadata()
  getTrackingSnippet500ApplicationJSONObject?: GetTrackingSnippet500ApplicationJson;
}
