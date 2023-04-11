import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableConsolePortConnectionStatusEnum {
    False = "false",
    True = "true"
}
export declare class WritableConsolePortInput extends SpeakeasyBase {
    connectionStatus?: WritableConsolePortConnectionStatusEnum;
    csPort?: number;
    device: number;
    name: string;
    tags?: string[];
}
