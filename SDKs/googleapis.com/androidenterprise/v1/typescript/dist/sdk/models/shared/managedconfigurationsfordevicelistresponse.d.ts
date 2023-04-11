import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedConfiguration } from "./managedconfiguration";
/**
 * Successful response
 */
export declare class ManagedConfigurationsForDeviceListResponse extends SpeakeasyBase {
    /**
     * A managed configuration for an app on a specific device.
     */
    managedConfigurationForDevice?: ManagedConfiguration[];
}
