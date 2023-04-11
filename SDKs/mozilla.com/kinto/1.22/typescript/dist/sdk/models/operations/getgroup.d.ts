import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetGroupRequest extends SpeakeasyBase {
    ifMatch?: string;
    ifNoneMatch?: string;
    fields?: string[];
    bucketId: string;
    id: string;
}
/**
 * The request is invalid.
 */
export declare class GetGroupErrorSchema extends SpeakeasyBase {
    code: number;
    details?: any;
    errno: number;
    error: string;
    info?: string;
    message?: string;
}
export declare class GetGroupObjectSchemaData extends SpeakeasyBase {
    members?: string[];
}
export declare class GetGroupObjectSchemaPermissions extends SpeakeasyBase {
    read?: string[];
    write?: string[];
}
/**
 * Return the target object.
 */
export declare class GetGroupObjectSchema extends SpeakeasyBase {
    data?: GetGroupObjectSchemaData;
    permissions?: GetGroupObjectSchemaPermissions;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is invalid.
     */
    errorSchema?: GetGroupErrorSchema;
    headers?: Record<string, string[]>;
    /**
     * Return the target object.
     */
    objectSchema?: GetGroupObjectSchema;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
