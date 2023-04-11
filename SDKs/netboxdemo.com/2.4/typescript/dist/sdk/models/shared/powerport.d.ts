import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedPowerOutlet } from "./nestedpoweroutlet";
export declare enum PowerPortConnectionStatusEnum {
    False = "false",
    True = "true"
}
export declare class PowerPort extends SpeakeasyBase {
    connectionStatus?: PowerPortConnectionStatusEnum;
    device: NestedDevice;
    id?: number;
    name: string;
    powerOutlet?: NestedPowerOutlet;
    tags?: string[];
}
