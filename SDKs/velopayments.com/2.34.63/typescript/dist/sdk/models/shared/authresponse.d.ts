import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Valid Authenication response
 */
export declare class AuthResponse extends SpeakeasyBase {
    accessToken: string;
    entityIds?: string[];
    expiresIn?: number;
    refreshToken?: string;
    scope?: string;
    tokenType: string;
}
