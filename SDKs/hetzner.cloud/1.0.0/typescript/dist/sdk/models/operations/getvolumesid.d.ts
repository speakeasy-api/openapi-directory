import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVolumesIdRequest extends SpeakeasyBase {
    /**
     * ID of the Volume
     */
    id: number;
}
/**
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
 */
export declare class GetVolumesId200ApplicationJSONVolumeLocation extends SpeakeasyBase {
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
export declare class GetVolumesId200ApplicationJSONVolumeProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Current status of the Volume
 */
export declare enum GetVolumesId200ApplicationJSONVolumeStatusEnum {
    Creating = "creating",
    Available = "available"
}
export declare class GetVolumesId200ApplicationJSONVolume extends SpeakeasyBase {
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
    location: GetVolumesId200ApplicationJSONVolumeLocation;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Protection configuration for the Resource
     */
    protection: GetVolumesId200ApplicationJSONVolumeProtection;
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
    status: GetVolumesId200ApplicationJSONVolumeStatusEnum;
}
/**
 * The `volume` key contains the volume
 */
export declare class GetVolumesId200ApplicationJSON extends SpeakeasyBase {
    volume: GetVolumesId200ApplicationJSONVolume;
}
export declare class GetVolumesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `volume` key contains the volume
     */
    getVolumesId200ApplicationJSONObject?: GetVolumesId200ApplicationJSON;
}
