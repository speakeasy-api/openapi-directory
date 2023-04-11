import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TotpMFAProviderConfig represents the TOTP based MFA provider.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig extends SpeakeasyBase {
    /**
     * The allowed number of adjacent intervals that will be used for verification to avoid clock skew.
     */
    adjacentIntervals?: number;
}
