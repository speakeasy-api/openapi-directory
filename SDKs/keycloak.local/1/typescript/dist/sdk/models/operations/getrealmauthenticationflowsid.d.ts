import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmAuthenticationFlowsIdRequest extends SpeakeasyBase {
    /**
     * Flow id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmAuthenticationFlowsIdResponse extends SpeakeasyBase {
    /**
     * success
     */
    authenticationFlowRepresentation?: shared.AuthenticationFlowRepresentation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
