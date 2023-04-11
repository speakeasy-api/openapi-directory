import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientScopesIdScopeMappingsRealmRequest extends SpeakeasyBase {
    /**
     * id of client scope (not name)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientScopesIdScopeMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
