import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChangessRequest extends SpeakeasyBase {
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
export declare class GetChangessErrorSchema extends SpeakeasyBase {
    code: number;
    details?: any;
    errno: number;
    error: string;
    info?: string;
    message?: string;
}
export declare class GetChangessSchemaData extends SpeakeasyBase {
    bucket: string;
    collection: string;
    host: string;
}
/**
 * Return a list of matching objects.
 */
export declare class GetChangessSchema extends SpeakeasyBase {
    data?: GetChangessSchemaData[];
}
export declare class GetChangessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is invalid.
     */
    errorSchema?: GetChangessErrorSchema;
    headers?: Record<string, string[]>;
    /**
     * Return a list of matching objects.
     */
    schema?: GetChangessSchema;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
