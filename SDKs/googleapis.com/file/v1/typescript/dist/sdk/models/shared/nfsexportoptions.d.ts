import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE.
 */
export declare enum NfsExportOptionsAccessModeEnum {
    AccessModeUnspecified = "ACCESS_MODE_UNSPECIFIED",
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE"
}
/**
 * Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. The default is NO_ROOT_SQUASH.
 */
export declare enum NfsExportOptionsSquashModeEnum {
    SquashModeUnspecified = "SQUASH_MODE_UNSPECIFIED",
    NoRootSquash = "NO_ROOT_SQUASH",
    RootSquash = "ROOT_SQUASH"
}
/**
 * NFS export options specifications.
 */
export declare class NfsExportOptions extends SpeakeasyBase {
    /**
     * Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE.
     */
    accessMode?: NfsExportOptionsAccessModeEnum;
    /**
     * An integer representing the anonymous group id with a default value of 65534. Anon_gid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings.
     */
    anonGid?: string;
    /**
     * An integer representing the anonymous user id with a default value of 65534. Anon_uid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings.
     */
    anonUid?: string;
    /**
     * List of either an IPv4 addresses in the format `{octet1}.{octet2}.{octet3}.{octet4}` or CIDR ranges in the format `{octet1}.{octet2}.{octet3}.{octet4}/{mask size}` which may mount the file share. Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned. The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.
     */
    ipRanges?: string[];
    /**
     * Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. The default is NO_ROOT_SQUASH.
     */
    squashMode?: NfsExportOptionsSquashModeEnum;
}
