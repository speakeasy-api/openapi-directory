import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NotificationSubscriptionDeviceEnum {
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

export enum NotificationSubscriptionTypeEnum {
    OneSignal = "OneSignal"
}


export class NotificationSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: NotificationSubscriptionDeviceEnum;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NotificationSubscriptionTypeEnum;
}
