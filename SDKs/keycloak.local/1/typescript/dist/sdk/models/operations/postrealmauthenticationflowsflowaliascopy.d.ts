import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRealmAuthenticationFlowsFlowAliasCopyRequest extends SpeakeasyBase {
    /**
     * JSON containing 'newName' attribute
     */
    requestBody: Record<string, any>;
    /**
     * Name of the existing authentication flow
     */
    flowAlias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmAuthenticationFlowsFlowAliasCopyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
