import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchDevicesRequest extends SpeakeasyBase {
    /**
     * The ID of the application.
     */
    applicationId?: string;
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
     * Space-separated search criteria.
     */
    searchTerms: string;
    /**
     * The ID of the service.
     */
    serviceId?: string;
}
export declare class SearchDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
