import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmRolesByIdRoleIdCompositesRealmRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
    roleId: string;
}
export declare class GetRealmRolesByIdRoleIdCompositesRealmResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
