import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mount permissions.
 */
export declare enum AllowedClientMountPermissionsEnum {
    MountPermissionsUnspecified = "MOUNT_PERMISSIONS_UNSPECIFIED",
    Read = "READ",
    ReadWrite = "READ_WRITE"
}
/**
 * Represents an 'access point' for the share.
 */
export declare class AllowedClient extends SpeakeasyBase {
    /**
     * Allow dev flag. Which controls whether to allow creation of devices.
     */
    allowDev?: boolean;
    /**
     * Allow the setuid flag.
     */
    allowSuid?: boolean;
    /**
     * The subnet of IP addresses permitted to access the share.
     */
    allowedClientsCidr?: string;
    /**
     * Mount permissions.
     */
    mountPermissions?: AllowedClientMountPermissionsEnum;
    /**
     * The network the access point sits on.
     */
    network?: string;
    /**
     * Output only. The path to access NFS, in format shareIP:/InstanceID InstanceID is the generated ID instead of customer provided name. example like "10.0.0.0:/g123456789-nfs001"
     */
    nfsPath?: string;
    /**
     * Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication.
     */
    noRootSquash?: boolean;
    /**
     * Output only. The IP address of the share on this network. Assigned automatically during provisioning based on the network's services_cidr.
     */
    shareIp?: string;
}
/**
 * Represents an 'access point' for the share.
 */
export declare class AllowedClientInput extends SpeakeasyBase {
    /**
     * Allow dev flag. Which controls whether to allow creation of devices.
     */
    allowDev?: boolean;
    /**
     * Allow the setuid flag.
     */
    allowSuid?: boolean;
    /**
     * The subnet of IP addresses permitted to access the share.
     */
    allowedClientsCidr?: string;
    /**
     * Mount permissions.
     */
    mountPermissions?: AllowedClientMountPermissionsEnum;
    /**
     * The network the access point sits on.
     */
    network?: string;
    /**
     * Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication.
     */
    noRootSquash?: boolean;
}
