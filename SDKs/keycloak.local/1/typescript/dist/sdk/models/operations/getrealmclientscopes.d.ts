import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientScopesRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientScopesResponse extends SpeakeasyBase {
    /**
     * success
     */
    clientScopeRepresentations?: shared.ClientScopeRepresentation[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
