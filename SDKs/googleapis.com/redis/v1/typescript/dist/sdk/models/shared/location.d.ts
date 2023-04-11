import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource that represents Google Cloud Platform location.
 */
export declare class Location extends SpeakeasyBase {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
     */
    labels?: Record<string, string>;
    /**
     * Resource ID for the region. For example: "us-east1".
     */
    locationId?: string;
    /**
     * Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by Compute Engine. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance.
     */
    metadata?: Record<string, any>;
    /**
     * Full resource name for the region. For example: "projects/example-project/locations/us-east1".
     */
    name?: string;
}
