import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OSVersion specifies the Windows node config to be used on the node
 */
export declare enum WindowsNodeConfigOsVersionEnum {
    OsVersionUnspecified = "OS_VERSION_UNSPECIFIED",
    OsVersionLtsc2019 = "OS_VERSION_LTSC2019",
    OsVersionLtsc2022 = "OS_VERSION_LTSC2022"
}
/**
 * Parameters that can be configured on Windows nodes. Windows Node Config that define the parameters that will be used to configure the Windows node pool settings
 */
export declare class WindowsNodeConfig extends SpeakeasyBase {
    /**
     * OSVersion specifies the Windows node config to be used on the node
     */
    osVersion?: WindowsNodeConfigOsVersionEnum;
}
