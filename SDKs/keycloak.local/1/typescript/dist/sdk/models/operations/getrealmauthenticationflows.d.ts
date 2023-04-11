import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmAuthenticationFlowsRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmAuthenticationFlowsResponse extends SpeakeasyBase {
    /**
     * success
     */
    authenticationFlowRepresentations?: shared.AuthenticationFlowRepresentation[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
