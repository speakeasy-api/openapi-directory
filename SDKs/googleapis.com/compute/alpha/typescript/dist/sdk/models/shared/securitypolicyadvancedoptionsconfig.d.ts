import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyAdvancedOptionsConfigJsonCustomConfig } from "./securitypolicyadvancedoptionsconfigjsoncustomconfig";
export declare enum SecurityPolicyAdvancedOptionsConfigJsonParsingEnum {
    Disabled = "DISABLED",
    Standard = "STANDARD"
}
export declare enum SecurityPolicyAdvancedOptionsConfigLogLevelEnum {
    Normal = "NORMAL",
    Verbose = "VERBOSE"
}
export declare class SecurityPolicyAdvancedOptionsConfig extends SpeakeasyBase {
    jsonCustomConfig?: SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
    jsonParsing?: SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
    logLevel?: SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
}
