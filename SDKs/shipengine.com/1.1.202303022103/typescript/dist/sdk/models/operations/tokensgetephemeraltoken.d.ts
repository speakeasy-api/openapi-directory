import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TokensGetEphemeralTokenRequest extends SpeakeasyBase {
    /**
     * Include a redirect url to the application formatted with the ephemeral token.
     */
    redirect?: shared.RedirectEnum;
}
export declare class TokensGetEphemeralTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tokensGetEphemeralTokenResponseBodyYaml?: shared.TokensGetEphemeralTokenResponseBodyYaml;
}
