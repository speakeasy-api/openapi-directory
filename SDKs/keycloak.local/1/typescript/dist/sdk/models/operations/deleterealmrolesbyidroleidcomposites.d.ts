import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteRealmRolesByIdRoleIdCompositesRequest extends SpeakeasyBase {
    /**
     * A set of roles to be removed
     */
    requestBody: shared.RoleRepresentation[];
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * Role id
     */
    roleId: string;
}
export declare class DeleteRealmRolesByIdRoleIdCompositesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
