import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListWorkweekConfigsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListWorkweekConfigsRequest extends SpeakeasyBase {
    /**
     * A pointer to the next page of `WorkweekConfig` results to fetch.
     */
    cursor?: string;
    /**
     * The maximum number of `WorkweekConfigs` results to return per page.
     */
    limit?: number;
}
export declare class ListWorkweekConfigsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listWorkweekConfigsResponse?: shared.ListWorkweekConfigsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
