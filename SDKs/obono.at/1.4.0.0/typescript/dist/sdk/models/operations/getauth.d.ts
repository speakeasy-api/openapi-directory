import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAuthResponse extends SpeakeasyBase {
    /**
     * The JWT `accessToken` to use for accessing secured resourced as well as the `registrierkassenUuid` of the corresponding "Registrierkasse".
     */
    authResult?: shared.AuthResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
