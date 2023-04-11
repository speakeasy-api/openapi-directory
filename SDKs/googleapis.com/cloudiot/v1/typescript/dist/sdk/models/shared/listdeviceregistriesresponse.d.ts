import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceRegistry } from "./deviceregistry";
/**
 * Response for `ListDeviceRegistries`.
 */
export declare class ListDeviceRegistriesResponse extends SpeakeasyBase {
    /**
     * The registries that matched the query.
     */
    deviceRegistries?: DeviceRegistry[];
    /**
     * If not empty, indicates that there may be more registries that match the request; this value should be passed in a new `ListDeviceRegistriesRequest`.
     */
    nextPageToken?: string;
}
