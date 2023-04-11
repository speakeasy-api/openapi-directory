import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Operating system information for the VM.
 */
export declare class OsInfo extends SpeakeasyBase {
    /**
     * The system architecture of the operating system.
     */
    architecture?: string;
    /**
     * The VM hostname.
     */
    hostname?: string;
    /**
     * The kernel release of the operating system.
     */
    kernelRelease?: string;
    /**
     * The kernel version of the operating system.
     */
    kernelVersion?: string;
    /**
     * The operating system long name. For example 'Debian GNU/Linux 9' or 'Microsoft Window Server 2019 Datacenter'.
     */
    longName?: string;
    /**
     * The current version of the OS Config agent running on the VM.
     */
    osconfigAgentVersion?: string;
    /**
     * The operating system short name. For example, 'windows' or 'debian'.
     */
    shortName?: string;
    /**
     * The version of the operating system.
     */
    version?: string;
}
