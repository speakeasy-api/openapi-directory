import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Export permissions.
 */
export declare enum NfsExportPermissionsEnum {
    PermissionsUnspecified = "PERMISSIONS_UNSPECIFIED",
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE"
}
/**
 * A NFS export entry.
 */
export declare class NfsExport extends SpeakeasyBase {
    /**
     * Allow dev flag in NfsShare AllowedClientsRequest.
     */
    allowDev?: boolean;
    /**
     * Allow the setuid flag.
     */
    allowSuid?: boolean;
    /**
     * A CIDR range.
     */
    cidr?: string;
    /**
     * Either a single machine, identified by an ID, or a comma-separated list of machine IDs.
     */
    machineId?: string;
    /**
     * Network to use to publish the export.
     */
    networkId?: string;
    /**
     * Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication.
     */
    noRootSquash?: boolean;
    /**
     * Export permissions.
     */
    permissions?: NfsExportPermissionsEnum;
}
