import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientScopesIdRequest extends SpeakeasyBase {
    /**
     * id of client scope (not name)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientScopesIdResponse extends SpeakeasyBase {
    /**
     * success
     */
    clientScopeRepresentation?: shared.ClientScopeRepresentation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
