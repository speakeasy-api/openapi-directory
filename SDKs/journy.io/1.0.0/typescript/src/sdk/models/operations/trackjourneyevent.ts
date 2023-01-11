import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackJourneyEventRequestBodyIdentificationAccount
/** 
 * Account identification requires an accountId, domain or both
**/
export class TrackJourneyEventRequestBodyIdentificationAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;
}


// TrackJourneyEventRequestBodyIdentificationUser
/** 
 * User identification requires a userId, email or both
**/
export class TrackJourneyEventRequestBodyIdentificationUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}


// TrackJourneyEventRequestBodyIdentification
/** 
 * Event identification requires a user, account or both
**/
export class TrackJourneyEventRequestBodyIdentification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: TrackJourneyEventRequestBodyIdentificationAccount;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: TrackJourneyEventRequestBodyIdentificationUser;
}


// TrackJourneyEventRequestBody
/** 
 * Event for a user or an account
**/
export class TrackJourneyEventRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identification" })
  identification: TrackJourneyEventRequestBodyIdentification;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=triggeredAt" })
  triggeredAt?: string;
}


export class TrackJourneyEvent201ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// TrackJourneyEvent201ApplicationJson
/** 
 * The object was created
**/
export class TrackJourneyEvent201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent201ApplicationJsonMeta;
}


// TrackJourneyEvent400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class TrackJourneyEvent400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Record<string, string>;
}


// TrackJourneyEvent400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class TrackJourneyEvent400ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: TrackJourneyEvent400ApplicationJsonErrorsParameters;
}


export class TrackJourneyEvent400ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// TrackJourneyEvent400ApplicationJson
/** 
 * Specify the fields and/ or parameters that had errors
**/
export class TrackJourneyEvent400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: TrackJourneyEvent400ApplicationJsonErrors;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent400ApplicationJsonMeta;
}


export class TrackJourneyEvent401ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// TrackJourneyEvent401ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class TrackJourneyEvent401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent401ApplicationJsonMeta;
}


export class TrackJourneyEvent403ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// TrackJourneyEvent403ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class TrackJourneyEvent403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent403ApplicationJsonMeta;
}


export class TrackJourneyEvent429ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// TrackJourneyEvent429ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class TrackJourneyEvent429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent429ApplicationJsonMeta;
}


export class TrackJourneyEvent500ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


// TrackJourneyEvent500ApplicationJson
/** 
 * The error message should specify what cause the error
**/
export class TrackJourneyEvent500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent500ApplicationJsonMeta;
}


export class TrackJourneyEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: TrackJourneyEventRequestBody;
}


export class TrackJourneyEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trackJourneyEvent201ApplicationJSONObject?: TrackJourneyEvent201ApplicationJson;

  @SpeakeasyMetadata()
  trackJourneyEvent400ApplicationJSONObject?: TrackJourneyEvent400ApplicationJson;

  @SpeakeasyMetadata()
  trackJourneyEvent401ApplicationJSONObject?: TrackJourneyEvent401ApplicationJson;

  @SpeakeasyMetadata()
  trackJourneyEvent403ApplicationJSONObject?: TrackJourneyEvent403ApplicationJson;

  @SpeakeasyMetadata()
  trackJourneyEvent429ApplicationJSONObject?: TrackJourneyEvent429ApplicationJson;

  @SpeakeasyMetadata()
  trackJourneyEvent500ApplicationJSONObject?: TrackJourneyEvent500ApplicationJson;
}
