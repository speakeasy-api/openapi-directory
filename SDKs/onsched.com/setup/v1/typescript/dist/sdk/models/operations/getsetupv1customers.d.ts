import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CustomersRequest extends SpeakeasyBase {
    /**
     * Filter by deleted status.
     */
    deleted?: boolean;
    /**
     * Filter by email address.
     */
    email?: string;
    /**
     * Filter by groupId
     */
    groupId?: string;
    /**
     * Search by lastname.
     */
    lastname?: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * id of business location, defaults to primary business location
     */
    locationId?: string;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
}
export declare class GetSetupV1CustomersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerListViewModel?: shared.CustomerListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
