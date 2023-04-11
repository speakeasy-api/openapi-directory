import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NotificationSubscriptionDeviceEnum {
    IOS = "iOS",
    Android = "Android",
    Chrome = "Chrome",
    Firefox = "Firefox",
    Safari = "Safari",
    Edge = "Edge",
    Amazon = "Amazon",
    WindowsPhone = "WindowsPhone",
    Windows = "Windows",
    MacOS = "MacOS"
}
export declare enum NotificationSubscriptionTypeEnum {
    OneSignal = "OneSignal"
}
export declare class NotificationSubscription extends SpeakeasyBase {
    device?: NotificationSubscriptionDeviceEnum;
    /**
     * OneSignal calls this "player ID".
     */
    endpoint?: string;
    type?: NotificationSubscriptionTypeEnum;
}
