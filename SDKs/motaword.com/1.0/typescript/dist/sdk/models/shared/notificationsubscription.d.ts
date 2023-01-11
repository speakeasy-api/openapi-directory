import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NotificationSubscriptionDeviceEnum {
    IOs = "iOS",
    Android = "Android",
    Chrome = "Chrome",
    Firefox = "Firefox",
    Safari = "Safari",
    Edge = "Edge",
    Amazon = "Amazon",
    WindowsPhone = "WindowsPhone",
    Windows = "Windows",
    MacOs = "MacOS"
}
export declare enum NotificationSubscriptionTypeEnum {
    OneSignal = "OneSignal"
}
export declare class NotificationSubscription extends SpeakeasyBase {
    device?: NotificationSubscriptionDeviceEnum;
    endpoint?: string;
    type?: NotificationSubscriptionTypeEnum;
}
