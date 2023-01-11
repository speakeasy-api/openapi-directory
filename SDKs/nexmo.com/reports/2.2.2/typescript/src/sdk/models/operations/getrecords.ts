import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetRecordsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}

export enum GetRecordsProductEnum {
    Sms = "SMS",
    VoiceCall = "VOICE-CALL",
    VoiceFailed = "VOICE-FAILED",
    InAppVoice = "IN-APP-VOICE",
    WebsocketCall = "WEBSOCKET-CALL",
    VerifyApi = "VERIFY-API",
    NumberInsight = "NUMBER-INSIGHT",
    Messages = "MESSAGES",
    Asr = "ASR",
    Conversations = "CONVERSATIONS",
    ReportsUsage = "REPORTS-USAGE"
}

export enum GetRecordsStatusEnum {
    Delivered = "delivered",
    Expired = "expired",
    Failed = "failed",
    Rejected = "rejected",
    Accepted = "accepted",
    Buffered = "buffered",
    Unknown = "unknown",
    Deleted = "deleted"
}


export class GetRecordsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_end" })
  dateEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_start" })
  dateStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetRecordsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_message" })
  includeMessage?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product" })
  product: GetRecordsProductEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_concatenated" })
  showConcatenated?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetRecordsStatusEnum;
}


export class GetRecordsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetRecords200ApplicationJson1LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetRecords200ApplicationJson1Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetRecords200ApplicationJson1LinksSelf;
}

export enum GetRecords200ApplicationJson1DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}


// GetRecords200ApplicationJson1
/** 
 * SMS (Outbound)
**/
export class GetRecords200ApplicationJson1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetRecords200ApplicationJson1Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: GetRecords200ApplicationJson1DirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=ids_not_found" })
  idsNotFound?: string;

  @SpeakeasyMetadata({ data: "json, name=include_message" })
  includeMessage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: shared.ProductSmsEnum;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.JsonSmsOutboundWithBody })
  records?: shared.JsonSmsOutboundWithBody[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: shared.RequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=show_concatenated" })
  showConcatenated?: boolean;
}


export class GetRecords200ApplicationJson2LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetRecords200ApplicationJson2Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetRecords200ApplicationJson2LinksSelf;
}

export enum GetRecords200ApplicationJson2DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}


// GetRecords200ApplicationJson2
/** 
 * SMS (Inbound)
**/
export class GetRecords200ApplicationJson2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetRecords200ApplicationJson2Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: GetRecords200ApplicationJson2DirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=ids_not_found" })
  idsNotFound?: string;

  @SpeakeasyMetadata({ data: "json, name=include_message" })
  includeMessage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: shared.ProductSmsEnum;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.JsonSmsInboundWithBody })
  records?: shared.JsonSmsInboundWithBody[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: shared.RequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=show_concatenated" })
  showConcatenated?: boolean;
}


export class GetRecords200ApplicationJson3LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetRecords200ApplicationJson3Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetRecords200ApplicationJson3LinksSelf;
}


// GetRecords200ApplicationJson3
/** 
 * Voice Call
**/
export class GetRecords200ApplicationJson3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetRecords200ApplicationJson3Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=ids_not_found" })
  idsNotFound?: string;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: shared.ProductVoiceEnum;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.CsvVoice })
  records?: shared.CsvVoice[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: shared.RequestStatusEnum;
}


export class GetRecords200ApplicationJson4LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetRecords200ApplicationJson4Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetRecords200ApplicationJson4LinksSelf;
}


// GetRecords200ApplicationJson4
/** 
 * In App Voice
**/
export class GetRecords200ApplicationJson4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetRecords200ApplicationJson4Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=ids_not_found" })
  idsNotFound?: string;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: shared.ProductInAppVoiceEnum;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.CsvInAppVoice })
  records?: shared.CsvInAppVoice[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: shared.RequestStatusEnum;
}


export class GetRecords200ApplicationJson5LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetRecords200ApplicationJson5Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetRecords200ApplicationJson5LinksSelf;
}


