import { SpeakeasyBase } from "../../../internal/utils";
import { NestedConsoleServerPort } from "./nestedconsoleserverport";
import { NestedDevice } from "./nesteddevice";
export declare enum ConsolePortConnectionStatusEnum {
    False = "false",
    True = "true"
}
export declare class ConsolePort extends SpeakeasyBase {
    connectionStatus?: ConsolePortConnectionStatusEnum;
    csPort?: NestedConsoleServerPort;
    device: NestedDevice;
    id?: number;
    name: string;
    tags?: string[];
}
