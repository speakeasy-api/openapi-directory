import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTeamMemberBookingProfilesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListTeamMemberBookingProfilesRequest extends SpeakeasyBase {
    /**
     * Indicates whether to include only bookable team members in the returned result (`true`) or not (`false`).
     */
    bookableOnly?: boolean;
    /**
     * The cursor for paginating through the results.
     */
    cursor?: string;
    /**
     * The maximum number of results to return.
     */
    limit?: number;
    /**
     * Indicates whether to include only team members enabled at the given location in the returned result.
     */
    locationId?: string;
}
export declare class ListTeamMemberBookingProfilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTeamMemberBookingProfilesResponse?: shared.ListTeamMemberBookingProfilesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
