import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";
/**
 * BackupConfig defines the configuration of Backups created via this BackupPlan.
 */
export declare class BackupConfig extends SpeakeasyBase {
    /**
     * If True, include all namespaced resources
     */
    allNamespaces?: boolean;
    /**
     * Defined a customer managed encryption key that will be used to encrypt Backup artifacts.
     */
    encryptionKey?: EncryptionKey;
    /**
     * This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups. Default: False
     */
    includeSecrets?: boolean;
    /**
     * This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup. Default: False
     */
    includeVolumeData?: boolean;
    /**
     * A list of namespaced Kubernetes resources.
     */
    selectedApplications?: NamespacedNames;
    /**
     * A list of Kubernetes Namespaces
     */
    selectedNamespaces?: Namespaces;
}
