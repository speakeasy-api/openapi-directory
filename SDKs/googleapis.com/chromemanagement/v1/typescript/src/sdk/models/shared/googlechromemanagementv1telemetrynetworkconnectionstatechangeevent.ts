import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum {
    NetworkConnectionStateUnspecified = "NETWORK_CONNECTION_STATE_UNSPECIFIED",
    Online = "ONLINE",
    Connected = "CONNECTED",
    Portal = "PORTAL",
    Connecting = "CONNECTING",
    NotConnected = "NOT_CONNECTED"
}


// GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent
/** 
 * `TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes.
**/
export class GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionState" })
  connectionState?: GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=guid" })
  guid?: string;
}
