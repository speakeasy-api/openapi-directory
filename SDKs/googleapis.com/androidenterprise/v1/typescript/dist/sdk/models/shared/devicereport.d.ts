import { SpeakeasyBase } from "../../../internal/utils";
import { AppState } from "./appstate";
/**
 * Device report updated with the latest app states for managed apps on the device.
 */
export declare class DeviceReport extends SpeakeasyBase {
    /**
     * List of app states set by managed apps on the device. App states are defined by the app's developers. This field will always be present.
     */
    appState?: AppState[];
    /**
     * The timestamp of the last report update in milliseconds since epoch. This field will always be present.
     */
    lastUpdatedTimestampMillis?: string;
}
