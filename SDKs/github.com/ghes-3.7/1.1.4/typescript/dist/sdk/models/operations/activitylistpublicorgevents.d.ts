import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityListPublicOrgEventsRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
export declare class ActivityListPublicOrgEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    events?: shared.Event[];
}
