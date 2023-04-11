import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmAuthenticationFlowsFlowAliasExecutionsRequest extends SpeakeasyBase {
    authenticationExecutionInfoRepresentation: shared.AuthenticationExecutionInfoRepresentation;
    /**
     * Flow alias
     */
    flowAlias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmAuthenticationFlowsFlowAliasExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
