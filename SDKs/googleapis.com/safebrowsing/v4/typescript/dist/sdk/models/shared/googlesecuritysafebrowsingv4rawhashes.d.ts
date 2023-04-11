import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.
 */
export declare class GoogleSecuritySafebrowsingV4RawHashes extends SpeakeasyBase {
    /**
     * The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash).
     */
    prefixSize?: number;
    /**
     * The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded.
     */
    rawHashes?: string;
}
