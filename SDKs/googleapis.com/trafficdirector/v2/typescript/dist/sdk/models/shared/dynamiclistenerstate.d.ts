import { SpeakeasyBase } from "../../../internal/utils";
export declare class DynamicListenerState extends SpeakeasyBase {
    /**
     * The timestamp when the Listener was last successfully updated.
     */
    lastUpdated?: string;
    /**
     * The listener config.
     */
    listener?: Record<string, any>;
    /**
     * This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the listener was loaded. In the future, discrete per-listener versions may be supported by the API.
     */
    versionInfo?: string;
}
