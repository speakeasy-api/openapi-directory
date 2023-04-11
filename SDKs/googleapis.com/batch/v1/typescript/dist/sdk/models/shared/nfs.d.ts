import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an NFS volume.
 */
export declare class Nfs extends SpeakeasyBase {
    /**
     * Remote source path exported from the NFS, e.g., "/share".
     */
    remotePath?: string;
    /**
     * The IP address of the NFS.
     */
    server?: string;
}