// GetRecords200ApplicationJson5
/** 
 * WebSocket Call
**/
export class GetRecords200ApplicationJson5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetRecords200ApplicationJson5Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=ids_not_found" })
  idsNotFound?: string;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: shared.ProductWebsocketEnum;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.CsvWebsockets })
  records?: shared.CsvWebsockets[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: shared.RequestStatusEnum;
}


export class GetRecords200ApplicationJson6LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetRecords200ApplicationJson6Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetRecords200ApplicationJson6LinksSelf;
}


// GetRecords200ApplicationJson6
/** 
 * Verify
**/
export class GetRecords200ApplicationJson6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetRecords200ApplicationJson6Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=ids_not_found" })
  idsNotFound?: string;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: shared.ProductVerifyEnum;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.CsvVerify })
  records?: shared.CsvVerify[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: shared.RequestStatusEnum;
}


export class GetRecords200ApplicationJson7LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetRecords200ApplicationJson7Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetRecords200ApplicationJson7LinksSelf;
}


// GetRecords200ApplicationJson7
/** 
 * Number Insight
**/
export class GetRecords200ApplicationJson7 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetRecords200ApplicationJson7Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=ids_not_found" })
  idsNotFound?: string;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: shared.ProductNiEnum;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.CsvNi })
  records?: shared.CsvNi[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: shared.RequestStatusEnum;
}


export class GetRecords200ApplicationJson8LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetRecords200ApplicationJson8Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetRecords200ApplicationJson8LinksSelf;
}

export enum GetRecords200ApplicationJson8DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}


// GetRecords200ApplicationJson8
/** 
 * Messages (Outbound)
**/
export class GetRecords200ApplicationJson8 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetRecords200ApplicationJson8Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: GetRecords200ApplicationJson8DirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=ids_not_found" })
  idsNotFound?: string;

  @SpeakeasyMetadata({ data: "json, name=include_message" })
  includeMessage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: shared.ProductMessagesEnum;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.CsvMessagesOutbound })
  records?: shared.CsvMessagesOutbound[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: shared.RequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=show_concatenated" })
  showConcatenated?: boolean;
}


export class GetRecords200ApplicationJson9LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetRecords200ApplicationJson9Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetRecords200ApplicationJson9LinksSelf;
}

export enum GetRecords200ApplicationJson9DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}


// GetRecords200ApplicationJson9
/** 
 * Messages (Inbound)
**/
export class GetRecords200ApplicationJson9 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetRecords200ApplicationJson9Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: GetRecords200ApplicationJson9DirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=ids_not_found" })
  idsNotFound?: string;

  @SpeakeasyMetadata({ data: "json, name=include_message" })
  includeMessage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: shared.ProductMessagesEnum;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.CsvMessagesInbound })
  records?: shared.CsvMessagesInbound[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: shared.RequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=show_concatenated" })
  showConcatenated?: boolean;
}


export class GetRecords200ApplicationJson10LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetRecords200ApplicationJson10Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetRecords200ApplicationJson10LinksSelf;
}


// GetRecords200ApplicationJson10
/** 
 * ASR
**/
export class GetRecords200ApplicationJson10 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetRecords200ApplicationJson10Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=ids_not_found" })
  idsNotFound?: string;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: shared.ProductAsrEnum;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.CsvAsr })
  records?: shared.CsvAsr[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: shared.RequestStatusEnum;
}


export class GetRecords200ApplicationJson11LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetRecords200ApplicationJson11Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetRecords200ApplicationJson11LinksSelf;
}


// GetRecords200ApplicationJson11
/** 
 * Conversations
**/
export class GetRecords200ApplicationJson11 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetRecords200ApplicationJson11Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=ids_not_found" })
  idsNotFound?: string;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: shared.ProductConversationsEnum;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.CsvConversations })
  records?: shared.CsvConversations[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: shared.RequestStatusEnum;
}


export class GetRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRecordsQueryParams;

  @SpeakeasyMetadata()
  security: GetRecordsSecurity;
}


export class GetRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRecords200ApplicationJSONOneOf?: any;

  @SpeakeasyMetadata()
  getRecords403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getRecords422ApplicationJSONOneOf?: any;
}
