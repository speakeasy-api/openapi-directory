import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File information about the related binary/library used by an executable, or the script used by a script interpreter
 */
export declare class File extends SpeakeasyBase {
    /**
     * Prefix of the file contents as a JSON encoded string. (Currently only populated for Malicious Script Executed findings.)
     */
    contents?: string;
    /**
     * The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file.
     */
    hashedSize?: string;
    /**
     * True when the hash covers only a prefix of the file.
     */
    partiallyHashed?: boolean;
    /**
     * Absolute path of the file as a JSON encoded string.
     */
    path?: string;
    /**
     * SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file.
     */
    sha256?: string;
    /**
     * Size of the file in bytes.
     */
    size?: string;
}
