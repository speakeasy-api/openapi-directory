import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec } from "./googleclouddatacatalogv1cloudbigtableinstancespeccloudbigtableclusterspec";
/**
 * Specification that applies to Instance entries that are part of `CLOUD_BIGTABLE` system. (user_specified_type)
 */
export declare class GoogleCloudDatacatalogV1CloudBigtableInstanceSpec extends SpeakeasyBase {
    /**
     * The list of clusters for the Instance.
     */
    cloudBigtableClusterSpecs?: GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec[];
}
