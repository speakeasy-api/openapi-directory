import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Request to upload user account in batch.
 */
export declare class IdentitytoolkitRelyingpartyUploadAccountRequest extends SpeakeasyBase {
    /**
     * Whether allow overwrite existing account when user local_id exists.
     */
    allowOverwrite?: boolean;
    blockSize?: number;
    /**
     * The following 4 fields are for standard scrypt algorithm.
     */
    cpuMemCost?: number;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;
    dkLen?: number;
    /**
     * The password hash algorithm.
     */
    hashAlgorithm?: string;
    /**
     * Memory cost for hash calculation. Used by scrypt similar algorithms.
     */
    memoryCost?: number;
    parallelization?: number;
    /**
     * Rounds for hash calculation. Used by scrypt and similar algorithms.
     */
    rounds?: number;
    /**
     * The salt separator.
     */
    saltSeparator?: string;
    /**
     * If true, backend will do sanity check(including duplicate email and federated id) when uploading account.
     */
    sanityCheck?: boolean;
    /**
     * The key for to hash the password.
     */
    signerKey?: string;
    /**
     * Specify which project (field value is actually project id) to operate. Only used when provided credential.
     */
    targetProjectId?: string;
    /**
     * The account info to be stored.
     */
    users?: UserInfo[];
}
