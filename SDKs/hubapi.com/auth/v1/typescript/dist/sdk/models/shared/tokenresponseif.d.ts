import { SpeakeasyBase } from "../../../internal/utils";
/**
 * successful operation
 */
export declare class TokenResponseIF extends SpeakeasyBase {
    accessToken: string;
    expiresIn: number;
    idToken?: string;
    refreshToken: string;
    tokenType: string;
}
