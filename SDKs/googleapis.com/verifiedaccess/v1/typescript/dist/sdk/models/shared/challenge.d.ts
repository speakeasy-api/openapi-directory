import { SpeakeasyBase } from "../../../internal/utils";
import { SignedData } from "./signeddata";
/**
 * Result message for VerifiedAccess.CreateChallenge.
 */
export declare class Challenge extends SpeakeasyBase {
    /**
     * The wrapper message of any data and its signature.
     */
    alternativeChallenge?: SignedData;
    /**
     * The wrapper message of any data and its signature.
     */
    challenge?: SignedData;
}
