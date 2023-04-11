import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmEventsRequest extends SpeakeasyBase {
    /**
     * App or oauth client name
     */
    client?: string;
    /**
     * From date
     */
    dateFrom?: string;
    /**
     * To date
     */
    dateTo?: string;
    /**
     * Paging offset
     */
    first?: number;
    /**
     * IP address
     */
    ipAddress?: string;
    /**
     * Maximum results size (defaults to 100)
     */
    max?: number;
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * The types of events to return
     */
    type?: string[];
    /**
     * User id
     */
    user?: string;
}
export declare class GetRealmEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    eventRepresentations?: shared.EventRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
