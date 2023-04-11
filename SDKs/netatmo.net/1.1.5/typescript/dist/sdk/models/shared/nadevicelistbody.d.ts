import { SpeakeasyBase } from "../../../internal/utils";
import { NADevice } from "./nadevice";
import { NAModule } from "./namodule";
export declare class NADeviceListBody extends SpeakeasyBase {
    devices?: NADevice[];
    modules?: NAModule[];
}
