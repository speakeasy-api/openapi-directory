import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of access mode this instance.
 */
export declare enum RuntimeAccessConfigAccessTypeEnum {
    RuntimeAccessTypeUnspecified = "RUNTIME_ACCESS_TYPE_UNSPECIFIED",
    SingleUser = "SINGLE_USER",
    ServiceAccount = "SERVICE_ACCOUNT"
}
/**
 * Specifies the login configuration for Runtime
 */
export declare class RuntimeAccessConfigInput extends SpeakeasyBase {
    /**
     * The type of access mode this instance.
     */
    accessType?: RuntimeAccessConfigAccessTypeEnum;
    /**
     * The owner of this runtime after creation. Format: `alias@example.com` Currently supports one owner only.
     */
    runtimeOwner?: string;
}
/**
 * Specifies the login configuration for Runtime
 */
export declare class RuntimeAccessConfig extends SpeakeasyBase {
    /**
     * The type of access mode this instance.
     */
    accessType?: RuntimeAccessConfigAccessTypeEnum;
    /**
     * Output only. The proxy endpoint that is used to access the runtime.
     */
    proxyUri?: string;
    /**
     * The owner of this runtime after creation. Format: `alias@example.com` Currently supports one owner only.
     */
    runtimeOwner?: string;
}
