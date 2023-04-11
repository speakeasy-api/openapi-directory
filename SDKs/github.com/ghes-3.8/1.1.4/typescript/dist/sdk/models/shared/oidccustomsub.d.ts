import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Actions OIDC Subject customization
 */
export declare class OidcCustomSub extends SpeakeasyBase {
    /**
     * Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.
     */
    includeClaimKeys: string[];
}
