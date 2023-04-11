import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ServicesRequest extends SpeakeasyBase {
    /**
     * Filter by deleted status
     */
    deleted?: boolean;
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
    /**
     * Filter services by groupId
     */
    serviceGroupId?: number;
}
export declare class GetSetupV1ServicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceListViewModel?: shared.ServiceListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
