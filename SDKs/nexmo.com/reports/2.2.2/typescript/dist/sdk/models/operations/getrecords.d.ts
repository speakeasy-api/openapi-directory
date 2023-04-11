import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRecordsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
 */
export declare enum GetRecordsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * Include the message contents in the records. Only applicable for use with products `SMS` and `MESSAGES`, where it is optional.
 */
export declare enum GetRecordsIncludeMessageEnum {
    True = "true",
    False = "false"
}
/**
 * The product to return records for
 */
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
/**
 * Indicates whether the SMS was split up into multiple parts (due to its length).
 */
export declare enum GetRecordsShowConcatenatedEnum {
    True = "true",
    False = "false"
}
/**
 * The SMS status to search for. Optional where product is `SMS`.
 */
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
export declare class GetRecordsRequest extends SpeakeasyBase {
    /**
     * The account for which the list of reports will be queried.
     */
    accountId: string;
    /**
     * **Must be no more than 24 hours later than `date_start`**
     *
     * @remarks
     *
     * ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.
     *
     * It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR.
     *
     * If you provide this, you must provide `date_start` and must not provide `id`.
     *
     */
    dateEnd?: Date;
    /**
     * ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports should begin.
     *
     * @remarks
     *
     * It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.
     *
     * If you provide this, you must provide `date_end` and must not provide `id`.
     *
     */
    dateStart?: Date;
    /**
     * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
     */
    direction?: GetRecordsDirectionEnum;
    /**
     * The UUID of the message or call to be searched for. You can specify a comma-separated list of UUIDs. If UUIDs are not found they are listed in the response in the `ids_not_found` field.
     *
     * @remarks
     *
     * If you specify `id`, you must not specify `status`, `date_start` or `date_end`.
     *
     */
    id?: string;
    /**
     * Include the message contents in the records. Only applicable for use with products `SMS` and `MESSAGES`, where it is optional.
     */
    includeMessage?: GetRecordsIncludeMessageEnum;
    /**
     * The product to return records for
     */
    product: GetRecordsProductEnum;
    /**
     * Indicates whether the SMS was split up into multiple parts (due to its length).
     */
    showConcatenated?: GetRecordsShowConcatenatedEnum;
    /**
     * The SMS status to search for. Optional where product is `SMS`.
     */
    status?: GetRecordsStatusEnum;
}
/**
 * Invalid filter
 */
export declare class GetRecords422ApplicationJson3 extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
export declare class GetRecords422ApplicationJson2InvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Invalid Product
 */
export declare class GetRecords422ApplicationJson2 extends SpeakeasyBase {
    instance?: string;
    invalidParameters?: GetRecords422ApplicationJson2InvalidParameters[];
    title?: string;
}
export declare class GetRecords422ApplicationJson1InvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Missing parameter
 */
export declare class GetRecords422ApplicationJson1 extends SpeakeasyBase {
    instance?: string;
    invalidParameters?: GetRecords422ApplicationJson1InvalidParameters[];
    title?: string;
}
/**
 * Unprocessable entity
 */
export declare class GetRecords403ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
}
export declare class GetRecords200ApplicationJson11LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson11Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson11LinksSelf;
}
/**
 * Conversations
 */
export declare class GetRecords200ApplicationJson11 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson11Links;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.
     */
    idsNotFound?: string;
    /**
     * The number of returned records
     */
    itemsCount?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Which product you wish to generate a report for.
     */
    product?: shared.ProductConversationsEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receivedAt?: Date;
    /**
     * Records in JSON format
     */
    records?: shared.CsvConversations[];
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
    requestStatus?: shared.RequestStatusEnum;
}
export declare class GetRecords200ApplicationJson10LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson10Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson10LinksSelf;
}
/**
 * ASR
 */
export declare class GetRecords200ApplicationJson10 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson10Links;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.
     */
    idsNotFound?: string;
    /**
     * The number of returned records
     */
    itemsCount?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Which product you wish to generate a report for.
     */
    product?: shared.ProductAsrEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receivedAt?: Date;
    /**
     * Records in JSON format
     */
    records?: shared.CsvAsr[];
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
    requestStatus?: shared.RequestStatusEnum;
}
export declare class GetRecords200ApplicationJson9LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson9Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson9LinksSelf;
}
/**
 * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
 */
export declare enum GetRecords200ApplicationJson9DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * Messages (Inbound)
 */
export declare class GetRecords200ApplicationJson9 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson9Links;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
     */
    direction?: GetRecords200ApplicationJson9DirectionEnum;
    /**
     * If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.
     */
    idsNotFound?: string;
    /**
     * Include the text of messages in the report.
     */
    includeMessage?: boolean;
    /**
     * The number of returned records
     */
    itemsCount?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Which product you wish to generate a report for.
     */
    product?: shared.ProductMessagesEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receivedAt?: Date;
    /**
     * Records in JSON format
     */
    records?: shared.CsvMessagesInbound[];
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
    requestStatus?: shared.RequestStatusEnum;
    /**
     * Indicates whether the SMS was split up into multiple parts (due to its length).
     */
    showConcatenated?: boolean;
}
export declare class GetRecords200ApplicationJson8LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson8Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson8LinksSelf;
}
/**
 * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
 */
export declare enum GetRecords200ApplicationJson8DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * Messages (Outbound)
 */
