import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a proof from an external identity provider.
 *
 * @see {@link https://docs.joinmastodon.org/entities/identityproof/}
 */
export declare class IdentityProof extends SpeakeasyBase {
    /**
     * The account owner's profile URL on the identity provider.
     */
    profileUrl?: string;
    /**
     * A link to a statement of identity proof, hosted by the identity provider.
     */
    proofUrl?: string;
    /**
     * The name of the identity provider.
     */
    provider?: string;
    /**
     * The account owner's username on the identity provider's service.
     */
    providerUsername?: string;
    /**
     * When the identity proof was last updated. ISO 8601 Datetime.
     */
    updatedAt?: string;
}
