import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The expected state of a client's local database.
 */
export declare class GoogleSecuritySafebrowsingV4Checksum extends SpeakeasyBase {
    /**
     * The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database.
     */
    sha256?: string;
}
