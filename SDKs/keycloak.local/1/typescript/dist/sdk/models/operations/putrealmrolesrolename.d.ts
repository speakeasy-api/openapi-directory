import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmRolesRoleNameRequest extends SpeakeasyBase {
    roleRepresentation: shared.RoleRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * role’s name (not id!)
     */
    roleName: string;
}
export declare class PutRealmRolesRoleNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
