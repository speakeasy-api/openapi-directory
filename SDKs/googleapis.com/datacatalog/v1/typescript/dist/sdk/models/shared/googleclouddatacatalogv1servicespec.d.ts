import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1CloudBigtableInstanceSpec } from "./googleclouddatacatalogv1cloudbigtableinstancespec";
/**
 * Specification that applies to a Service resource. Valid only for entries with the `SERVICE` type.
 */
export declare class GoogleCloudDatacatalogV1ServiceSpec extends SpeakeasyBase {
    /**
     * Specification that applies to Instance entries that are part of `CLOUD_BIGTABLE` system. (user_specified_type)
     */
    cloudBigtableInstanceSpec?: GoogleCloudDatacatalogV1CloudBigtableInstanceSpec;
}
