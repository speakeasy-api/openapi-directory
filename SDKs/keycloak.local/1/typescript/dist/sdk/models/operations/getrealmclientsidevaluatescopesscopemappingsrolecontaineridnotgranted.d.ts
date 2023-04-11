import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * either realm name OR client UUID
     */
    roleContainerId: string;
    scope?: string;
}
export declare class GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
