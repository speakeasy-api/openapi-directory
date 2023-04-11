import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDeviceType } from "./nesteddevicetype";
export declare enum ConsolePortTemplateTypeLabelEnum {
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
export declare enum ConsolePortTemplateTypeValueEnum {
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
export declare class ConsolePortTemplateType extends SpeakeasyBase {
    label: ConsolePortTemplateTypeLabelEnum;
    value: ConsolePortTemplateTypeValueEnum;
}
export declare class ConsolePortTemplate extends SpeakeasyBase {
    deviceType: NestedDeviceType;
    id?: number;
    name: string;
    type?: ConsolePortTemplateType;
}
