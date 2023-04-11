import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest extends SpeakeasyBase {
    /**
     * New authentication flow / execution JSON data containing 'alias', 'type', 'provider', and 'description' attributes
     */
    requestBody: Record<string, any>;
    /**
     * Alias of parent authentication flow
     */
    flowAlias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
