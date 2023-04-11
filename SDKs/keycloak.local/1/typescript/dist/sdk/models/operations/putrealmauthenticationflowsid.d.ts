import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmAuthenticationFlowsIdRequest extends SpeakeasyBase {
    /**
     * Authentication flow representation
     */
    authenticationFlowRepresentation: shared.AuthenticationFlowRepresentation;
    /**
     * Flow id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmAuthenticationFlowsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
