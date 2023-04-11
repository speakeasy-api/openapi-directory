import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a statically loaded listener.
 */
export declare class StaticListener extends SpeakeasyBase {
    /**
     * The timestamp when the Listener was last successfully updated.
     */
    lastUpdated?: string;
    /**
     * The listener config.
     */
    listener?: Record<string, any>;
}
