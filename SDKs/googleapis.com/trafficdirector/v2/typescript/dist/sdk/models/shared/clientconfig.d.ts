import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
import { PerXdsConfig } from "./perxdsconfig";
/**
 * All xds configs for a particular client.
 */
export declare class ClientConfig extends SpeakeasyBase {
    /**
     * Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 12]
     */
    node?: Node;
    xdsConfig?: PerXdsConfig[];
}
