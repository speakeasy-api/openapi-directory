import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services.
 */
export declare class GoogleFirebaseAppcheckV1betaDebugToken extends SpeakeasyBase {
    /**
     * Required. A human readable display name used to identify this debug token.
     */
    displayName?: string;
    /**
     * Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```
     */
    name?: string;
    /**
     * Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response.
     */
    token?: string;
}
