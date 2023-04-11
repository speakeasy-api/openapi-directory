import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
export declare enum NestedInterfaceConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}
export declare enum NestedInterfaceConnectionStatusValueEnum {
    False = "false",
    True = "true"
}
export declare class NestedInterfaceConnectionStatus extends SpeakeasyBase {
    label: NestedInterfaceConnectionStatusLabelEnum;
    value: NestedInterfaceConnectionStatusValueEnum;
}
export declare class NestedInterface extends SpeakeasyBase {
    cable?: number;
    connectionStatus?: NestedInterfaceConnectionStatus;
    device?: NestedDevice;
    id?: number;
    name: string;
    url?: string;
}
