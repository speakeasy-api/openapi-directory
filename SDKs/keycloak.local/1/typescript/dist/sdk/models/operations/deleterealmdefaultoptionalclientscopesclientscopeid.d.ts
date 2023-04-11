import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmDefaultOptionalClientScopesClientScopeIdRequest extends SpeakeasyBase {
    clientScopeId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmDefaultOptionalClientScopesClientScopeIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
