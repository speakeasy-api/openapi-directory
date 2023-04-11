import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum BatchBatchPayloadSchemaDefaultsMethodEnum {
    Get = "GET",
    Head = "HEAD",
    Delete = "DELETE",
    Trace = "TRACE",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH"
}
export declare class BatchBatchPayloadSchemaDefaults extends SpeakeasyBase {
    body?: Record<string, any>;
    headers?: Record<string, any>;
    method?: BatchBatchPayloadSchemaDefaultsMethodEnum;
    path?: string;
}
export declare enum BatchBatchPayloadSchemaRequestsMethodEnum {
    Get = "GET",
    Head = "HEAD",
    Delete = "DELETE",
    Trace = "TRACE",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH"
}
export declare class BatchBatchPayloadSchemaRequests extends SpeakeasyBase {
    body?: Record<string, any>;
    headers?: Record<string, any>;
    method?: BatchBatchPayloadSchemaRequestsMethodEnum;
    path: string;
}
export declare class BatchBatchPayloadSchema extends SpeakeasyBase {
    defaults?: BatchBatchPayloadSchemaDefaults;
    requests: BatchBatchPayloadSchemaRequests[];
}
/**
 * The request was badly formatted.
 */
export declare class BatchErrorSchema extends SpeakeasyBase {
    code: number;
    details?: any;
    errno: number;
    error: string;
    info?: string;
    message?: string;
}
export declare class BatchBatchResponseBodySchemaResponses extends SpeakeasyBase {
    body?: Record<string, any>;
    headers?: Record<string, any>;
    path: string;
    status: number;
}
/**
 * Return a list of operation responses.
 */
export declare class BatchBatchResponseBodySchema extends SpeakeasyBase {
    responses: BatchBatchResponseBodySchemaResponses[];
}
export declare class BatchResponse extends SpeakeasyBase {
    /**
     * Return a list of operation responses.
     */
    batchResponseBodySchema?: BatchBatchResponseBodySchema;
    contentType: string;
    /**
     * The request was badly formatted.
     */
    errorSchema?: BatchErrorSchema;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
