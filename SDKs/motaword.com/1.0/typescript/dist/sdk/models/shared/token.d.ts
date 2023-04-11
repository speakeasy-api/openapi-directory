import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Authentication response
 */
export declare class Token extends SpeakeasyBase {
    accessToken?: string;
    expiresIn?: number;
    refreshToken?: string;
    scope?: string;
    tokenType?: string;
    userId?: number;
}
