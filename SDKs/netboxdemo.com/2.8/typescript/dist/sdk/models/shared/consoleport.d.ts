import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCable } from "./nestedcable";
import { NestedDevice } from "./nesteddevice";
export declare enum ConsolePortConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}
export declare enum ConsolePortConnectionStatusValueEnum {
    False = "false",
    True = "true"
}
export declare class ConsolePortConnectionStatus extends SpeakeasyBase {
    label: ConsolePortConnectionStatusLabelEnum;
    value: ConsolePortConnectionStatusValueEnum;
}
export declare enum ConsolePortTypeLabelEnum {
    De9 = "DE-9",
    Db25 = "DB-25",
    Rj11 = "RJ-11",
    Rj12 = "RJ-12",
    Rj45 = "RJ-45",
    USBTypeA = "USB Type A",
    USBTypeB = "USB Type B",
    USBTypeC = "USB Type C",
    USBMiniA = "USB Mini A",
    USBMiniB = "USB Mini B",
    USBMicroA = "USB Micro A",
    USBMicroB = "USB Micro B",
    Other = "Other"
}
export declare enum ConsolePortTypeValueEnum {
    De9 = "de-9",
    Db25 = "db-25",
    Rj11 = "rj-11",
    Rj12 = "rj-12",
    Rj45 = "rj-45",
    UsbA = "usb-a",
    UsbB = "usb-b",
    UsbC = "usb-c",
    UsbMiniA = "usb-mini-a",
    UsbMiniB = "usb-mini-b",
    UsbMicroA = "usb-micro-a",
    UsbMicroB = "usb-micro-b",
    Other = "other"
}
export declare class ConsolePortType extends SpeakeasyBase {
    label: ConsolePortTypeLabelEnum;
    value: ConsolePortTypeValueEnum;
}
export declare class ConsolePort extends SpeakeasyBase {
    cable?: NestedCable;
    /**
     *
     * @remarks
     * Return the appropriate serializer for the type of connected object.
     *
     */
    connectedEndpoint?: Record<string, string>;
    connectedEndpointType?: string;
    connectionStatus?: ConsolePortConnectionStatus;
    description?: string;
    device: NestedDevice;
    id?: number;
    name: string;
    tags?: string[];
    type?: ConsolePortType;
}
