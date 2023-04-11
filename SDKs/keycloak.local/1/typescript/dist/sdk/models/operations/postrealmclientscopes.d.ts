import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientScopesRequest extends SpeakeasyBase {
    clientScopeRepresentation: shared.ClientScopeRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientScopesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
