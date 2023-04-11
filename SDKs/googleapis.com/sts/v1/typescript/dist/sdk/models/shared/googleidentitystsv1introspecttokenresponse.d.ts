import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for IntrospectToken.
 */
export declare class GoogleIdentityStsV1IntrospectTokenResponse extends SpeakeasyBase {
    /**
     * A boolean value that indicates whether the provided access token is currently active.
     */
    active?: boolean;
    /**
     * The client identifier for the OAuth 2.0 client that requested the provided token.
     */
    clientId?: string;
    /**
     * The expiration timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token will expire.
     */
    exp?: string;
    /**
     * The issued timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token was originally issued.
     */
    iat?: string;
    /**
     * The issuer of the provided token.
     */
    iss?: string;
    /**
     * A list of scopes associated with the provided token.
     */
    scope?: string;
    /**
     * The unique user ID associated with the provided token. For Google Accounts, this value is based on the Google Account's user ID. For federated identities, this value is based on the identity pool ID and the value of the mapped `google.subject` attribute.
     */
    sub?: string;
    /**
     * The human-readable identifier for the token principal subject. For example, if the provided token is associated with a workload identity pool, this field contains a value in the following format: `principal://iam.googleapis.com/projects//locations/global/workloadIdentityPools//subject/`. If the provided token is associated with a workforce pool, this field contains a value in the following format: `principal://iam.googleapis.com/locations/global/workforcePools//subject/`.
     */
    username?: string;
}
