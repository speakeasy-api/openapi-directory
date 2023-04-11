import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogLineageV1EntityReference } from "./googleclouddatacataloglineagev1entityreference";
/**
 * A lineage between source and target entities.
 */
export declare class GoogleCloudDatacatalogLineageV1EventLink extends SpeakeasyBase {
    /**
     * The soft reference to everything you can attach a lineage event to.
     */
    source?: GoogleCloudDatacatalogLineageV1EntityReference;
    /**
     * The soft reference to everything you can attach a lineage event to.
     */
    target?: GoogleCloudDatacatalogLineageV1EntityReference;
}
