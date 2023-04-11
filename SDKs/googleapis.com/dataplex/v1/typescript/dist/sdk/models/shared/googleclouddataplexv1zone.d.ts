import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetStatus } from "./googleclouddataplexv1assetstatus";
import { GoogleCloudDataplexV1ZoneDiscoverySpec } from "./googleclouddataplexv1zonediscoveryspec";
import { GoogleCloudDataplexV1ZoneResourceSpec } from "./googleclouddataplexv1zoneresourcespec";
/**
 * Output only. Current state of the zone.
 */
export declare enum GoogleCloudDataplexV1ZoneStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * Required. Immutable. The type of the zone.
 */
export declare enum GoogleCloudDataplexV1ZoneTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Raw = "RAW",
    Curated = "CURATED"
}
/**
 * A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
 */
export declare class GoogleCloudDataplexV1Zone extends SpeakeasyBase {
    /**
     * Aggregated status of the underlying assets of a lake or zone.
     */
    assetStatus?: GoogleCloudDataplexV1AssetStatus;
    /**
     * Output only. The time when the zone was created.
     */
    createTime?: string;
    /**
     * Optional. Description of the zone.
     */
    description?: string;
    /**
     * Settings to manage the metadata discovery and publishing in a zone.
     */
    discoverySpec?: GoogleCloudDataplexV1ZoneDiscoverySpec;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * Optional. User defined labels for the zone.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
     */
    name?: string;
    /**
     * Settings for resources attached as assets within a zone.
     */
    resourceSpec?: GoogleCloudDataplexV1ZoneResourceSpec;
    /**
     * Output only. Current state of the zone.
     */
    state?: GoogleCloudDataplexV1ZoneStateEnum;
    /**
     * Required. Immutable. The type of the zone.
     */
    type?: GoogleCloudDataplexV1ZoneTypeEnum;
    /**
     * Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name.
     */
    uid?: string;
    /**
     * Output only. The time when the zone was last updated.
     */
    updateTime?: string;
}
/**
 * A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
 */
export declare class GoogleCloudDataplexV1ZoneInput extends SpeakeasyBase {
    /**
     * Aggregated status of the underlying assets of a lake or zone.
     */
    assetStatus?: GoogleCloudDataplexV1AssetStatus;
    /**
     * Optional. Description of the zone.
     */
    description?: string;
    /**
     * Settings to manage the metadata discovery and publishing in a zone.
     */
    discoverySpec?: GoogleCloudDataplexV1ZoneDiscoverySpec;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * Optional. User defined labels for the zone.
     */
    labels?: Record<string, string>;
    /**
     * Settings for resources attached as assets within a zone.
     */
    resourceSpec?: GoogleCloudDataplexV1ZoneResourceSpec;
    /**
     * Required. Immutable. The type of the zone.
     */
    type?: GoogleCloudDataplexV1ZoneTypeEnum;
}