export declare class GetRecords200ApplicationJson8 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson8Links;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
     */
    direction?: GetRecords200ApplicationJson8DirectionEnum;
    /**
     * If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.
     */
    idsNotFound?: string;
    /**
     * Include the text of messages in the report.
     */
    includeMessage?: boolean;
    /**
     * The number of returned records
     */
    itemsCount?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Which product you wish to generate a report for.
     */
    product?: shared.ProductMessagesEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receivedAt?: Date;
    /**
     * Records in JSON format
     */
    records?: shared.CsvMessagesOutbound[];
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
    requestStatus?: shared.RequestStatusEnum;
    /**
     * Indicates whether the SMS was split up into multiple parts (due to its length).
     */
    showConcatenated?: boolean;
}
export declare class GetRecords200ApplicationJson7LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson7Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson7LinksSelf;
}
/**
 * Number Insight
 */
export declare class GetRecords200ApplicationJson7 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson7Links;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.
     */
    idsNotFound?: string;
    /**
     * The number of returned records
     */
    itemsCount?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Which product you wish to generate a report for.
     */
    product?: shared.ProductNiEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receivedAt?: Date;
    /**
     * Records in JSON format
     */
    records?: shared.CsvNi[];
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
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
 */
export declare class GetRecords200ApplicationJson6 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson6Links;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.
     */
    idsNotFound?: string;
    /**
     * The number of returned records
     */
    itemsCount?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Which product you wish to generate a report for.
     */
    product?: shared.ProductVerifyEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receivedAt?: Date;
    /**
     * Records in JSON format
     */
    records?: shared.CsvVerify[];
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
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
 */
export declare class GetRecords200ApplicationJson5 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson5Links;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.
     */
    idsNotFound?: string;
    /**
     * The number of returned records
     */
    itemsCount?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Which product you wish to generate a report for.
     */
    product?: shared.ProductWebsocketEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receivedAt?: Date;
    /**
     * Records in JSON format
     */
    records?: shared.CsvWebsockets[];
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
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
 */
export declare class GetRecords200ApplicationJson4 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson4Links;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.
     */
    idsNotFound?: string;
    /**
     * The number of returned records
     */
    itemsCount?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Which product you wish to generate a report for.
     */
    product?: shared.ProductInAppVoiceEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receivedAt?: Date;
    /**
     * Records in JSON format
     */
    records?: shared.CsvInAppVoice[];
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
    requestStatus?: shared.RequestStatusEnum;
}
export declare class GetRecords200ApplicationJson3LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson3Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson3LinksSelf;
}
/**
 * Voice Call
 */
export declare class GetRecords200ApplicationJson3 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson3Links;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
     */
    direction?: shared.DirectionEnum;
    /**
     * If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.
     */
    idsNotFound?: string;
    /**
     * The number of returned records
     */
    itemsCount?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Which product you wish to generate a report for.
     */
    product?: shared.ProductVoiceEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receivedAt?: Date;
    /**
     * Records in JSON format
     */
    records?: shared.CsvVoice[];
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
    requestStatus?: shared.RequestStatusEnum;
}
export declare class GetRecords200ApplicationJson2LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson2Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson2LinksSelf;
}
/**
 * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
 */
export declare enum GetRecords200ApplicationJson2DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * SMS (Inbound)
 */
export declare class GetRecords200ApplicationJson2 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson2Links;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
     */
    direction?: GetRecords200ApplicationJson2DirectionEnum;
    /**
     * If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.
     */
    idsNotFound?: string;
    /**
     * Include the text of messages in the report.
     */
    includeMessage?: boolean;
    /**
     * The number of returned records
     */
    itemsCount?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Which product you wish to generate a report for.
     */
    product?: shared.ProductSmsEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receivedAt?: Date;
    /**
     * Records in JSON format
     */
    records?: shared.JsonSmsInboundWithBody[];
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
    requestStatus?: shared.RequestStatusEnum;
    /**
     * Indicates whether the SMS was split up into multiple parts (due to its length).
     */
    showConcatenated?: boolean;
}
export declare class GetRecords200ApplicationJson1LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetRecords200ApplicationJson1Links extends SpeakeasyBase {
    self?: GetRecords200ApplicationJson1LinksSelf;
}
/**
 * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
 */
export declare enum GetRecords200ApplicationJson1DirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * SMS (Outbound)
 */
export declare class GetRecords200ApplicationJson1 extends SpeakeasyBase {
    links?: GetRecords200ApplicationJson1Links;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
     */
    direction?: GetRecords200ApplicationJson1DirectionEnum;
    /**
     * If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.
     */
    idsNotFound?: string;
    /**
     * Include the text of messages in the report.
     */
    includeMessage?: boolean;
    /**
     * The number of returned records
     */
    itemsCount?: number;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Which product you wish to generate a report for.
     */
    product?: shared.ProductSmsEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receivedAt?: Date;
    /**
     * Records in JSON format
     */
    records?: shared.JsonSmsOutboundWithBody[];
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
    requestStatus?: shared.RequestStatusEnum;
    /**
     * Indicates whether the SMS was split up into multiple parts (due to its length).
     */
    showConcatenated?: boolean;
}
export declare class GetRecordsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getRecords200ApplicationJSONOneOf?: any;
    /**
     * Unprocessable entity
     */
    getRecords403ApplicationJSONObject?: GetRecords403ApplicationJSON;
    /**
     * Unprocessable entity
     */
    getRecords422ApplicationJSONOneOf?: any;
}
