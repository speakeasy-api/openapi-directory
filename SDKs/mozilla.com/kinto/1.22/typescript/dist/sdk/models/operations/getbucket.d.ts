import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBucketRequest extends SpeakeasyBase {
    ifMatch?: string;
    ifNoneMatch?: string;
    fields?: string[];
    id: string;
}
/**
 * The request is invalid.
 */
export declare class GetBucketErrorSchema extends SpeakeasyBase {
    code: number;
    details?: any;
    errno: number;
    error: string;
    info?: string;
    message?: string;
}
export declare class GetBucketObjectSchemaData extends SpeakeasyBase {
    collectionSchema?: Record<string, any>;
    groupSchema?: Record<string, any>;
    recordSchema?: Record<string, any>;
}
export declare class GetBucketObjectSchemaPermissions extends SpeakeasyBase {
    collectionCreate?: string[];
    groupCreate?: string[];
    read?: string[];
    write?: string[];
}
/**
 * Return the target object.
 */
export declare class GetBucketObjectSchema extends SpeakeasyBase {
    data?: GetBucketObjectSchemaData;
    permissions?: GetBucketObjectSchemaPermissions;
}
export declare class GetBucketResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is invalid.
     */
    errorSchema?: GetBucketErrorSchema;
    headers?: Record<string, string[]>;
    /**
     * Return the target object.
     */
    objectSchema?: GetBucketObjectSchema;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
