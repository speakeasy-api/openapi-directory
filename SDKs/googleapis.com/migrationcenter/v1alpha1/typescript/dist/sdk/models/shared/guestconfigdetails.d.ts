import { SpeakeasyBase } from "../../../internal/utils";
import { FstabEntryList } from "./fstabentrylist";
import { HostsEntryList } from "./hostsentrylist";
import { NfsExportList } from "./nfsexportlist";
import { Selinux } from "./selinux";
/**
 * Guest OS config information.
 */
export declare class GuestConfigDetails extends SpeakeasyBase {
    /**
     * Fstab content.
     */
    fstab?: FstabEntryList;
    /**
     * Hosts content.
     */
    hosts?: HostsEntryList;
    /**
     * OS issue (typically /etc/issue in Linux).
     */
    issue?: string;
    /**
     * NFS exports.
     */
    nfsExports?: NfsExportList;
    /**
     * SELinux details.
     */
    selinux?: Selinux;
}
