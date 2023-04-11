import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutRealmDefaultOptionalClientScopesClientScopeIdRequest extends SpeakeasyBase {
    clientScopeId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmDefaultOptionalClientScopesClientScopeIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
