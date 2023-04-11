import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAllRequisitionsRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
}
export declare class RetrieveAllRequisitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Retrieve all requisitions
     */
    paginatedRequisitionV2List?: shared.PaginatedRequisitionV2List;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unknown Fields
     */
    retrieveAllRequisitions400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    retrieveAllRequisitions401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    retrieveAllRequisitions403ApplicationJSONObject?: Record<string, any>;
    /**
     * Not found error
     */
    retrieveAllRequisitions404ApplicationJSONObject?: Record<string, any>;
}
