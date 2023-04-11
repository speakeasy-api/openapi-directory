import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Withdraws MultiFactorAuth response.
 */
export declare class GoogleCloudIdentitytoolkitV2WithdrawMfaResponse extends SpeakeasyBase {
    /**
     * ID token updated to reflect removal of the second factor.
     */
    idToken?: string;
    /**
     * Refresh token updated to reflect removal of the second factor.
     */
    refreshToken?: string;
}
