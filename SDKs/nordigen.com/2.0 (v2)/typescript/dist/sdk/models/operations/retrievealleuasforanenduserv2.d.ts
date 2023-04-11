import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAllEUAsForAnEndUserV2Request extends SpeakeasyBase {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
}
export declare class RetrieveAllEUAsForAnEndUserV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Retrieve all end user agreements
     */
    paginatedEndUserAgreementList?: shared.PaginatedEndUserAgreementList;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid token
     */
    retrieveAllEUAsForAnEndUserV2401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    retrieveAllEUAsForAnEndUserV2403ApplicationJSONObject?: Record<string, any>;
    /**
     * Not found error
     */
    retrieveAllEUAsForAnEndUserV2404ApplicationJSONObject?: Record<string, any>;
}
