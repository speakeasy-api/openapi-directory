import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Digest holds a cryptographic message digest.
 */
export declare class Digest extends SpeakeasyBase {
    /**
     * A message digest produced with the SHA-256 algorithm.
     */
    sha256?: string;
    /**
     * A message digest produced with the SHA-384 algorithm.
     */
    sha384?: string;
    /**
     * A message digest produced with the SHA-512 algorithm.
     */
    sha512?: string;
}
