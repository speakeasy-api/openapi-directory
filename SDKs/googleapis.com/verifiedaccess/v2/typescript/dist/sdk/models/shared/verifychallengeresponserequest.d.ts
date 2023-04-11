import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Signed ChallengeResponse.
 */
export declare class VerifyChallengeResponseRequest extends SpeakeasyBase {
    /**
     * Required. The generated response to the challenge, the bytes representation of SignedData.
     */
    challengeResponse?: string;
    /**
     * Optional. Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match.
     */
    expectedIdentity?: string;
}
