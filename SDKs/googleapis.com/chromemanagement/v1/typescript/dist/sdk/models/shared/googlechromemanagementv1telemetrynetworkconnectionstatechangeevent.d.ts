import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum {
    NetworkConnectionStateUnspecified = "NETWORK_CONNECTION_STATE_UNSPECIFIED",
    Online = "ONLINE",
    Connected = "CONNECTED",
    Portal = "PORTAL",
    Connecting = "CONNECTING",
    NotConnected = "NOT_CONNECTED"
}
/**
 * `TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes.
**/
export declare class GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent extends SpeakeasyBase {
    connectionState?: GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum;
    guid?: string;
}
