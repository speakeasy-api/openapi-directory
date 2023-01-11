import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfig } from "./networkconfig";
import { NetworkConfigInput } from "./networkconfig";
export declare class AuxiliaryVersionConfig extends SpeakeasyBase {
    configOverrides?: Record<string, string>;
    networkConfig?: NetworkConfig;
    version?: string;
}
export declare class AuxiliaryVersionConfigInput extends SpeakeasyBase {
    configOverrides?: Record<string, string>;
    networkConfig?: NetworkConfigInput;
    version?: string;
}
