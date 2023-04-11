import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1ServicesRequest extends SpeakeasyBase {
    /**
     * Search All Locations, default is false
     */
    allLocations?: boolean;
    /**
     * Filter by default service, default is false
     */
    defaultService?: boolean;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * id of business location, defaults to primary business location
     */
    locationId?: string;
    /**
     * Filter by Name, supports Partial name search
     */
    name?: string;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * Filter by scope, Company, Location or All, default is All
     */
    scope?: shared.ServicesScopeEnum;
    /**
     * Filter by groupId
     */
    serviceGroupId?: number;
    /**
     * Filter by ServiceId, using this parameter would ignore all other parameters
     */
    serviceId?: string;
    /**
     * Sort results in Descending Order, default true
     */
    sortDescending?: boolean;
    /**
     * Sort results using Natural Sort or Sorted alphabetically by Service Names, default is natural
     */
    sortOrder?: shared.ServiceSortOrderEnum;
}
export declare class GetConsumerV1ServicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceListViewModel?: shared.ServiceListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
