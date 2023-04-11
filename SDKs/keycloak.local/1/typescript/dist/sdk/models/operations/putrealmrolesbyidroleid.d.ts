import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmRolesByIdRoleIdRequest extends SpeakeasyBase {
    roleRepresentation: shared.RoleRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * id of role
     */
    roleId: string;
}
export declare class PutRealmRolesByIdRoleIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
