import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The sorting order (case insensitive).
 */
export declare enum GetHeatingMarginCoverageDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetHeatingMarginCoverageRequest extends SpeakeasyBase {
    /**
     * The ID of the application.
     */
    applicationId?: string;
    /**
     * If set to <em>true</em>, only gets devices whose heating margin information is available.<br>Otherwise, gets any other devices.
     */
    covered?: boolean;
    /**
     * The sorting order (case insensitive).
     */
    direction?: GetHeatingMarginCoverageDirectionEnum;
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
export declare class GetHeatingMarginCoverageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
