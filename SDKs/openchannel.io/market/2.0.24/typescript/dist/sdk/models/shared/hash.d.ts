import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The hashes requested for the file.
 */
export declare class Hash extends SpeakeasyBase {
    /**
     * The MD5 hash for this uploaded file.
     */
    md5?: string;
    /**
     * The SHA-1 hash for this uploaded file.
     */
    sha1?: string;
    /**
     * The SHA-256 hash for this uploaded file.
     */
    sha256?: string;
}
