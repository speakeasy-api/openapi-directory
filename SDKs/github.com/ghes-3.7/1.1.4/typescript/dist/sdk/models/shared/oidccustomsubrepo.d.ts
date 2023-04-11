import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Actions OIDC subject customization for a repository
 */
export declare class OidcCustomSubRepo extends SpeakeasyBase {
    /**
     * Array of unique strings. Each claim key can only contain alphanumeric characters and underscores. This property will only appear in the response body if it was already set using the organization-level endpoint, "Set the customization template for an OIDC subject claim for an organization".
     */
    includeClaimKeys?: string[];
    /**
     * Whether to use the default template or not. If `true`, the `include_claim_keys` field is ignored.
     */
    useDefault: boolean;
}
