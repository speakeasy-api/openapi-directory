import { SpeakeasyBase } from "../../../internal/utils";
export declare class DynamicRouteConfig extends SpeakeasyBase {
    /**
     * The timestamp when the Route was last updated.
     */
    lastUpdated?: string;
    /**
     * The route config.
     */
    routeConfig?: Record<string, any>;
    /**
     * This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the route configuration was loaded.
     */
    versionInfo?: string;
}
