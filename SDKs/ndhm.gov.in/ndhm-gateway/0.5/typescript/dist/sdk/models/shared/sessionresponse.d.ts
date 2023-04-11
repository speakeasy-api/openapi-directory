import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class SessionResponse extends SpeakeasyBase {
    accessToken?: string;
    /**
     * In Minutes
     */
    expiresIn?: number;
    /**
     * In Minutes
     */
    refreshExpiresIn?: number;
    refreshToken?: string;
    tokenType?: string;
}
