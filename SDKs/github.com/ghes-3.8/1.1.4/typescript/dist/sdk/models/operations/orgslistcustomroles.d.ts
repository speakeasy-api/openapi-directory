import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsListCustomRolesRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the organization.
     */
    organizationId: string;
}
/**
 * Response - list of custom role names
 */
export declare class OrgsListCustomRoles200ApplicationJSON extends SpeakeasyBase {
    customRoles?: shared.OrganizationCustomRepositoryRole[];
    /**
     * The number of custom roles in this organization
     */
    totalCount?: number;
}
export declare class OrgsListCustomRolesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response - list of custom role names
     */
    orgsListCustomRoles200ApplicationJSONObject?: OrgsListCustomRoles200ApplicationJSON;
}
