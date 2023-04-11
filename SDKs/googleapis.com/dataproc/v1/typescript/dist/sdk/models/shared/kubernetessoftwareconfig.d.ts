import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The software configuration for this Dataproc cluster running on Kubernetes.
 */
export declare class KubernetesSoftwareConfig extends SpeakeasyBase {
    /**
     * The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified.
     */
    componentVersion?: Record<string, string>;
    /**
     * The properties to set on daemon config files.Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image. The following are supported prefixes and their mappings: spark: spark-defaults.confFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
     */
    properties?: Record<string, string>;
}
