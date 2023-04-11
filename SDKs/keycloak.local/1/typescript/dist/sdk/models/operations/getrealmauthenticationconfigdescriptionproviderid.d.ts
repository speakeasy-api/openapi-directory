import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmAuthenticationConfigDescriptionProviderIdRequest extends SpeakeasyBase {
    providerId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmAuthenticationConfigDescriptionProviderIdResponse extends SpeakeasyBase {
    /**
     * success
     */
    authenticatorConfigInfoRepresentation?: shared.AuthenticatorConfigInfoRepresentation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
