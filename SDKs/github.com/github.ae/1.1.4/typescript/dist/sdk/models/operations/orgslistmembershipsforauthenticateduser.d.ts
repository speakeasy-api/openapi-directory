import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Indicates the state of the memberships to return. If not specified, the API returns both active and pending memberships.
 */
export declare enum OrgsListMembershipsForAuthenticatedUserStateEnum {
    Active = "active",
    Pending = "pending"
}
export declare class OrgsListMembershipsForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * Indicates the state of the memberships to return. If not specified, the API returns both active and pending memberships.
     */
    state?: OrgsListMembershipsForAuthenticatedUserStateEnum;
}
export declare class OrgsListMembershipsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    orgMemberships?: shared.OrgMembership[];
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
