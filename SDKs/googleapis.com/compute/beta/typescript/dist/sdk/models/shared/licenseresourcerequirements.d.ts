import { SpeakeasyBase } from "../../../internal/utils";
export declare class LicenseResourceRequirements extends SpeakeasyBase {
    /**
     * Minimum number of guest cpus required to use the Instance. Enforced at Instance creation and Instance start.
     */
    minGuestCpuCount?: number;
    /**
     * Minimum memory required to use the Instance. Enforced at Instance creation and Instance start.
     */
    minMemoryMb?: number;
}
