import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRackReservationsListRequest extends SpeakeasyBase {
    created?: string;
    group?: string;
    groupId?: string;
    /**
     * Multiple values may be separated by commas.
     */
    idIn?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    q?: string;
    rackId?: string;
    site?: string;
    siteId?: string;
    tenant?: string;
    tenantId?: string;
    user?: string;
    userId?: string;
}
export declare class DcimRackReservationsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.RackReservation[];
}
export declare class DcimRackReservationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimRackReservationsList200ApplicationJSONObject?: DcimRackReservationsList200ApplicationJSON;
}
