import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for the `WatchVariable()` method.
 */
export declare class WatchVariableRequest extends SpeakeasyBase {
    /**
     * If specified, checks the current timestamp of the variable and if the current timestamp is newer than `newerThan` timestamp, the method returns immediately. If not specified or the variable has an older timestamp, the watcher waits for a the value to change before returning.
     */
    newerThan?: string;
}
