import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAgentLocationsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the agent in Noyo
     */
    agentId: string;
    /**
     * The integer offset at which to start the page. Possible values are 0 to total_records - 1.
     */
    offset?: number;
    /**
     * The max size of each page of results
     */
    pageSize?: number;
}
export declare class GetAgentLocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Agents
     */
    paginatedAgentLocationResult?: shared.PaginatedAgentLocationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
