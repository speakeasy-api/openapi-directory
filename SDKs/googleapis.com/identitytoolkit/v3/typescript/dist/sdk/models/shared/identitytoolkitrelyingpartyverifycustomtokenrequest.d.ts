import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to verify a custom token
 */
export declare class IdentitytoolkitRelyingpartyVerifyCustomTokenRequest extends SpeakeasyBase {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;
    /**
     * Instance id token of the app.
     */
    instanceId?: string;
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean;
    /**
     * The custom token to verify
     */
    token?: string;
}
