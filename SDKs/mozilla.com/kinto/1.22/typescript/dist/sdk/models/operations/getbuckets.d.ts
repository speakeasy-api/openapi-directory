import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBucketsRequest extends SpeakeasyBase {
    ifMatch?: string;
    ifNoneMatch?: string;
    before?: number;
    fields?: string[];
    limit?: number;
    since?: number;
    sort?: string[];
    to?: number;
    token?: string;
    id?: string;
    lastModified?: number;
}
/**
 * The request is invalid.
 */
export declare class GetBucketsErrorSchema extends SpeakeasyBase {
    code: number;
    details?: any;
    errno: number;
    error: string;
    info?: string;
    message?: string;
}
export declare class GetBucketsSchemaData extends SpeakeasyBase {
    collectionSchema?: Record<string, any>;
    groupSchema?: Record<string, any>;
    recordSchema?: Record<string, any>;
}
/**
 * Return a list of matching objects.
 */
export declare class GetBucketsSchema extends SpeakeasyBase {
    data?: GetBucketsSchemaData[];
}
export declare class GetBucketsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is invalid.
     */
    errorSchema?: GetBucketsErrorSchema;
    headers?: Record<string, string[]>;
    /**
     * Return a list of matching objects.
     */
    schema?: GetBucketsSchema;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
