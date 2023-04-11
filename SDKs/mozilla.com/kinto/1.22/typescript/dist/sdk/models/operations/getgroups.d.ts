import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetGroupsRequest extends SpeakeasyBase {
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
export declare class GetGroupsErrorSchema extends SpeakeasyBase {
    code: number;
    details?: any;
    errno: number;
    error: string;
    info?: string;
    message?: string;
}
export declare class GetGroupsSchemaData extends SpeakeasyBase {
    members?: string[];
}
/**
 * Return a list of matching objects.
 */
export declare class GetGroupsSchema extends SpeakeasyBase {
    data?: GetGroupsSchemaData[];
}
export declare class GetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is invalid.
     */
    errorSchema?: GetGroupsErrorSchema;
    headers?: Record<string, string[]>;
    /**
     * Return a list of matching objects.
     */
    schema?: GetGroupsSchema;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
