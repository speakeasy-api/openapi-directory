import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmDefaultDefaultClientScopesClientScopeIdRequest extends SpeakeasyBase {
    clientScopeId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmDefaultDefaultClientScopesClientScopeIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
