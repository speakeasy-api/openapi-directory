import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogLineageV1EntityReference } from "./googleclouddatacataloglineagev1entityreference";
/**
 * Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are created when LineageEvents record data transformation between related assets.
 */
export declare class GoogleCloudDatacatalogLineageV1Link extends SpeakeasyBase {
    /**
     * The end of the last event establishing this link.
     */
    endTime?: string;
    /**
     * Output only. Immutable. The name of the link. Format: `projects/{project}/locations/{location}/links/{link}`.
     */
    name?: string;
    /**
     * The soft reference to everything you can attach a lineage event to.
     */
    source?: GoogleCloudDatacatalogLineageV1EntityReference;
    /**
     * The start of the first event establishing this link.
     */
    startTime?: string;
    /**
     * The soft reference to everything you can attach a lineage event to.
     */
    target?: GoogleCloudDatacatalogLineageV1EntityReference;
}
