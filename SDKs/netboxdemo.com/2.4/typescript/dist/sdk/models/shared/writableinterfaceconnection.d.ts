import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableInterfaceConnectionStatusEnum {
    False = "false",
    True = "true"
}
export declare class WritableInterfaceConnectionInput extends SpeakeasyBase {
    connectionStatus?: WritableInterfaceConnectionStatusEnum;
    interfaceA: number;
    interfaceB: number;
}
