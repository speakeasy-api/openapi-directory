import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRecordsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare enum GetRecordsProductEnum {
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
export declare enum GetRecordsStatusEnum {
    Delivered = "delivered",
    Expired = "expired",
    Failed = "failed",
    Rejected = "rejected",
    Accepted = "accepted",
    Buffered = "buffered",
    Unknown = "unknown",
    Deleted = "deleted"
}
export declare class GetRecordsQueryParams extends SpeakeasyBase {
    accountId: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction?: GetRecordsDirectionEnum;
    id?: string;
    includeMessage?: boolean;
    product: GetRecordsProductEnum;
    showConcatenated?: boolean;
    status?: GetRecordsStatusEnum;
}
export declare class GetRecordsSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetRecords200ApplicationJson1LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson1Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson1LinksSelf;
}
export declare enum GetRecords200ApplicationJson1DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * SMS (Outbound)
**/
export declare class GetRecords200ApplicationJson1 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson1Links;
    accountId?: string;
    currency?: string;
    direction?: GetRecords200ApplicationJson1DirectionEnum;
    idsNotFound?: string;
    includeMessage?: boolean;
    itemsCount?: number;
    price?: number;
    product?: shared.ProductSmsEnum;
    receivedAt?: Date;
    records?: shared.JsonSmsOutboundWithBody[];
    requestId?: string;
    requestStatus?: shared.RequestStatusEnum;
    showConcatenated?: boolean;
}
export declare class GetRecords200ApplicationJson2LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson2Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson2LinksSelf;
}
export declare enum GetRecords200ApplicationJson2DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * SMS (Inbound)
**/
export declare class GetRecords200ApplicationJson2 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson2Links;
    accountId?: string;
    currency?: string;
    direction?: GetRecords200ApplicationJson2DirectionEnum;
    idsNotFound?: string;
    includeMessage?: boolean;
    itemsCount?: number;
    price?: number;
    product?: shared.ProductSmsEnum;
    receivedAt?: Date;
    records?: shared.JsonSmsInboundWithBody[];
    requestId?: string;
    requestStatus?: shared.RequestStatusEnum;
    showConcatenated?: boolean;
}
export declare class GetRecords200ApplicationJson3LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson3Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson3LinksSelf;
}
/**
 * Voice Call
**/
export declare class GetRecords200ApplicationJson3 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson3Links;
    accountId?: string;
    currency?: string;
    direction?: shared.DirectionEnum;
    idsNotFound?: string;
    itemsCount?: number;
    price?: number;
    product?: shared.ProductVoiceEnum;
    receivedAt?: Date;
    records?: shared.CsvVoice[];
    requestId?: string;
    requestStatus?: shared.RequestStatusEnum;
}
export declare class GetRecords200ApplicationJson4LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson4Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson4LinksSelf;
}
/**
 * In App Voice
**/
export declare class GetRecords200ApplicationJson4 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson4Links;
    accountId?: string;
    currency?: string;
    idsNotFound?: string;
    itemsCount?: number;
    price?: number;
    product?: shared.ProductInAppVoiceEnum;
    receivedAt?: Date;
    records?: shared.CsvInAppVoice[];
    requestId?: string;
    requestStatus?: shared.RequestStatusEnum;
}
export declare class GetRecords200ApplicationJson5LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson5Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson5LinksSelf;
}
/**
 * WebSocket Call
**/
export declare class GetRecords200ApplicationJson5 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson5Links;
    accountId?: string;
    currency?: string;
    idsNotFound?: string;
    itemsCount?: number;
    price?: number;
    product?: shared.ProductWebsocketEnum;
    receivedAt?: Date;
    records?: shared.CsvWebsockets[];
    requestId?: string;
    requestStatus?: shared.RequestStatusEnum;
}
export declare class GetRecords200ApplicationJson6LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson6Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson6LinksSelf;
}
/**
 * Verify
**/
export declare class GetRecords200ApplicationJson6 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson6Links;
    accountId?: string;
    currency?: string;
    idsNotFound?: string;
    itemsCount?: number;
    price?: number;
    product?: shared.ProductVerifyEnum;
    receivedAt?: Date;
    records?: shared.CsvVerify[];
    requestId?: string;
    requestStatus?: shared.RequestStatusEnum;
}
export declare class GetRecords200ApplicationJson7LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson7Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson7LinksSelf;
}
/**
 * Number Insight
**/
export declare class GetRecords200ApplicationJson7 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson7Links;
    accountId?: string;
    currency?: string;
    idsNotFound?: string;
    itemsCount?: number;
    price?: number;
    product?: shared.ProductNiEnum;
    receivedAt?: Date;
    records?: shared.CsvNi[];
    requestId?: string;
    requestStatus?: shared.RequestStatusEnum;
}
export declare class GetRecords200ApplicationJson8LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson8Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson8LinksSelf;
}
export declare enum GetRecords200ApplicationJson8DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * Messages (Outbound)
**/
export declare class GetRecords200ApplicationJson8 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson8Links;
    accountId?: string;
    currency?: string;
    direction?: GetRecords200ApplicationJson8DirectionEnum;
    idsNotFound?: string;
    includeMessage?: boolean;
    itemsCount?: number;
    price?: number;
    product?: shared.ProductMessagesEnum;
    receivedAt?: Date;
    records?: shared.CsvMessagesOutbound[];
    requestId?: string;
    requestStatus?: shared.RequestStatusEnum;
    showConcatenated?: boolean;
}
export declare class GetRecords200ApplicationJson9LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson9Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson9LinksSelf;
}
export declare enum GetRecords200ApplicationJson9DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * Messages (Inbound)
**/
export declare class GetRecords200ApplicationJson9 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson9Links;
    accountId?: string;
    currency?: string;
    direction?: GetRecords200ApplicationJson9DirectionEnum;
    idsNotFound?: string;
    includeMessage?: boolean;
    itemsCount?: number;
    price?: number;
    product?: shared.ProductMessagesEnum;
    receivedAt?: Date;
    records?: shared.CsvMessagesInbound[];
    requestId?: string;
    requestStatus?: shared.RequestStatusEnum;
    showConcatenated?: boolean;
}
export declare class GetRecords200ApplicationJson10LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson10Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson10LinksSelf;
}
/**
 * ASR
**/
export declare class GetRecords200ApplicationJson10 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson10Links;
    accountId?: string;
    currency?: string;
    idsNotFound?: string;
    itemsCount?: number;
    price?: number;
    product?: shared.ProductAsrEnum;
    receivedAt?: Date;
    records?: shared.CsvAsr[];
    requestId?: string;
    requestStatus?: shared.RequestStatusEnum;
}
export declare class GetRecords200ApplicationJson11LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson11Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson11LinksSelf;
}
/**
 * Conversations
**/
export declare class GetRecords200ApplicationJson11 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson11Links;
    accountId?: string;
    currency?: string;
    idsNotFound?: string;
    itemsCount?: number;
    price?: number;
    product?: shared.ProductConversationsEnum;
    receivedAt?: Date;
    records?: shared.CsvConversations[];
    requestId?: string;
    requestStatus?: shared.RequestStatusEnum;
}
export declare class GetRecordsRequest extends SpeakeasyBase {
    queryParams: GetRecordsQueryParams;
    security: GetRecordsSecurity;
}
export declare class GetRecordsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRecords200ApplicationJSONOneOf?: any;
    getRecords403ApplicationJSONAny?: any;
    getRecords422ApplicationJSONOneOf?: any;
}
