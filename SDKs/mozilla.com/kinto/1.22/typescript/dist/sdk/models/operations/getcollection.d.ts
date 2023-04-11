import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCollectionRequest extends SpeakeasyBase {
    ifMatch?: string;
    ifNoneMatch?: string;
    fields?: string[];
    bucketId: string;
    id: string;
}
/**
 * The request is invalid.
 */
export declare class GetCollectionErrorSchema extends SpeakeasyBase {
    code: number;
    details?: any;
    errno: number;
    error: string;
    info?: string;
    message?: string;
}
export declare class GetCollectionObjectSchemaData extends SpeakeasyBase {
    cacheExpires?: number;
    schema?: Record<string, any>;
}
export declare class GetCollectionObjectSchemaPermissions extends SpeakeasyBase {
    read?: string[];
    recordCreate?: string[];
    write?: string[];
}
/**
 * Return the target object.
 */
export declare class GetCollectionObjectSchema extends SpeakeasyBase {
    data?: GetCollectionObjectSchemaData;
    permissions?: GetCollectionObjectSchemaPermissions;
}
export declare class GetCollectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is invalid.
     */
    errorSchema?: GetCollectionErrorSchema;
    headers?: Record<string, string[]>;
    /**
     * Return the target object.
     */
    objectSchema?: GetCollectionObjectSchema;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
