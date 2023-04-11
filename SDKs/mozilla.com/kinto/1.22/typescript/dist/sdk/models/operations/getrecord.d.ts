import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRecordRequest extends SpeakeasyBase {
    ifMatch?: string;
    ifNoneMatch?: string;
    fields?: string[];
    bucketId: string;
    collectionId: string;
    id: string;
}
/**
 * The request is invalid.
 */
export declare class GetRecordErrorSchema extends SpeakeasyBase {
    code: number;
    details?: any;
    errno: number;
    error: string;
    info?: string;
    message?: string;
}
export declare class GetRecordObjectSchemaPermissions extends SpeakeasyBase {
    read?: string[];
    write?: string[];
}
/**
 * Return the target object.
 */
export declare class GetRecordObjectSchema extends SpeakeasyBase {
    data?: Record<string, any>;
    permissions?: GetRecordObjectSchemaPermissions;
}
export declare class GetRecordResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is invalid.
     */
    errorSchema?: GetRecordErrorSchema;
    headers?: Record<string, string[]>;
    /**
     * Return the target object.
     */
    objectSchema?: GetRecordObjectSchema;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
