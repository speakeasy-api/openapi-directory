import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogLineageV1EventLink } from "./googleclouddatacataloglineagev1eventlink";
/**
 * A lineage event represents an operation on assets. Within the operation, the data flows from the source to the target defined in the links field.
 */
export declare class GoogleCloudDatacatalogLineageV1LineageEvent extends SpeakeasyBase {
    /**
     * Optional. The end of the transformation which resulted in this lineage event. For streaming scenarios, it should be the end of the period from which the lineage is being reported.
     */
    endTime?: string;
    /**
     * Optional. List of source-target pairs. Can't contain more than 100 tuples.
     */
    links?: GoogleCloudDatacatalogLineageV1EventLink[];
    /**
     * Immutable. The resource name of the lineage event. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}/lineageEvents/{lineage_event}`. Can be specified or auto-assigned. {lineage_event} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     */
    name?: string;
    /**
     * Optional. The beginning of the transformation which resulted in this lineage event. For streaming scenarios, it should be the beginning of the period from which the lineage is being reported.
     */
    startTime?: string;
}
