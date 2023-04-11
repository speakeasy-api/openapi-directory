import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.
 */
export declare class GoogleSecuritySafebrowsingV4ThreatEntry extends SpeakeasyBase {
    /**
     * The digest of an executable in SHA256 format. The API supports both binary and hex digests. For JSON requests, digests are base64-encoded.
     */
    digest?: string;
    /**
     * A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded.
     */
    hash?: string;
    /**
     * A URL.
     */
    url?: string;
}
