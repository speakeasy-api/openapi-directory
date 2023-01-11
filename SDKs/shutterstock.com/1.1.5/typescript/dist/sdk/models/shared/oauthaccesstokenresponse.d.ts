import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Access token response to client apps
**/
export declare class OauthAccessTokenResponse extends SpeakeasyBase {
    accessToken: string;
    expiresIn?: number;
    refreshToken?: string;
    tokenType: string;
    userToken?: string;
}
