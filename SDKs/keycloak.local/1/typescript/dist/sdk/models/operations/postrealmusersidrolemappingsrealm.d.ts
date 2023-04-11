import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmUsersIdRoleMappingsRealmRequest extends SpeakeasyBase {
    /**
     * Roles to add
     */
    requestBody: shared.RoleRepresentation[];
    /**
     * User id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmUsersIdRoleMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
