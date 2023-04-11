import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The sorting order (case insensitive).
 */
export declare enum GetDevicesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetDevicesRequest extends SpeakeasyBase {
    /**
     * The ID of the application.
     */
    applicationId?: string;
    /**
     * The sorting order (case insensitive).
     */
    direction?: GetDevicesDirectionEnum;
    /**
     * The ID of the group.
     */
    groupId?: string;
    /**
     * The maximum number of entries per page.
     */
    limit?: number;
    /**
     * The page number to retrieve (first page is 0).
     */
    page?: string;
    /**
     * The ID of the service.
     */
    serviceId?: string;
    /**
     * The column to sort by (case insensitive).
     */
    sort?: string;
}
export declare class GetDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
