import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmRolesByIdRoleIdCompositesRequest extends SpeakeasyBase {
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
export declare class PostRealmRolesByIdRoleIdCompositesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
