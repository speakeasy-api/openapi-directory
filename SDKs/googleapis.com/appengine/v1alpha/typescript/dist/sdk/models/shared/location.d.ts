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
     * The canonical id for this location. For example: "us-east1".
     */
    locationId?: string;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: Record<string, any>;
    /**
     * Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"
     */
    name?: string;
}
