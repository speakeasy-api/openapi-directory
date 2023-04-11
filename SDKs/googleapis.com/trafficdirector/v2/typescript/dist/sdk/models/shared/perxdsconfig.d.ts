import { SpeakeasyBase } from "../../../internal/utils";
import { ClustersConfigDump } from "./clustersconfigdump";
import { ListenersConfigDump } from "./listenersconfigdump";
import { RoutesConfigDump } from "./routesconfigdump";
import { ScopedRoutesConfigDump } from "./scopedroutesconfigdump";
export declare enum PerXdsConfigStatusEnum {
    Unknown = "UNKNOWN",
    Synced = "SYNCED",
    NotSent = "NOT_SENT",
    Stale = "STALE",
    Error = "ERROR"
}
/**
 * Detailed config (per xDS) with status. [#next-free-field: 6]
 */
export declare class PerXdsConfig extends SpeakeasyBase {
    /**
     * Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.
     */
    clusterConfig?: ClustersConfigDump;
    /**
     * Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.
     */
    listenerConfig?: ListenersConfigDump;
    /**
     * Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.
     */
    routeConfig?: RoutesConfigDump;
    /**
     * Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.
     */
    scopedRouteConfig?: ScopedRoutesConfigDump;
    status?: PerXdsConfigStatusEnum;
}
