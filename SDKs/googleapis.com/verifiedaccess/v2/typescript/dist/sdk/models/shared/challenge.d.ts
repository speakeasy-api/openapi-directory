import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Result message for VerifiedAccess.GenerateChallenge.
 */
export declare class Challenge extends SpeakeasyBase {
    /**
     * Challenge generated with the old signing key, the bytes representation of SignedData (this will only be present during key rotation).
     */
    alternativeChallenge?: string;
    /**
     * Generated challenge, the bytes representation of SignedData.
     */
    challenge?: string;
}
