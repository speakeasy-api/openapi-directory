import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The operating system type where this account applies.
 */
export declare enum PosixAccountOperatingSystemTypeEnum {
    OperatingSystemTypeUnspecified = "OPERATING_SYSTEM_TYPE_UNSPECIFIED",
    Linux = "LINUX",
    Windows = "WINDOWS"
}
/**
 * The POSIX account information associated with a Google account.
 */
export declare class PosixAccount extends SpeakeasyBase {
    /**
     * Output only. A POSIX account identifier.
     */
    accountId?: string;
    /**
     * The GECOS (user information) entry for this account.
     */
    gecos?: string;
    /**
     * The default group ID.
     */
    gid?: string;
    /**
     * The path to the home directory for this account.
     */
    homeDirectory?: string;
    /**
     * Output only. The canonical resource name.
     */
    name?: string;
    /**
     * The operating system type where this account applies.
     */
    operatingSystemType?: PosixAccountOperatingSystemTypeEnum;
    /**
     * Only one POSIX account can be marked as primary.
     */
    primary?: boolean;
    /**
     * The path to the logic shell for this account.
     */
    shell?: string;
    /**
     * System identifier for which account the username or uid applies to. By default, the empty value is used.
     */
    systemId?: string;
    /**
     * The user ID.
     */
    uid?: string;
    /**
     * The username of the POSIX account.
     */
    username?: string;
}
