import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmAuthenticationConfigIdRequest extends SpeakeasyBase {
    /**
     * Configuration id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmAuthenticationConfigIdResponse extends SpeakeasyBase {
    /**
     * success
     */
    authenticatorConfigRepresentation?: shared.AuthenticatorConfigRepresentation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
