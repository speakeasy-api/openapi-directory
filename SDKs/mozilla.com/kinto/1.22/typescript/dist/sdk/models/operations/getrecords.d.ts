import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRecordsRequest extends SpeakeasyBase {
    ifMatch?: string;
    ifNoneMatch?: string;
    before?: number;
    fields?: string[];
    limit?: number;
    since?: number;
    sort?: string[];
    to?: number;
    token?: string;
    bucketId: string;
    collectionId: string;
    id?: string;
    lastModified?: number;
}
/**
 * The request is invalid.
 */
export declare class GetRecordsErrorSchema extends SpeakeasyBase {
    code: number;
    details?: any;
    errno: number;
    error: string;
    info?: string;
    message?: string;
}
/**
 * Return a list of matching objects.
 */
export declare class GetRecordsSchema extends SpeakeasyBase {
    data?: Record<string, any>[];
}
export declare class GetRecordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is invalid.
     */
    errorSchema?: GetRecordsErrorSchema;
    headers?: Record<string, string[]>;
    /**
     * Return a list of matching objects.
     */
    schema?: GetRecordsSchema;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
