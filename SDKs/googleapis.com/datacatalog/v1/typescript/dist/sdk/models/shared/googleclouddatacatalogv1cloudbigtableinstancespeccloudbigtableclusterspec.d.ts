import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Spec that applies to clusters of an Instance of Cloud Bigtable.
 */
export declare class GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec extends SpeakeasyBase {
    /**
     * Name of the cluster.
     */
    displayName?: string;
    /**
     * A link back to the parent resource, in this case Instance.
     */
    linkedResource?: string;
    /**
     * Location of the cluster, typically a Cloud zone.
     */
    location?: string;
    /**
     * Type of the resource. For a cluster this would be "CLUSTER".
     */
    type?: string;
}
