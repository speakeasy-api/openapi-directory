import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the GKE cluster from which this Backup was created.
 */
export declare class ClusterMetadata extends SpeakeasyBase {
    /**
     * Anthos version
     */
    anthosVersion?: string;
    /**
     * A list of the Backup for GKE CRD versions found in the cluster.
     */
    backupCrdVersions?: Record<string, string>;
    /**
     * The source cluster from which this Backup was created. Valid formats: - `projects/* /locations/* /clusters/*` - `projects/* /zones/* /clusters/*` This is inherited from the parent BackupPlan's cluster field.
     */
    cluster?: string;
    /**
     * GKE version
     */
    gkeVersion?: string;
    /**
     * The Kubernetes server version of the source cluster.
     */
    k8sVersion?: string;
}
