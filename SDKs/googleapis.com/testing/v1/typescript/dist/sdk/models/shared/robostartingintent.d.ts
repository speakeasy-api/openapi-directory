import { SpeakeasyBase } from "../../../internal/utils";
import { StartActivityIntent } from "./startactivityintent";
/**
 * Message for specifying the start activities to crawl.
 */
export declare class RoboStartingIntent extends SpeakeasyBase {
    /**
     * Specifies an intent that starts the main launcher activity.
     */
    launcherActivity?: Record<string, any>;
    /**
     * A starting intent specified by an action, uri, and categories.
     */
    startActivity?: StartActivityIntent;
    /**
     * Timeout in seconds for each intent.
     */
    timeout?: string;
}
