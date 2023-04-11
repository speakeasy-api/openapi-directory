import { SpeakeasyBase } from "../../../internal/utils";
export declare class DynamicScopedRouteConfigs extends SpeakeasyBase {
    /**
     * The timestamp when the scoped route config set was last updated.
     */
    lastUpdated?: string;
    /**
     * The name assigned to the scoped route configurations.
     */
    name?: string;
    /**
     * The scoped route configurations.
     */
    scopedRouteConfigs?: Record<string, any>[];
    /**
     * This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the scoped routes configuration was loaded.
     */
    versionInfo?: string;
}
