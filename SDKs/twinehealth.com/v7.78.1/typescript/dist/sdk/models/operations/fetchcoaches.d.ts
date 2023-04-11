import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchCoachesRequest extends SpeakeasyBase {
    /**
     * Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.
     *
     * @remarks
     *
     */
    filterGroups?: string;
    /**
     * Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.
     *
     * @remarks
     *
     */
    filterOrganization?: string;
}
export declare class FetchCoachesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fetchCoachesResponse?: shared.FetchCoachesResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
