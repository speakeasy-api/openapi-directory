import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SELinux details.
 */
export declare class Selinux extends SpeakeasyBase {
    /**
     * Is SELinux enabled.
     */
    enabled?: boolean;
    /**
     * SELinux mode enforcing / permissive.
     */
    mode?: string;
}
