import { SpeakeasyBase } from "../../../internal/utils";
import { APNConfigFields } from "./apnconfigfields";
import { FirebaseConfigFields } from "./firebaseconfigfields";
import { HuaweiConfigFields } from "./huaweiconfigfields";
import { PushProvider } from "./pushprovider";
import { XiaomiConfigFields } from "./xiaomiconfigfields";
export declare class PushNotificationFields extends SpeakeasyBase {
    apn: APNConfigFields;
    firebase: FirebaseConfigFields;
    huawei: HuaweiConfigFields;
    offlineOnly: boolean;
    providers?: PushProvider[];
    version: string;
    xiaomi: XiaomiConfigFields;
}
