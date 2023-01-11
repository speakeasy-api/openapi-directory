import { SpeakeasyBase } from "../../../internal/utils";
import { StartActivityIntent } from "./startactivityintent";
/**
 * Message for specifying the start activities to crawl.
**/
export declare class RoboStartingIntent extends SpeakeasyBase {
    launcherActivity?: Record<string, any>;
    startActivity?: StartActivityIntent;
    timeout?: string;
}
