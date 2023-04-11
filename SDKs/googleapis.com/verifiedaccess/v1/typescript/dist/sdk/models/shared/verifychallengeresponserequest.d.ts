import { SpeakeasyBase } from "../../../internal/utils";
import { SignedData } from "./signeddata";
/**
 * signed ChallengeResponse
 */
export declare class VerifyChallengeResponseRequest extends SpeakeasyBase {
    /**
     * The wrapper message of any data and its signature.
     */
    challengeResponse?: SignedData;
    /**
     * Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match.
     */
    expectedIdentity?: string;
}
