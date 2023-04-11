import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmRolesRoleNameGroupsRequest extends SpeakeasyBase {
    /**
     * if false, return a full representation of the GroupRepresentation objects
     */
    briefRepresentation?: boolean;
    first?: number;
    max?: number;
    /**
     * realm name (not id!)
     */
    realm: string;
    roleName: string;
}
export declare class GetRealmRolesRoleNameGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    groupRepresentations?: shared.GroupRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
