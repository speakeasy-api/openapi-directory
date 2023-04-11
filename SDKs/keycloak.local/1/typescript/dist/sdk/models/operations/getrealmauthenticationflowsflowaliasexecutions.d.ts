import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmAuthenticationFlowsFlowAliasExecutionsRequest extends SpeakeasyBase {
    /**
     * Flow alias
     */
    flowAlias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmAuthenticationFlowsFlowAliasExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
