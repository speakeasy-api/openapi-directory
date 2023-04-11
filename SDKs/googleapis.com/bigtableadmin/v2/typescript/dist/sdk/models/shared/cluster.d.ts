import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfig } from "./clusterconfig";
import { EncryptionConfig } from "./encryptionconfig";
/**
 * Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden.
 */
export declare enum ClusterDefaultStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED",
    Ssd = "SSD",
    Hdd = "HDD"
}
/**
 * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
 */
export declare class ClusterInput extends SpeakeasyBase {
    /**
     * Configuration for a cluster.
     */
    clusterConfig?: ClusterConfig;
    /**
     * Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden.
     */
    defaultStorageType?: ClusterDefaultStorageTypeEnum;
    /**
     * Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected cluster.
     */
    encryptionConfig?: EncryptionConfig;
    /**
     * Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/{project}/locations/{zone}`.
     */
    location?: string;
    /**
     * The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.
     */
    name?: string;
    /**
     * The number of nodes allocated to this cluster. More nodes enable higher throughput and more consistent performance.
     */
    serveNodes?: number;
}
/**
 * Output only. The current state of the cluster.
 */
export declare enum ClusterStateEnum {
    StateNotKnown = "STATE_NOT_KNOWN",
    Ready = "READY",
    Creating = "CREATING",
    Resizing = "RESIZING",
    Disabled = "DISABLED"
}
/**
 * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
 */
export declare class Cluster extends SpeakeasyBase {
    /**
     * Configuration for a cluster.
     */
    clusterConfig?: ClusterConfig;
    /**
     * Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden.
     */
    defaultStorageType?: ClusterDefaultStorageTypeEnum;
    /**
     * Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected cluster.
     */
    encryptionConfig?: EncryptionConfig;
    /**
     * Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/{project}/locations/{zone}`.
     */
    location?: string;
    /**
     * The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.
     */
    name?: string;
    /**
     * The number of nodes allocated to this cluster. More nodes enable higher throughput and more consistent performance.
     */
    serveNodes?: number;
    /**
     * Output only. The current state of the cluster.
     */
    state?: ClusterStateEnum;
}
