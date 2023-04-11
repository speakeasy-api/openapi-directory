import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchGroupsRequest extends SpeakeasyBase {
    /**
     * Group name
     */
    filterName?: string;
    /**
     * Organization identifier
     */
    filterOrganization: string;
}
export declare class FetchGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchGroupsResponse?: shared.FetchGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
