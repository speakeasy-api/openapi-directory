import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4RawHashes } from "./googlesecuritysafebrowsingv4rawhashes";
import { GoogleSecuritySafebrowsingV4RawIndices } from "./googlesecuritysafebrowsingv4rawindices";
import { GoogleSecuritySafebrowsingV4RiceDeltaEncoding } from "./googlesecuritysafebrowsingv4ricedeltaencoding";
/**
 * The compression type for the entries in this set.
 */
export declare enum GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum {
    CompressionTypeUnspecified = "COMPRESSION_TYPE_UNSPECIFIED",
    Raw = "RAW",
    Rice = "RICE"
}
/**
 * A set of threats that should be added or removed from a client's local database.
 */
export declare class GoogleSecuritySafebrowsingV4ThreatEntrySet extends SpeakeasyBase {
    /**
     * The compression type for the entries in this set.
     */
    compressionType?: GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum;
    /**
     * The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.
     */
    rawHashes?: GoogleSecuritySafebrowsingV4RawHashes;
    /**
     * A set of raw indices to remove from a local list.
     */
    rawIndices?: GoogleSecuritySafebrowsingV4RawIndices;
    /**
     * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
     */
    riceHashes?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;
    /**
     * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
     */
    riceIndices?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;
}
