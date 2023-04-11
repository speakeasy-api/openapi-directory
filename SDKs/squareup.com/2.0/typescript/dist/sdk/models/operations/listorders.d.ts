import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListOrdersSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListOrdersRequest extends SpeakeasyBase {
    /**
     * A pagination cursor to retrieve the next set of results for your
     *
     * @remarks
     * original query to the endpoint.
     */
    batchToken?: string;
    /**
     * The maximum number of payments to return in a single response. This value cannot exceed 200.
     */
    limit?: number;
    /**
     * The ID of the location to list online store orders for.
     */
    locationId: string;
    /**
     * The order in which payments are listed in the response.
     */
    order?: string;
}
export declare class ListOrdersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Orders?: shared.V1Order[];
}
