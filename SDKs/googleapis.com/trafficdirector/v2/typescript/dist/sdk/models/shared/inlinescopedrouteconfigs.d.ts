import { SpeakeasyBase } from "../../../internal/utils";
export declare class InlineScopedRouteConfigs extends SpeakeasyBase {
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
}
