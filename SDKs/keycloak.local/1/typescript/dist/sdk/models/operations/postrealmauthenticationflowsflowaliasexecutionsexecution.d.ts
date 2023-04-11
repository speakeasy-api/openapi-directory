import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest extends SpeakeasyBase {
    /**
     * New execution JSON data containing 'provider' attribute
     */
    requestBody: Record<string, any>;
    /**
     * Alias of parent flow
     */
    flowAlias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
