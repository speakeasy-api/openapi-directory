import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostVolumesCreateVolumeRequest extends SpeakeasyBase {
    /**
     * Auto-mount Volume after attach. `server` must be provided.
     */
    automount?: boolean;
    /**
     * Format Volume after creation. One of: `xfs`, `ext4`
     */
    format?: string;
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * Location to create the Volume in (can be omitted if Server is specified)
     */
    location?: string;
    /**
     * Name of the volume
     */
    name: string;
    /**
     * Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server)
     */
    server?: number;
    /**
     * Size of the Volume in GB
     */
    size: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostVolumes201ApplicationJSONActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostVolumes201ApplicationJSONActionResources extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
/**
 * Status of the Action
 */
export declare enum PostVolumes201ApplicationJSONActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostVolumes201ApplicationJSONAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostVolumes201ApplicationJSONActionError;
    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
     */
    finished: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Progress of Action in percent
     */
    progress: number;
    /**
     * Resources the Action relates to
     */
    resources: PostVolumes201ApplicationJSONActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostVolumes201ApplicationJSONActionStatusEnum;
}
/**
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
 */
export declare class PostVolumes201ApplicationJSONVolumeLocation extends SpeakeasyBase {
    /**
     * City the Location is closest to
     */
    city: string;
    /**
     * ISO 3166-1 alpha-2 code of the country the Location resides in
     */
    country: string;
    /**
     * Description of the Location
     */
    description: string;
    /**
     * ID of the Location
     */
    id: number;
    /**
     * Latitude of the city closest to the Location
     */
    latitude: number;
    /**
     * Longitude of the city closest to the Location
     */
    longitude: number;
    /**
     * Unique identifier of the Location
     */
    name: string;
    /**
     * Name of network zone this Location resides in
     */
    networkZone: string;
}
/**
 * Protection configuration for the Resource
 */
export declare class PostVolumes201ApplicationJSONVolumeProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Current status of the Volume
 */
export declare enum PostVolumes201ApplicationJSONVolumeStatusEnum {
    Creating = "creating",
    Available = "available"
}
export declare class PostVolumes201ApplicationJSONVolume extends SpeakeasyBase {
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Filesystem of the Volume if formatted on creation, null if not formatted on creation
     */
    format: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    /**
     * Device path on the file system for the Volume
     */
    linuxDevice: string;
    /**
     * Location of the Volume. Volume can only be attached to Servers in the same Location.
     */
    location: PostVolumes201ApplicationJSONVolumeLocation;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Protection configuration for the Resource
     */
    protection: PostVolumes201ApplicationJSONVolumeProtection;
    /**
     * ID of the Server the Volume is attached to, null if it is not attached at all
     */
    server: number;
    /**
     * Size in GB of the Volume
     */
    size: number;
    /**
     * Current status of the Volume
     */
    status: PostVolumes201ApplicationJSONVolumeStatusEnum;
}
/**
 * The `volume` key contains the Volume that was just created
 *
 * @remarks
 *
 * The `action` key contains the Action tracking Volume creation
 *
 */
export declare class PostVolumes201ApplicationJSON extends SpeakeasyBase {
    action: PostVolumes201ApplicationJSONAction;
    nextActions: PostVolumes201ApplicationJSONAction[];
    volume: PostVolumes201ApplicationJSONVolume;
}
export declare class PostVolumesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `volume` key contains the Volume that was just created
     *
     * @remarks
     *
     * The `action` key contains the Action tracking Volume creation
     *
     */
    postVolumes201ApplicationJSONObject?: PostVolumes201ApplicationJSON;
}
