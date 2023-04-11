import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritablePowerPortConnectionStatusEnum {
    False = "false",
    True = "true"
}
export declare class WritablePowerPortInput extends SpeakeasyBase {
    connectionStatus?: WritablePowerPortConnectionStatusEnum;
    device: number;
    name: string;
    powerOutlet?: number;
    tags?: string[];
}
