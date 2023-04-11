import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicListener } from "./dynamiclistener";
import { StaticListener } from "./staticlistener";
/**
 * Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.
 */
export declare class ListenersConfigDump extends SpeakeasyBase {
    /**
     * State for any warming, active, or draining listeners.
     */
    dynamicListeners?: DynamicListener[];
    /**
     * The statically loaded listener configs.
     */
    staticListeners?: StaticListener[];
    /**
     * This is the :ref:`version_info ` in the last processed LDS discovery response. If there are only static bootstrap listeners, this field will be "".
     */
    versionInfo?: string;
}
