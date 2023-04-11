import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmRolesByIdRoleIdCompositesRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * Role id
     */
    roleId: string;
}
export declare class GetRealmRolesByIdRoleIdCompositesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
