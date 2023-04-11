import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * User request has been validated
 */
export declare class AccessTokenResponse extends SpeakeasyBase {
    /**
     * Bearer token used in headers to access secure endpoints
     *
     * @remarks
     *
     */
    accessToken?: string;
    /**
     * If the user is a payee then the payeeId<P>
     *
     * @remarks
     * If the user is a payor then the payorId
     *
     */
    entityIds?: string[];
    /**
     * The lifetime in seconds of the access token
     */
    expiresIn?: number;
    /**
     * can be used to obtain a new access token
     */
    refreshToken?: string;
    /**
     * the scope of the access token
     */
    scope?: string;
    /**
     * the type of the token
     */
    tokenType?: string;
    userInfo?: UserInfo;
}
