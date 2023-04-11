import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmAuthenticationFlowsRequest extends SpeakeasyBase {
    /**
     * Authentication flow representation
     */
    authenticationFlowRepresentation: shared.AuthenticationFlowRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmAuthenticationFlowsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
