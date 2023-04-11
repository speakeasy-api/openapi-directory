import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientScopesIdScopeMappingsRealmRequest extends SpeakeasyBase {
    requestBody: shared.RoleRepresentation[];
    /**
     * id of client scope (not name)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientScopesIdScopeMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
