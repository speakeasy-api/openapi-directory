import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedConfiguration } from "./managedconfiguration";
/**
 * Successful response
 */
export declare class ManagedConfigurationsForUserListResponse extends SpeakeasyBase {
    /**
     * A managed configuration for an app for a specific user.
     */
    managedConfigurationForUser?: ManagedConfiguration[];
}
