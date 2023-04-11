import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmAuthenticationConfigIdRequest extends SpeakeasyBase {
    /**
     * JSON describing new state of authenticator configuration
     */
    authenticatorConfigRepresentation: shared.AuthenticatorConfigRepresentation;
    /**
     * Configuration id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmAuthenticationConfigIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
