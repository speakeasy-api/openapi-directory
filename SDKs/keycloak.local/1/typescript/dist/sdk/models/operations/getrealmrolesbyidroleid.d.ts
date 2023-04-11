import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmRolesByIdRoleIdRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * id of role
     */
    roleId: string;
}
export declare class GetRealmRolesByIdRoleIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentation?: shared.RoleRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
