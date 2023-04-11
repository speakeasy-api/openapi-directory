import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCollectionsRequest extends SpeakeasyBase {
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
    id?: string;
    lastModified?: number;
}
/**
 * The request is invalid.
 */
export declare class GetCollectionsErrorSchema extends SpeakeasyBase {
    code: number;
    details?: any;
    errno: number;
    error: string;
    info?: string;
    message?: string;
}
export declare class GetCollectionsSchemaData extends SpeakeasyBase {
    cacheExpires?: number;
    schema?: Record<string, any>;
}
/**
 * Return a list of matching objects.
 */
export declare class GetCollectionsSchema extends SpeakeasyBase {
    data?: GetCollectionsSchemaData[];
}
export declare class GetCollectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is invalid.
     */
    errorSchema?: GetCollectionsErrorSchema;
    headers?: Record<string, string[]>;
    /**
     * Return a list of matching objects.
     */
    schema?: GetCollectionsSchema;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
